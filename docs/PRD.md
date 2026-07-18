# Product Requirements Document (PRD)

> **Papel deste documento na cadeia:** o [`VISION.md`](VISION.md) decide *por quê*; a [`EDITORIAL_POLICY.md`](EDITORIAL_POLICY.md) define o compromisso de credibilidade; o [`LEARNING_DESIGN.md`](LEARNING_DESIGN.md) decide *como se ensina*; o [`GAME_DESIGN.md`](GAME_DESIGN.md) decide *como se joga*. Este PRD decide **o que construir, em que ordem e com que critério de aceitação** — sem redefinir nada dos anteriores. Em conflito, a precedência é VISION > EDITORIAL_POLICY > LDD > GDD > PRD.
>
> Escopo deste PRD: **Piloto fechado + MVP público** (fases da VISION §16.2). V1+ entra apenas como referência de release.

---

## 1. Objetivos do produto (MVP)

| # | Objetivo | Métrica de validação (hipóteses de meta para o piloto) |
|---|---|---|
| O1 | Validar que o loop de aprendizado vicia (tese central do MVP) | D7 ≥ 20% e D30 ≥ 10% na coorte do piloto; sessões ≥ 3/semana entre retidos |
| O2 | Validar que o produto ensina de verdade (não ilusão de progresso) | Taxa de acerto em revisões espaçadas 80-90%; North Star (nós Dominados/usuário ativo/semana) ≥ 1 |
| O3 | Validar a diversão central (descoberta — GDD §1.3-1.4) | Testes qualitativos: usuários relatam momentos "aha" espontaneamente; NPS do piloto ≥ 30 |
| O4 | Validar o vínculo com Thoth | % de retidos que citam Thoth como motivo de retorno em entrevistas; interação voluntária com o companheiro |
| O5 | Decidir as hipóteses sob suspeita do GDD | Experimento XP oculto (GDD §5.0) e leitura de títulos vs. marcos (GDD §5.3) concluídos com decisão registrada |

Metas numéricas são hipóteses a recalibrar após a primeira coorte — o compromisso é medir e decidir, não acertar o número de primeira.

## 2. Escopo

**Dentro (MVP — VISION §16.1, GDD):** Corredor do Tempo; 2-3 jornadas completas; lições + interações (LDD §3, §7); agendador SRS por afirmação com missões de revisão; Thoth com 3 estágios; streak compassivo com Selos do Tempo; XP/níveis/títulos (como hipóteses instrumentadas); nível de consenso; 2 cards compartilháveis; estatísticas essenciais; onboarding com vitória antes do cadastro; notificação diária única; ferramenta interna mínima de conteúdo; instrumentação e experimentos.

**Fora (não construir agora):** museu, Atlas Vivo, ligas/ranking, eventos, quiz mundial, IA conversacional em produção, segundo domínio, B2B, moeda gastável, social profundo (VISION §16.2-16.3, GDD §10, §13).

## 3. Requisitos funcionais

Numeração `RF-XX.Y`. Cada bloco referencia o documento que o especifica em detalhe.

### RF-01 — Onboarding (GDD §2, VISION §17-D1)
1. Primeira lição jogável **antes** de qualquer cadastro; progresso local preservado ao criar conta depois.
2. Fluxo: boas-vindas de Thoth (≤3 telas) → escolha de jornada (2-3 opções, pela *pergunta central* de cada uma) → primeira lição → primeira celebração → convite de cadastro.
3. Cadastro por e-mail e provedores sociais (Apple/Google); recusa de cadastro não bloqueia o uso local por até N dias (parâmetro).
4. Pedido de permissão de notificação só **após** a primeira celebração, nunca na abertura.

### RF-02 — Corredor do Tempo (GDD §4)
1. Timeline vertical/horizontal navegável por eras, com nós nos 5 estados visuais (apagado/tênue/aceso/chama firme/constelação) + estado "vacilando" (regressão).
2. Desbloqueio por jornada; fios de conexão visíveis quando uma jornada salta eras.
3. Eras não cobertas pelo conteúdo de lançamento aparecem como "salas seladas" (sem interação além de teaser).
4. Toque em nó aceso: resumo do nó, afirmações-chave, conexões, acesso ao aprofundamento (LDD §4).

