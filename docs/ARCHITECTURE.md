# Arquitetura Técnica

> Subordinado ao [`PRD.md`](PRD.md) (requisitos, especialmente RNF-2 offline-first e RNF-7 confiabilidade de progresso) e à [`VISION.md`](VISION.md) §5 (engine domínio-agnóstica). Stack-base definida pelo fundador: **React Native (Expo) + TypeScript · ASP.NET Core · PostgreSQL · Docker · Azure · JWT**. Este documento transforma essa stack em decisões concretas e registra cada decisão com justificativa (§12).

---

## 1. Princípios arquiteturais

1. **Domínio-agnóstico por schema, não por refactor futuro.** Nenhuma tabela, endpoint ou tipo chama-se "history*" — o domínio é dado, não estrutura (VISION §5).
2. **O log de eventos de aprendizado é a fonte da verdade.** Estados (nó Dominado, streak, XP) são *derivados* de eventos imutáveis — nunca armazenados como única cópia. Isso resolve simultaneamente: sync offline sem conflito, auditoria da North Star, recálculo quando a calibração mudar (GDD Apêndice A) e o experimento de XP oculto (recalcular é reprocessar).
3. **Offline-first de verdade.** O cliente funciona sozinho por dias: conteúdo baixado, SRS provisório local, eventos enfileirados. O servidor reconcilia; o usuário nunca espera rede para aprender (RNF-2).
4. **Parâmetros no servidor, nunca no binário.** Intervalos SRS, curvas de XP, gatilhos do Thoth, flags de experimento — tudo ajustável sem release (PRD RF-13, risco "SRS mal calibrado").
5. **Monólito modular, não microsserviços — por enquanto.** Um repositório, um deploy, módulos com fronteiras explícitas (ver §4). Microsserviços no MVP de um time pequeno é custo sem benefício; as fronteiras de módulo preservam a opção de extração futura. *(Divergência consciente da lista original do fundador, que citava microsserviços — registrada como ADR-2, §12.)*
6. **Conteúdo é publicado, não deployado.** Jornadas novas chegam via pipeline de conteúdo (CDN), sem release do app nem do backend (PRD RF-12.4).
7. **Custo de projeto independente.** Tudo dimensionado para rodar barato no piloto (poucos milhares de usuários) sem reescrita para escalar 10× (§11).

## 2. Visão geral

```
┌─────────────────────────────┐
│  App (React Native + Expo)  │
│  UI · SQLite local · fila   │
│  de eventos · SRS local     │
└──────────┬──────────────────┘
           │ HTTPS/JSON (JWT)
┌──────────▼──────────────────┐      ┌──────────────────────────┐
│  API (ASP.NET Core)         │      │  Pipeline de conteúdo    │
│  monólito modular:          │      │  repo Git (JSON/MD)      │
│  Identity · Content ·       │◄─────│  → CI valida (LDD §10)   │
│  Progress/SRS · Gamification│ lê   │  → publica em Blob + CDN │
│  · Config/Flags · Analytics │      └──────────────────────────┘
└──────────┬──────────────────┘
           │
┌──────────▼──────────────────┐      ┌──────────────────────────┐
│  PostgreSQL                 │      │  Azure                   │
│  eventos (append-only) +    │      │  Container Apps · Blob/  │
│  projeções + conteúdo-índice│      │  CDN · App Insights      │
└─────────────────────────────┘      └──────────────────────────┘
```

## 3. Aplicativo (React Native + Expo + TypeScript)

- **Expo (managed workflow + EAS Build/Update):** velocidade de iteração para time pequeno; OTA updates para correções de UI sem loja. Animações de celebração (GDD §9) com `react-native-reanimated` + Lottie; o Corredor do Tempo com `react-native-skia` se a lista virtual não bastar.
- **Estado:** Zustand (leve, sem cerimônia) + TanStack Query para dados remotos.
- **Banco local:** SQLite (`expo-sqlite`) com Drizzle ORM. Guarda: conteúdo baixado da jornada ativa, estados derivados locais, **fila de eventos de aprendizado** pendentes de sync.
- **SRS local provisório:** o mesmo algoritmo do servidor compilado como pacote TS compartilhado de lógica (ver §6) roda no cliente para agendar revisões offline; o servidor é a autoridade na reconciliação.
- **Feature flags:** snapshot de configuração buscado no login e cacheado — o app nunca bloqueia esperando flag (default seguro embutido).
- **Acessibilidade e strings:** i18n desde o primeiro componente (RNF-5/6).

## 4. Backend (ASP.NET Core, monólito modular)

Módulos (assemblies separados, comunicação interna por interfaces — fronteiras prontas para extração):

