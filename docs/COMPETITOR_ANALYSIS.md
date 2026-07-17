# Análise Competitiva — 20 Apps (Etapa 1)

> Consolidação da pesquisa de mercado para o desenvolvimento de um app educacional gamificado sobre História ("o Duolingo do conhecimento histórico"). Pesquisa realizada em 17/07/2026 via busca na web, dividida em 5 categorias e 5 pesquisas independentes. As notas brutas por app, com fontes e citações, estão em [`docs/research/`](research/). Este documento consolida o ranking geral, as matrizes comparativas de funcionalidades e a leitura estratégica de oportunidades.
>
> **Limitações conhecidas:** números de avaliação/downloads variam entre fontes secundárias (App Store/Google Play bloqueiam scraping direto) e devem ser reconfirmados manualmente antes de decisões de investimento. Onde havia divergência relevante entre fontes, isso foi sinalizado nos arquivos de pesquisa brutos. O app "Today in History" não corresponde a um produto único — ver `docs/research/historia.md` para o critério de escolha entre os ~6 candidatos identificados.

---

## 1. Ranking geral (20 apps)

| # | App | Categoria | Nota | Maior força | Maior fraqueza |
|---|---|---|---|---|---|
| 1 | Duolingo | Idiomas | **9/10** | Gamificação e retenção de hábito | Monetização agressiva |
| 2 | Brilliant | Educação | **8,5/10** | XP + streak + 10 ligas semanais, onboarding personalizado | Preço/cobrança, sem mascote |
| 3 | Finch | Gamificação | **8/10** | Mascote/pet como gancho emocional diário | Falta de analytics de progresso |
| 4 | Busuu | Idiomas | **7,5/10** | Comunidade e correção por nativos | Pouca inovação própria |
| 5 | Quizlet | Memorização | **7,5/10** | Alcance, conteúdo pronto, IA generativa | Gamificação rasa, monetização criticada |
| 6 | Khan Academy | Educação | **7,5/10** | Gratuito, mastery system, tutor IA (Khanmigo) | Sem streak/ligas, humanidades secundárias |
| 7 | Elevate | Gamificação | **7,5/10** | Onboarding + Ligas semanais estilo Duolingo | Free tier limitado, sem mascote |
| 8 | Paladin | História | **7/10** | Onboarding lúdico, colecionáveis, produção A/V | Imprecisão factual, assinatura confusa |
| 9 | Memrise | Idiomas | **7/10** | Vídeos de nativos + repetição espaçada | Gamificação repetitiva |
| 10 | Anki | Memorização | **7/10** | Algoritmo FSRS (repetição espaçada) tecnicamente superior | Zero gamificação, onboarding quase inexistente |
| 11 | Babbel | Idiomas | **6,5/10** | Profundidade pedagógica, onboarding consultivo | Quase nenhuma gamificação |
| 12 | Nibble | História | **6,5/10** | Escala (5-9M downloads), streak forte | História é 1 de 20+ categorias |
| 13 | RemNote | Memorização | **6,5/10** | PKM + SRS + IA integrados | Curva de aprendizado alta, zero gamificação |
| 14 | Habitica | Gamificação | **6,5/10** | Sistema RPG completo (avatar, pets, guildas) | UI poluída, sem conteúdo educacional |
| 15 | Coursera | Educação | **6/10** | Credibilidade, certificação profissional | Gamificação quase inexistente |
| 16 | History Hit | História | **6/10** | Conteúdo editorial de altíssima qualidade | Zero gamificação (mídia passiva) |
| 17 | Lumosity | Gamificação | **6/10** | Índice de desempenho (LPI) sofisticado | Histórico de multa da FTC, sem calor emocional |
| 18 | edX | Educação | **5/10** | Prestígio acadêmico (Harvard, MIT) | Zero gamificação, instabilidade de negócio (2U) |
| 19 | HISTORY Channel | História | **4,5/10** | Marca reconhecida, multiplataforma | Zero estrutura pedagógica, bugs/anúncios |
| 20 | Today in History: Trivia | História | **4/10** | Gatilho diário natural, medalhas recentes | Escala pequena, pouco profissionalizado |

---

## 2. Matriz de gamificação

✅ presente e central · ➖ presente mas fraco/parcial · ❌ ausente

| App | XP | Níveis | Streak | Conquistas | Ranking | Ligas | Moedas | Mascote/Avatar |
|---|---|---|---|---|---|---|---|---|
| Duolingo | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Memrise | ✅ | ✅ | ✅ | ➖ | ✅ | ❌ | ❌ | ❌ |
| Babbel | ❌ | ➖ | ➖ | ➖ | ❌ | ❌ | ❌ | ❌ |
| Busuu | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ➖ | ❌ |
| Paladin | ➖ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ |
| Nibble | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| History Hit | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| HISTORY Channel | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Today in History: Trivia | ❌ | ❌ | ➖ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Khan Academy | ✅ | ✅ | ❌ | ✅ | ➖ | ❌ | ❌ | ➖ |
| Brilliant | ✅ | ➖ | ✅ | ➖ | ✅ | ✅ | ❌ | ❌ |
| Coursera | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| edX | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Anki | ❌ | ❌ | ➖ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Quizlet | ✅ | ✅ | ➖ | ➖ | ✅ | ❌ | ❌ | ❌ |
| RemNote | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ➖ | ❌ |
| Habitica | ✅ | ✅ | ✅ | ✅ | ➖ | ❌ | ✅ | ✅ |
| Finch | ➖ | ✅ | ✅ | ➖ | ❌ | ❌ | ✅ | ✅ |
| Elevate | ✅ | ➖ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Lumosity | ❌ | ➖ | ✅ | ✅ | ➖ | ❌ | ❌ | ❌ |
| **Contagem de ✅** | **9** | **8** | **11** | **9** | **8** | **4** | **4** | **4** |