### RF-03 — Lições e interações (LDD §3, §7; GDD §6.4)
1. Player de lição com a anatomia do LDD §3 (gancho → narrativa → interações → conexão → fecho) e os 7 tipos de interação do LDD §7.
2. Caminho do erro obrigatório: resposta errada abre explicação dedicada, sem custo, e marca a afirmação para revisão antecipada.
3. Duas interações consecutivas nunca do mesmo tipo (GDD §6.4); revisões nunca reutilizam a pergunta original da lição.
4. Indicador de nível de consenso nas afirmações classificadas como disputadas, com painel "quem defende / quem discorda / por quê" ao toque.
5. Conteúdo da jornada ativa disponível offline (download automático do próximo trecho em Wi-Fi); progresso sincroniza ao reconectar.

### RF-04 — Agendador SRS e missões (GDD §3, §6)
1. Agendamento por afirmação com o ciclo de vida do GDD §6.2 (3d → 14d → Dominada → manutenção; regressão → "memória se apagando" com XP ×2).
2. Missão diária composta pelos 3 slots do GDD §3.1, executáveis em qualquer ordem.
3. Teto diário de ~15 afirmações em revisão; excedente priorizado por risco, invisível ao usuário.
4. Retorno de ausência longa: missão de resgate curta (≤10 afirmações mais em risco), tom de reencontro.
5. Nenhum parâmetro do algoritmo exposto na interface, em nenhuma tela.

### RF-05 — Thoth (GDD §7)
1. 3 estágios de evolução com gatilhos de marco (1ª jornada; 10 nós Dominados + 2ª jornada), com celebração dedicada e card.
2. Estados emocionais: celebrando, concentrado, solene (nós de tragédia — obrigatório), saudade (sem culpa — copy revisada contra a regra do GDD §7.2).
3. Pergaminho-diário: registro visual das eras dominadas pela dupla.
4. Aniversário da dupla (ritual anual simples).

### RF-06 — Streak compassivo (GDD §8)
1. Streak conta com ≥1 slot da missão diária completo.
2. Selo do Tempo: +1 a cada 7 dias (máx. 2 acumulados), consumo automático, nunca vendido.
3. Reacender: missão dupla em 48h restaura o streak quebrado.
4. Marcos (7/30/100/365): celebração + cosmético; sem XP.

### RF-07 — XP, níveis e títulos (GDD §5 — regime de hipótese)
1. Fontes e valores do GDD §5.1; eventos sem XP (presença, streak, compartilhamento) de fato não geram XP.
2. Exibição de XP encapsulada por feature flag para o experimento de ocultação por coorte (GDD §5.0).
3. Títulos com portões de compreensão do GDD §5.3, também atrás de flag (hipótese títulos vs. marcos).

### RF-08 — Celebração e cards (GDD §9, §11)
1. Ordem fixa de celebração de marco (nó acende → Thoth → conexões → card → XP por último).
2. Modo solene automático para nós marcados como sensíveis no conteúdo (LDD §8).
3. Cards de conclusão de era e evolução de Thoth: geração automática de imagem, compartilhamento nativo em 1 toque, nunca obrigatório.

### RF-09 — Estatísticas essenciais (GDD/VISION)
1. Painel com: nós por estado, precisão, streak, horas, jornadas em andamento.
2. Sem comparação com outros usuários no MVP.

### RF-10 — Notificações (GDD §12)
1. Máx. 1/dia, conteúdo concreto (memória em risco, gancho do amanhã, efeméride), agendamento no fuso do usuário.
2. Proibições do GDD §12 aplicadas como revisão de copy obrigatória.

