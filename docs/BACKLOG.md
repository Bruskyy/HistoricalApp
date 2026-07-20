# Backlog Inicial

> Priorizado por release (ver [`ROADMAP.md`](ROADMAP.md)). Referências: RF/RNF/H do [`PRD.md`](PRD.md), seções do [`GAME_DESIGN.md`](GAME_DESIGN.md) (GDD), [`LEARNING_DESIGN.md`](LEARNING_DESIGN.md) (LDD) e ADRs do [`ARCHITECTURE.md`](ARCHITECTURE.md). Prioridade: **P0** = bloqueia a release; **P1** = entra se houver folga; sem P2 no MVP (filtro VISION §2.1: em dúvida, não entra).
>
> Estimativas deliberadamente ausentes: time pequeno estima por marco na sprint planning, não em documento — o que este backlog fixa é **ordem e dependência**.

---

## Épico E0 — Protótipo e validação inicial (R0)

| # | Item | Dep. | P |
|---|---|---|---|
| E0.1 | Protótipo navegável (Figma): Corredor do Tempo, escolha de jornada por pergunta central, player de lição, celebração | — | P0 |
| E0.2 | Roteiro e execução de teste com 5-8 usuários (personas Marina/Rafael); registrar leitura do Corredor e interesse por jornada | E0.1 | P0 |
| E0.3 | Identidade visual conceitual v1 (paleta pergaminho/tinta, 1 era com cor própria, Thoth em 3 estágios — esboço) | — | P0 |
| E0.4 | Teste de naming (VISION §19): recall 24h, grafia por áudio, busca — Mneme vs. 2-3 alternativas; inclui nome do companheiro | E0.3 | P1 (P0 até R2) |

## Épico E1 — Trilho de conteúdo (paralelo, caminho crítico do R1)

| # | Item | Dep. | P |
|---|---|---|---|
| E1.1 | Contratar/parceirizar revisor especialista (história) — sem isso não há publicação (LDD §9.1) | — | P0 |
| E1.2 | Definir formato de autoria (`node.json` + Markdown estruturado) e repositório de conteúdo (ARCH §7) | — | P0 |
| E1.3 | Escrever a jornada-piloto completa pelo pipeline LDD §2, medindo tempo por etapa (LDD §9.2) | E1.1, E1.2 | P0 |
| E1.4 | Validador de conteúdo em CI (checklist LDD §10 mecanizado) | E1.2 | P0 |
| E1.5 | Scripts de IA para autoria (extração de claims, rascunhos de variantes — saída como PR; ARCH §7.4, ADR-8) | E1.2 | P1 |
| E1.6 | Jornadas 2-5 para o R2, fechando o arco da coleção de lançamento (com o processo recalibrado por E1.3) | E1.3 | P0 (R2) |

## Épico E2 — Fundação técnica (R1)

| # | Item | Dep. | P |
|---|---|---|---|
| E2.1 | Monorepo, CI/CD (GitHub Actions), docker-compose dev, Bicep staging/prod (ARCH §11) | — | P0 |
| E2.2 | Esqueleto API ASP.NET Core com módulos e fronteiras (ARCH §4) + PostgreSQL + migrações | E2.1 | P0 |
| E2.3 | Esqueleto app Expo + TS: navegação, tema, i18n, SQLite/Drizzle, TanStack Query | E2.1 | P0 |
| E2.4 | Identity: cadastro/login (e-mail, Apple, Google), JWT + refresh, exclusão LGPD (RF-11) | E2.2 | P0 |
| E2.5 | Log de eventos: schema `learning_event`, ingestão idempotente por ULID, fila local no app, sync resiliente (ADR-3, RNF-7) | E2.2, E2.3 | P0 |
| E2.6 | Config/Flags: parâmetros server-side + snapshot no cliente + coortes determinísticas (ARCH §8) | E2.2 | P0 |
| E2.7 | Telemetria: eventos mínimos do RF-13.1 + App Insights + crash reporting | E2.3, E2.5 | P0 |

## Épico E3 — Motor de aprendizado (R1)

| # | Item | Dep. | P |
|---|---|---|---|
| E3.1 | Pacote TS compartilhado: SRS (GDD §6.2), estados de nó (LDD §6), montagem de missão diária — com suíte de cenários versionada (ADR-4) | E2.1 | P0 |
| E3.2 | Porta C# do motor validada contra a mesma suíte | E3.1 | P0 |
| E3.3 | Projeções server-side: `user_claim_state`, `user_node_state`, streak (ARCH §5.2) | E3.2, E2.5 | P0 |
| E3.4 | Pipeline de publicação de conteúdo: build do pacote, Blob+CDN, manifesto, download sob demanda no app + offline da jornada ativa (RF-03.5, RNF-2) | E1.2, E2.2 | P0 |