| Módulo | Responsabilidade | Observações |
|---|---|---|
| **Identity** | Cadastro, login social (Apple/Google), JWT access (15min) + refresh token rotativo, exclusão de conta LGPD | ASP.NET Identity + OpenIddict ou implementação enxuta própria |
| **Content** | Índice de conteúdo publicado, manifesto de versões, resolução de URLs de CDN | Não serve arquivos de lição — só o índice; o conteúdo vem da CDN |
| **Progress/SRS** | Ingestão do log de eventos, projeções de estado (nó/afirmação/streak), agendador SRS autoritativo, missões do dia | O coração do produto |
| **Gamification** | XP, níveis, títulos, celebrações devidas, cards | Consome projeções do Progress; inteiramente atrás de flags (PRD RF-07) |
| **Config/Flags** | Parâmetros de calibração, feature flags, coortes de experimento | Editável sem deploy |
| **Analytics** | Ingestão de eventos de telemetria (separados dos de aprendizado), export para análise | App Insights + tabelas próprias para o painel de calibração |

- **API:** REST/JSON minimalista, versionada (`/v1`). Contratos gerados para o cliente via OpenAPI → tipos TS.
- **Docker:** um container da API; docker-compose para dev local (API + Postgres + seed de conteúdo).
- **Azure:** Container Apps (escala a zero no piloto = custo mínimo), Azure Database for PostgreSQL Flexible Server (menor tier no piloto), Blob Storage + CDN para conteúdo, App Insights para observabilidade, Key Vault para segredos.

## 5. Modelo de dados (domínio-agnóstico)

### 5.1 Conteúdo (publicado pelo pipeline, indexado no banco)

```
domain(id, slug, name, ...)                    -- "history" é linha, não schema
era(id, domain_id, order, name, color, ...)    -- contexto na timeline
journey(id, domain_id, central_question, ...)  -- jornada
node(id, era_id, name, sensitive:bool, ...)    -- nó da timeline
node_journey(journey_id, node_id, position)    -- jornada atravessa nós (N:N ordenado)
lesson(id, node_id, position, ...)             -- lição
interaction(id, lesson_id, type, payload_ref)  -- 7 tipos do LDD §7
claim(id, node_id, epistemic_class,            -- fato|hipótese|interpretação|debate
      consensus_pct, sources_json, ...)        -- afirmação atômica (unidade do SRS;
                                               -- EDITORIAL_POLICY §3-4)
claim_variant(id, claim_id, type, payload_ref) -- variantes de pergunta p/ revisão
connection(from_node, to_node, type, ...)      -- conhecimento conectado
```

O *payload* pesado (textos, mídia, story cards) vive nos arquivos publicados na CDN, referenciado por hash/versão; o banco guarda o índice e os metadados necessários para agendamento e progressão.

### 5.2 Progresso (o log de eventos + projeções)

```
learning_event(id ULID, user_id, type, entity_ref, payload_json,
               occurred_at, device_id, synced_at)   -- APPEND-ONLY
-- tipos: lesson_started, interaction_answered(correct, attempt, ms),
--        review_answered, session_closed, share_generated, ...

-- Projeções (recalculáveis a partir do log):
user_node_state(user_id, node_id, state, ...)        -- Visitado→Mestre
user_claim_state(user_id, claim_id, srs_stage, due_at, risk, ...)
user_streak(user_id, current, seals, ...)
user_xp(user_id, total, level, ...)                  -- flag-gated
```

Eventos têm ID gerado no cliente (ULID) → ingestão idempotente; reenvio após queda de rede não duplica nada (RNF-7). Eventos são imutáveis → sync sem conflito por definição (não há "última escrita vence" disputada, só união de fatos).

## 6. Motor SRS e lógica compartilhada

- O algoritmo SRS (ciclo do GDD §6.2), o cálculo de estados de nó (LDD §6) e a montagem da missão diária são **especificação executável única**: pacote TypeScript puro (sem dependência de UI/IO), consumido pelo app; o backend reimplementa em C# **contra a mesma suíte de casos de teste versionada** (arquivos JSON de cenário → resultado esperado). Divergência cliente/servidor = teste quebrado, não bug silencioso em produção.
- Parâmetros (intervalos, teto diário, limiares) vêm da Config — o painel de calibração (GDD Apêndice A) mexe neles sem release.
- Reconciliação: cliente agenda provisoriamente; ao sincronizar, o servidor reprocessa os eventos e devolve o cronograma autoritativo. Divergências pequenas são invisíveis; o cliente nunca "perde" uma revisão feita offline.

## 7. Pipeline de conteúdo (PRD RF-12)