### RF-11 — Conta, dados e privacidade
1. Autenticação (e-mail + Apple/Google), recuperação de senha, exclusão de conta com apagamento de dados pessoais.
2. Conformidade LGPD (público inicial brasileiro): consentimento explícito para analytics, exportação de dados sob solicitação, política de privacidade legível.
3. Menores de idade: definir idade mínima (13+) e tratamento correspondente nas lojas.

### RF-12 — Ferramenta interna de conteúdo (LDD §2, §9)
1. Formato de autoria versionável (arquivos estruturados em repositório servem para o MVP — não construir CMS web agora).
2. Validação automatizada do checklist mecânico do LDD §10: campos obrigatórios, tipos de interação por lição, caminho do erro presente, classificação de consenso preenchida, flag de sensibilidade.
3. Pré-visualização de lição para o revisor especialista.
4. Publicação de conteúdo desacoplada de release do app (conteúdo novo sem atualizar o binário).

### RF-13 — Instrumentação e experimentos
1. Eventos mínimos: sessão, lição iniciada/concluída, interação (tipo, acerto, tentativa, tempo), transição de estado de nó/afirmação, revisão, streak, celebração exibida, card gerado/compartilhado, notificação aberta.
2. Coortes e feature flags para os experimentos do GDD (§1.5, §5.0, §5.3).
3. Painel interno com North Star, funil D1/D7/D30 e painel de calibração (GDD Apêndice A).

### RF-14 — Transparência editorial (EDITORIAL_POLICY, "Na interface")
1. Botão **"Por que existe debate sobre este assunto?"** em toda afirmação classificada como interpretação historiográfica ou debate em aberto — abre as posições, quem as defende, grau de aceitação e evidências.
2. **Página de metodologia editorial** acessível de dentro do app (e como página web pública): como o conteúdo é produzido, revisado e atualizado, com o texto canônico do compromisso (EDITORIAL_POLICY). Linguagem acessível, não jurídica.
3. **Histórico de revisões visível:** conteúdo atualizado exibe indicação discreta ("revisado em [data]") com acesso ao que mudou e por quê, em linguagem para leigos.
4. Classe epistêmica dos claims (fato/hipótese/interpretação/debate — EDITORIAL_POLICY, Princípio 3) presente no modelo de conteúdo e refletida no comportamento das perguntas (interpretações nunca cobradas como resposta objetiva — validado em CI junto ao checklist do LDD).
5. Auditoria de copy de marketing/lojas contra as promessas proibidas ("neutro", "sem ideologia", "verdade absoluta") antes de qualquer publicação.

## 4. Requisitos não funcionais

| # | Requisito | Critério |
|---|---|---|
| RNF-1 | Partida rápida | Abertura → primeira interação possível em ≤3s em aparelho Android mediano (persona Marina, celular não-premium) |
| RNF-2 | Offline-first no aprendizado | Lição da jornada ativa e revisões do dia funcionam sem rede (transporte público é o contexto primário da persona Marina); sincronização resiliente a conflito |
| RNF-3 | Leveza | App ≤ ~80MB no primeiro download; conteúdo baixado sob demanda |
| RNF-4 | Privacidade | LGPD (RF-11); analytics anonimizável; nenhum dado de aprendizado vendido/compartilhado — compromisso público |
| RNF-5 | Acessibilidade | Fontes escaláveis, contraste AA, leitores de tela nas telas de lição (aprendizado é o núcleo — precisa ser acessível) |
| RNF-6 | Idioma | PT-BR nativo no lançamento; arquitetura de strings pronta para i18n |
| RNF-7 | Confiabilidade do progresso | Perda de progresso = defeito crítico; escrita local primeiro, sync depois; nunca perder um streak por bug (compensação automática em incidente) |
| RNF-8 | Observabilidade | Crash reporting + logs estruturados de sync/SRS desde o piloto |
| RNF-9 | Custo | Infra do piloto compatível com projeto independente (dimensionamento na Etapa 5 — Arquitetura) |

## 5. Fluxos de usuário (principais)