## Épico E4 — Loop vertical fino (R1) — *primeira fatia jogável de ponta a ponta*

> Objetivo: **uma** lição real da jornada-piloto, jogável offline, com celebração e revisão agendada — antes de qualquer sistema de suporte. É o teste do núcleo irredutível (GDD §1.5) em software.

| # | Item | Dep. | P |
|---|---|---|---|
| E4.1 | Player de lição: anatomia LDD §3, 7 tipos de interação, caminho do erro (RF-03.1-2) | E3.4, E2.3 | P0 |
| E4.2 | Corredor do Tempo v1: eras, nós com 6 estados visuais, fios de conexão, salas seladas (RF-02) | E3.3 | P0 |
| E4.3 | Missão diária (3 slots, ordem livre) + missão "memória se apagando" + resgate pós-ausência (RF-04) | E3.1, E4.1 | P0 |
| E4.4 | Celebração: ordem fixa do GDD §9 + modo solene por flag de conteúdo (RF-08.1-2, H8) | E4.2 | P0 |
| E4.5 | Nível de consenso: indicador + painel "quem defende/quem discorda" (RF-03.4, H5) | E4.1 | P0 |
| E4.6 | Regras anti-repetição de interação (GDD §6.4) no montador de sessão | E4.3 | P0 |

## Épico E5 — Emoção e suporte (R1)

| # | Item | Dep. | P |
|---|---|---|---|
| E5.1 | Thoth: 3 estágios, estados emocionais, pergaminho-diário, copy auditada sem culpa (RF-05, H6) | E4.4 | P0 |
| E5.2 | Streak compassivo: Selos do Tempo, reacender 48h, marcos sem XP (RF-06, H7) | E3.3 | P0 |
| E5.3 | XP/níveis/títulos atrás de flags + experimento de ocultação por coorte (RF-07, H12) | E2.6, E3.3 | P0 |
| E5.4 | Onboarding completo: vitória antes do cadastro, migração de progresso local→conta (RF-01, H1) | E4.1, E2.4 | P0 |
| E5.5 | Cards compartilháveis: conclusão de era + evolução de Thoth (RF-08.3, H10) | E4.4, E5.1 | P0 |
| E5.6 | Estatísticas essenciais (RF-09) | E3.3 | P1 |
| E5.7 | Notificação diária única com regras de copy (RF-10) | E4.3 | P0 |
| E5.8 | Painel interno: North Star, funis, calibração (RF-13.3; Metabase — ARCH §10) | E2.7, E3.3 | P0 |

## Épico E6 — Piloto e decisões (R1 → R2)

| # | Item | Dep. | P |
|---|---|---|---|
| E6.1 | Recrutar coorte fechada (50-200 usuários das 3 personas) + canal de feedback | E4-E5 | P0 |
| E6.2 | Rodar piloto ≥4 semanas; entrevistas qualitativas (momentos "aha", Thoth, universo — sinais de fracasso da VISION §9.1) | E6.1 | P0 |
| E6.3 | Decisões registradas: XP visível?, títulos vs. marcos?, calibração SRS/XP revisada (O5 do PRD) | E6.2 | P0 |
| E6.4 | Ajustes do piloto + naming aplicado (ficha das lojas, marca) | E6.3, E0.4 | P0 |
| E6.5 | Lançamento R2 nas lojas com ~5 jornadas de 1 coleção (E1.6) | E6.4, E1.6 | P0 |

## Épicos V1+ (não detalhar agora — apenas reservados)

- **EV1:** Salão do Guardião (museu) · Atlas Vivo · colecionáveis · títulos completos · desafio da semana · ranking assíncrono · IA explicativa (VISION §22).
- **EV2:** Ordens (ligas) · eventos temáticos · retrospectiva anual · IA de conexões.
- **EV3+:** quiz mundial · personagens IA persistentes · segundo domínio · B2B.

Cada um será detalhado **somente** quando a fase anterior responder sua pergunta (ROADMAP, regras de passagem) — detalhar antes seria convite ao scope creep que a VISION §16 proíbe.

---

## Leitura de dependências (resumo do caminho crítico)

```
E1.1 → E1.3 (conteúdo-piloto)  ──────────────┐
E2.1 → E2.2/E2.3 → E2.5 → E3.* → E4.* → E5.* ┼→ E6.1 → E6.2 → E6.3 → E6.5 (R2)
E0.1 → E0.2 (valida antes de E4 congelar UX) ┘         E0.4 ──────→ E6.4
```

O item mais arriscado do plano inteiro é **E1.3** (jornada-piloto): é caminho crítico, depende de contratação (E1.1) e é onde o método (LDD) encontra a realidade. Começar por ele.