1. **Autoria:** repositório Git próprio; cada nó é uma pasta com `node.json` (metadados, claims, consenso, flag sensível) + lições em Markdown estruturado + mídia. Versionável, revisável por PR — o fluxo de revisão especializada (LDD §9.1) é um code review de conteúdo.
2. **Validação em CI:** o checklist mecânico do LDD §10 como script (campos obrigatórios, ≥3 tipos de interação, caminho do erro presente, consenso preenchido em claims disputados, flag de sensibilidade coerente). PR não passa sem validação verde + aprovação do revisor.
3. **Publicação:** merge → build de pacote de conteúdo versionado (JSON compilado + mídia) → Blob/CDN → atualização do manifesto no módulo Content. Apps detectam manifesto novo e baixam sob demanda. Rollback = repontar o manifesto.
4. **IA na autoria (VISION §22, fase "desde já"):** scripts do repositório usam a API do Claude para extração de claims e rascunhos de variantes de revisão — saída sempre entra como *proposta em PR*, nunca publicação direta.

## 8. Experimentos e flags (PRD RF-13)

- Atribuição de coorte determinística por `user_id` (hash estável) no servidor; o app recebe só o veredito (`xp_visible: false`).
- Flags do MVP já conhecidas: `xp_visible`, `titles_visible`, parâmetros SRS, gatilhos do Thoth.
- Eventos de telemetria carregam as flags ativas do usuário no momento — análise de experimento sem reconstrução retroativa.

## 9. Segurança e LGPD (PRD RF-11, RNF-4)

- JWT curto + refresh rotativo com revogação; tokens de dispositivo para push.
- PII isolada no módulo Identity (tabelas separadas); o log de aprendizado referencia só `user_id` opaco → exclusão de conta = apagar Identity + anonimizar eventos (mantêm valor estatístico sem vínculo pessoal, conforme consentimento).
- Consentimento de analytics registrado e respeitado no cliente (não emite telemetria sem opt-in; eventos de aprendizado essenciais ao serviço continuam, base legal de execução de contrato).
- Segredos no Key Vault; TLS em tudo; rate limiting na API pública.

## 10. Observabilidade e painel de calibração

- App Insights (traces, crashes via Sentry ou Crashlytics no app).
- Métricas de produto: job diário materializa North Star, funis e o painel de calibração (GDD Apêndice A) em tabelas de leitura; visualização inicial: Metabase apontando para réplica de leitura (barato e suficiente no piloto).
- Alertas mínimos: falha de sync acima de limiar, fila de eventos crescendo, taxa de acerto de revisão fora de 80-90% (sinal de calibração, PRD §7).

## 11. Ambientes, CI/CD e custo

- **Ambientes:** dev (docker-compose local) · staging · prod. IaC com Bicep (simples, nativo Azure).
- **CI/CD:** GitHub Actions — build/test da API e do pacote TS compartilhado; EAS Build para o app; deploy staging automático, prod com aprovação manual.
- **Custo estimado do piloto** (ordem de grandeza, a confirmar): Container Apps escala-a-zero + Postgres burstable + Blob/CDN + App Insights ≈ **US$ 30-80/mês** com coorte de piloto; a API do Claude para autoria é custo por uso pontual da equipe, não por usuário final (IA em produção só na V1).

## 12. Registro de decisões (ADRs resumidos)

| # | Decisão | Alternativa rejeitada | Justificativa |
|---|---|---|---|
| ADR-1 | Expo managed + EAS | RN bare / nativo puro | Time pequeno, OTA updates, velocidade; ejetar continua possível |
| ADR-2 | **Monólito modular** | Microsserviços (lista original) | Um time pequeno, um deploy, fronteiras por módulo preservam extração futura; microsserviços agora = custo operacional sem ganho |
| ADR-3 | Log de eventos append-only como fonte da verdade | CRUD de estado direto | Sync offline sem conflito, recálculo de calibração, auditoria da North Star, experimentos |
| ADR-4 | SRS como espec executável única (TS) + porta C# com suíte compartilhada | Duplicação informal cliente/servidor | Offline exige SRS no cliente; suíte compartilhada mata divergência silenciosa |
| ADR-5 | Conteúdo em Git + CDN, banco só indexa | CMS web próprio no MVP | Revisão por PR = fluxo editorial do LDD de graça; CMS é custo prematuro |
| ADR-6 | PostgreSQL único (relacional + JSONB nos payloads) | Banco de documentos separado | Um banco para operar; JSONB cobre payloads flexíveis de interação |
| ADR-7 | Container Apps | AKS / App Service clássico | Escala a zero no piloto, Docker nativo, upgrade de escala sem re-arquitetura |
| ADR-8 | IA só na autoria no MVP (API Claude em scripts) | Tutor IA em produção no MVP | VISION §22/16.2: IA de runtime é V1+; autoria assistida entrega valor imediato sem custo por usuário |

---

**Próximo passo:** Etapa 6 — Backlog inicial (`BACKLOG.md` + `ROADMAP.md`): épicos, histórias e tarefas técnicas priorizadas por release (R0→R2, V1+), com dependências — incluindo o caminho crítico de conteúdo apontado no PRD §8.