### 5.1 Primeira sessão (D1)
Abrir app → Thoth (2-3 telas) → escolher jornada pela pergunta central → lição 1 (gancho → narrativa → interações) → celebração (nó tênue → aceso) → convite de cadastro (recusável) → pedido de notificação → fecho com gancho do amanhã.

### 5.2 Sessão diária típica
Abrir → abertura de 5s (Thoth + Corredor onde parou) → missão do dia (slots em qualquer ordem) → celebrações conforme marcos → fecho de sessão com gancho.

### 5.3 Memória se apagando
Notificação ("A memória de Roma está vacilando — 3 min a resgatam") → abrir direto na missão de resgate → revisões (formatos diferentes da lição original) → chama volta a firme → XP ×2 → fecho.

### 5.4 Quebra e reacendimento de streak
Dia perdido → Selo do Tempo consome sozinho (se houver) e nada acontece → sem Selo: streak quebra **sem tela de luto**; próxima abertura oferece "reacender" (missão dupla/48h) → sucesso = streak restaurado com celebração de retorno.

### 5.5 Compartilhamento
Marco com card → card na celebração (passo 4) → 1 toque para compartilhar (share sheet nativo) → recusa sem fricção; card acessível depois no painel de estatísticas.

## 6. Histórias de usuário e critérios de aceitação (seleção crítica)

**H1 — Vitória antes do cadastro** (Marina) — *Como curiosa casual, quero aprender algo real antes de criar conta.*
✓ Dado um primeiro acesso, quando completo a primeira lição, então vejo a celebração completa sem ter fornecido nenhum dado; e quando crio conta depois, meu progresso local é preservado.

**H2 — Escolher minha pergunta** (todas) — *Quero escolher qual jornada começar pela pergunta que me intriga.*
✓ Dado o onboarding, quando vejo as jornadas, então cada opção mostra sua pergunta central (não um título de "curso"); e posso trocar de jornada depois sem perder progresso nem sofrer punição.

**H3 — Errar sem medo** (Marina/Rafael) — *Quero errar e sair sabendo mais, não punido.*
✓ Dado que respondo errado, então recebo a explicação do porquê (caminho do erro), nenhuma vida/recurso é descontado, a afirmação entra para revisão antecipada, e posso tentar de novo na hora.

**H4 — O app sabe o que estou esquecendo** (Rafael) — *Quero que o app note o que estou esquecendo antes de mim.*
✓ Dado que afirmações minhas entraram em risco (GDD §6.2), então recebo missão "memória se apagando" com XP ×2; as perguntas usam formato diferente da lição original; ao completar, a chama do nó volta a firme.
✓ Dado que fiquei semanas fora, quando volto, recebo missão de resgate ≤10 afirmações — nunca uma pilha de dívida.

**H5 — Consenso transparente** (Rafael/Beatriz) — *Quero saber quando a história é disputada e por quem.*
✓ Dado uma afirmação disputada, então vejo o indicador de consenso; ao tocar, vejo os lados do debate e fontes; nenhuma pergunta objetiva me cobra "resposta certa" sobre o que é disputado (LDD §7).

**H6 — Thoth cresce comigo** (Marina) — *Quero sentir que meu companheiro evolui por causa do que eu aprendi.*
✓ Dado que completo minha 1ª jornada, então Thoth evolui ao estágio 2 com celebração e card; o pergaminho-diário dele mostra as eras que dominamos; nenhuma mensagem dele usa culpa (auditoria de copy).

**H7 — Streak sem ansiedade** (Marina) — *Quero manter o hábito sem medo de perder tudo.*
✓ Dado 7 dias de streak, então ganho 1 Selo do Tempo (máx. 2); dado um dia perdido com Selo, o streak continua sem drama; sem Selo, posso reacender em 48h com missão dupla.

**H8 — Sensibilidade** (todas) — *Não quero confete em cima de tragédia.*
✓ Dado um nó marcado sensível, então a celebração usa o modo solene (sem confete/som festivo, copy de reflexão) e Thoth fica solene — verificável por teste automatizado da flag.