**Leitura:** Streak é a mecânica mais universal (11/20). Ligas (4/20), Moedas (4/20) e Mascote/Avatar (4/20) são as mais raras — e justamente as que mais aparecem como "ideia aproveitável" nas pesquisas por categoria. **Nenhum app focado em história (Paladin, Nibble, History Hit, HISTORY, Today in History) tem sistema de Ligas**, um espaço em aberto claro.

---

## 3. Matriz de conteúdo/formato

| App | Vídeo | Texto | Quiz | Flashcards/SRS | Mapa/Timeline | IA |
|---|---|---|---|---|---|---|
| Duolingo | ❌ | ✅ | ✅ | ❌ | ➖ | ✅ |
| Memrise | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Babbel | ➖ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Busuu | ➖ | ✅ | ✅ | ❌ | ❌ | ✅ |
| Paladin | ➖ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Nibble | ❌ | ✅ | ✅ | ➖ | ❌ | ❌ |
| History Hit | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| HISTORY Channel | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Today in History: Trivia | ❌ | ✅ | ✅ | ❌ | ✅ | ❌ |
| Khan Academy | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ |
| Brilliant | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Coursera | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| edX | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Anki | ❌ | ✅ | ❌ | ✅ | ➖ | ❌ |
| Quizlet | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ |
| RemNote | ❌ | ✅ | ➖ | ✅ | ➖ | ✅ |
| Habitica | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Finch | ❌ | ✅ | ➖ | ❌ | ❌ | ❌ |
| Elevate | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Lumosity | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |

**Leitura:** Mapa/Timeline interativa é quase inexistente (só History Hit, como catálogo curatorial, e Today in History, como calendário) — nenhum concorrente entrega uma **linha do tempo navegável e gamificada**, apesar de ser a estrutura de navegação mais natural para conteúdo histórico (validado pela própria organização do catálogo da History Hit). Repetição espaçada (SRS) real só aparece em apps de memorização puros (Anki, Quizlet, RemNote), nunca combinada com gamificação social forte.

---

## 4. Lacunas de mercado identificadas

Cruzando as duas matrizes com os "pontos aproveitáveis" registrados em cada pesquisa (ver `docs/research/*.md`), emergem os seguintes espaços em branco:

1. **Nenhum app une foco 100% em história + gamificação completa (XP/streak/ligas/ranking/moedas) + curadoria historiográfica confiável.** Paladin chega mais perto, mas falha em precisão de conteúdo e não tem ligas/ranking social. Nibble tem escala e streak, mas história é secundária. Os demais concorrentes de história são mídia passiva sem gamificação.
2. **Linha do tempo navegável e gamificada não existe em nenhum concorrente.** É a estrutura de conteúdo mais óbvia para história e está sub-explorada — oportunidade de diferenciação estrutural (equivalente ao "path" do Duolingo, mas cronológico).
3. **Repetição espaçada de qualidade (FSRS/SM-2) nunca aparece combinada com streak/ligas/mascote.** Combinar o motor de retenção de longo prazo do Anki com a camada social do Duolingo/Brilliant é território livre.
4. **Streak punitivo vs. compassivo é uma escolha de design em aberto.** Duolingo/Habitica punem; Finch/Elevate protegem com "freeze"/perdão. Nenhum concorrente de história testou essa dimensão.
5. **Tutor de IA conversacional aplicado a personagens/eventos históricos** (ex.: "entrevistar" uma figura histórica) é sugerido por múltiplas pesquisas (Memrise/MemBot, RemNote/AI Tutor, Khan Academy/Khanmigo) mas nenhum concorrente de história o implementa.
6. **Mascote/companion emocional** (o maior driver de retenção do Finch, 8/10) está ausente em todos os concorrentes de história — Paladin tem personagens colecionáveis, mas não um companion central e evolutivo.
7. **Modelo de negócio:** o segmento de história tem, hoje, ou assinatura cara e travada (History Hit, Nibble) ou é 100% gratuito sem estrutura (Today in History). Espaço para um freemium bem calibrado (referência: Duolingo/Busuu).

Esta seção é um insumo preliminar para a **Etapa 2 (Definição do Produto)** — proposta de valor, posicionamento e personas devem ser decididos com o usuário antes de avançar, não deduzidos unilateralmente aqui.

---

## 5. Pesquisas brutas por categoria

- [`research/idiomas.md`](research/idiomas.md) — Duolingo, Memrise, Babbel, Busuu
- [`research/historia.md`](research/historia.md) — Paladin, Nibble, History Hit, HISTORY Channel, Today in History
- [`research/educacao.md`](research/educacao.md) — Khan Academy, Brilliant, Coursera, edX
- [`research/memorizacao.md`](research/memorizacao.md) — Anki, Quizlet, RemNote
- [`research/gamificacao.md`](research/gamificacao.md) — Habitica, Finch, Elevate, Lumosity

Cada arquivo contém, por app: informações gerais, onboarding, interface, gamificação, conteúdo, pontos fortes/fracos, ideias aproveitáveis, nota justificada e fontes consultadas.