**H9 — Aprender no metrô** (Marina) — *Quero estudar sem sinal.*
✓ Dado que a jornada ativa foi baixada, quando estou offline, então lições e revisões do dia funcionam; ao reconectar, progresso sincroniza sem perda nem duplicação.

**H10 — Compartilhar conquista** (Marina) — *Quero mostrar que terminei a Antiguidade.*
✓ Dado a conclusão de uma era, então recebo card legível em 3s por quem não conhece o app, compartilhável em 1 toque, e recusável sem fricção.

**H11 — Publicar conteúdo sem release** (equipe) — *Como editores, queremos publicar jornada nova sem atualizar o app.*
✓ Dado conteúdo validado (checklist LDD §10 automatizado), quando publicado, então aparece para usuários sem novo binário; conteúdo reprovado na validação não publica.

**H12 — Experimento XP oculto** (equipe) — *Queremos saber se XP importa.*
✓ Dado a flag ativa numa coorte, então essa coorte não vê XP/nível em nenhuma tela (celebrações e progressão visual intactas) e os eventos de instrumentação continuam registrando tudo.

## 7. Métricas e instrumentação

- **North Star:** nós Dominados por usuário ativo por semana (definição operacional: GDD §6.2 — ≥80% das afirmações Dominadas).
- **Árvore de apoio:** retenção D1/D7/D30 · sessões/semana · streak médio · acerto em revisão (80-90% saudável) · % jornadas concluídas · momentos "aha" reportados (qualitativo) · compartilhamentos/usuário · conversão de cadastro pós-lição 1.
- **Regra de leitura:** engajamento subindo com acerto de revisão caindo = ilusão de progresso — tratar como incidente de produto (Princípio Fundamental), não como vitória.

## 8. Releases e critérios de passagem

| Release | Conteúdo | Critério de saída |
|---|---|---|
| **R0 — Protótipo de papel/Figma** | Loop de sessão navegável; teste da pergunta central das jornadas | Usuários entendem o Corredor sem explicação; escolhem jornada com interesse genuíno |
| **R1 — Piloto fechado** (coorte convidada) | RF-01→13 com 1 jornada completa | O1-O5 medidos; decisão registrada dos experimentos (XP, títulos); calibração do GDD Apêndice A revisada |
| **R2 — MVP público (lojas)** | 2-3 jornadas; naming test resolvido (VISION §19); ajustes do piloto | Metas O1-O2 confirmadas em coorte aberta |
| **V1+** | VISION §16.2 (museu, Atlas, IA explicativa...) | Cada fase valida sua pergunta antes da próxima |

**Caminho crítico de conteúdo:** a 1ª jornada (piloto de processo editorial — LDD §9.2) precisa começar produção **antes** do desenvolvimento terminar; conteúdo, não código, é o gargalo provável do R1.

## 9. Dependências e riscos de entrega

| Risco | Mitigação |
|---|---|
| Conteúdo atrasa o piloto (gargalo editorial) | Iniciar a jornada-piloto já na fase de arquitetura; medir o processo (LDD §9.2) |
| Naming não resolvido trava a ficha das lojas | Teste de naming (VISION §19) durante o desenvolvimento do R1, antes do R2 |
| Escopo crescer dentro do MVP | Qualquer RF novo passa pelo filtro VISION §2.1 + aprovação explícita do fundador |
| SRS mal calibrado frustra (pilha ou trivialidade) | Painel de calibração ativo desde R1; parâmetros server-side ajustáveis sem release |
| Revisor especialista indisponível | Contratar/parceirizar antes da produção da jornada-piloto; sem revisor, sem publicação (LDD §9.1) |

---

**Próximo passo:** Etapa 5 — Arquitetura técnica (`ARCHITECTURE.md`): React Native (Expo) + TypeScript, ASP.NET Core, PostgreSQL, Docker, Azure, JWT, formato do banco de conteúdo e o desenho offline-first/sync exigidos pelos RNF-2 e RNF-7.
