# Pesquisa de Mercado Competitiva — Apps de Idiomas

> Pesquisa realizada em 17/07/2026 como referência para o desenvolvimento de um app educacional gamificado sobre História ("o Duolingo do conhecimento histórico"). Os números de downloads, avaliações e preços variam entre fontes secundárias (empresas de analytics de app stores, blogs especializados) — quando há divergência relevante entre fontes, isso é indicado no texto. Nenhum dado foi inventado; tudo é baseado em buscas na web realizadas em julho de 2026.

---

## Duolingo

### Informações gerais
- **Plataforma:** iOS, Android e Web (versão desktop no navegador). Também possui integrações como Duolingo Math e Duolingo Music.
- **Público-alvo:** Muito amplo — de crianças a adultos, com forte apelo a estudantes casuais e ao público "gamer"/completista que gosta de rotina e competição. Grande parte da base é jovem adulta (Geração Z/Millennials).
- **Modelo de negócio:** Freemium com anúncios no plano gratuito. Assinatura "Super Duolingo" remove anúncios e dá vidas/energia ilimitadas; há também "Duolingo Max" (nível superior, com recursos de IA) e um plano familiar. Preços variam por região.
- **Avaliação:** ~4.7/5 na App Store (cerca de 5,2 milhões de avaliações) e ~4.7/5 no Google Play (cerca de 43,8 milhões de avaliações) — entre os apps educacionais mais bem avaliados do mercado, embora reviews em sites de defesa do consumidor mostrem insatisfação crescente com monetização.
- **Downloads:** Um dos apps educacionais mais baixados do mundo, com centenas de milhões de downloads acumulados; estimativa recente de ~11 milhões de downloads/mês (dado de mercado dos EUA, Sensor Tower). Em Q1 2026 reportou 137,8 milhões de usuários ativos mensais (MAU) e 56,5 milhões de usuários ativos diários (DAU).

### Onboarding
- **Cadastro:** Historicamente adiado — o app deixa o usuário experimentar a primeira lição interativa antes de pedir e-mail/senha. Essa mudança (mover o cadastro para depois da primeira "vitória") gerou um salto de ~20% na retenção do dia seguinte, segundo relatos de growth do próprio produto.
- **Tutorial:** Não há tutorial expositivo tradicional; o próprio primeiro exercício ensina por descoberta (fazer o usuário acertar/errar uma frase simples), com o mascote Duo guiando com falas curtas.
- **Primeira experiência:** Escolha do idioma-alvo → teste de nivelamento opcional → primeira lição curta e fácil (vitória garantida) → tela de progresso com XP e streak iniciado → prompt de notificações/cadastro. O objetivo declarado é reduzir o "tempo até o primeiro sucesso" (a "magic moment": "eu entendo e consigo responder algo em um novo idioma").

### Interface
- **Organização:** Estrutura em trilha/mapa de níveis (path) como tela central, com unidades sequenciais e desbloqueio progressivo.
- **Navegação:** Bottom nav persistente (tabs) — geralmente Home/Trilha, Personagens/Histórias, Ranking/Ligas, Missões/Quests e Perfil. Alguns usuários relatam ícones pouco intuitivos na barra inferior.
- **Cores:** Verde "Duo Green" (#58CC02) como cor de marca dominante, associada a ações primárias, progresso e sucesso; paleta secundária vibrante (azul, laranja, roxo) para diferenciar seções e personagens.
- **Ícones:** Estilo cartoon arredondado, amigável, consistente com a linguagem visual "playful" da marca; personagens ilustrados com grande protagonismo.
- **UX:** Sistema de design descrito internamente como "a sala de aula mais divertida do mundo" — cores vibrantes, formas arredondadas, microanimações e feedback sonoro/visual constante a cada acerto/erro. Pontos negativos frequentemente citados: fricção de monetização (corações/energia, anúncios em vídeo) misturada à experiência de aprendizado.

### Gamificação
- **XP:** Sistema central — XP é ganho em lições, histórias, prática e desafios cronometrados; conecta praticamente todos os outros mecanismos (níveis, ligas, metas diárias).
- **Níveis:** Progressão por unidades/seções na trilha, além de "níveis" de proficiência por habilidade (coroas/crowns em versões anteriores).
- **Streak:** Um dos elementos mais icônicos do mercado — contagem de dias consecutivos de estudo, com "Streak Freeze" (congelamento) para proteger a sequência. Dados de terceiros citam que usuários com streak de 7 dias têm chance ~3,6x maior de permanecer engajados a longo prazo.
- **Conquistas/badges:** Sistema de "Achievements" com níveis progressivos (ex.: badges por dias de streak, XP total, lições perfeitas), incluindo badges temáticos de eventos (ex.: Duocon).
- **Ranking:** Leaderboards semanais dentro de cada liga, com posição por XP acumulado na semana.
- **Ligas:** Sistema de ligas semanais (Bronze até Diamante, ~10 níveis), com promoção/rebaixamento no fim de cada semana — um dos mecanismos mais copiados do mercado.
- **Moedas/economia interna:** Gemas (antigos "lingots"), usadas na loja para comprar streak freezes, power-ups, baús e corações. Sistema de "corações"/"energia" limita tentativas erradas no plano gratuito, empurrando para assinatura.
- **Personagens/mascotes:** Duo, a coruja verde, é o mascote central e onipresente na experiência (notificações, tela de progresso, lições), com personalidade "brincalhona e um pouco sarcástica"; há também um elenco de personagens secundários nas histórias.

### Conteúdo
Quiz e exercícios curtos (múltipla escolha, tradução, ordenar palavras, ouvir e digitar), microlições gamificadas em trilha, "Stories" (histórias curtas em áudio/texto interativo), exercícios de fala com reconhecimento de voz, e recursos de IA no nível pago Max (explicações e conversação com IA, "Roleplay").

### Pontos fortes
- Gamificação extremamente refinada (streak, ligas, XP) com efeito comprovado de retenção e formação de hábito diário.
- Marca e mascote fortíssimos, alta viralização orgânica (memes do Duo).
- Base de usuários massiva, permitindo dinâmicas sociais (ligas, amigos, ranking) em escala.
- Onboarding otimizado para gerar "vitória rápida" antes de pedir cadastro.

### Pontos fracos
- Monetização cada vez mais agressiva (anúncios, sistema de energia/corações) gerando revolta de usuários e queda de reputação/ações da empresa em 2026.
- Conteúdo às vezes considerado "vocabulário inútil" ou pouco aplicável a conversas reais.
- Pouca profundidade gramatical/explicativa comparado a apps mais "sérios" como Babbel.
- Pressão psicológica do streak pode gerar ansiedade ("streak anxiety") em vez de prazer de aprender.

### Ideias aproveitáveis para um app de história gamificado
- Trilha/mapa visual de progresso (poderia virar uma "linha do tempo" navegável por era histórica em vez de path linear).
- Sistema de ligas semanais e streak com proteção (freeze) para gerar hábito diário de estudo de história.
- Mascote/personagem-guia com personalidade forte para dar voz e humor ao conteúdo histórico.
- Modelo de "vitória rápida" no onboarding: primeira mini-lição histórica simples e satisfatória antes de pedir cadastro.

### Nota geral
**9/10** — Referência absoluta em gamificação e retenção; perde pontos apenas pela monetização agressiva que compromete a experiência do usuário fiel.

---

## Memrise

### Informações gerais
- **Plataforma:** iOS, Android e Web.
- **Público-alvo:** Aprendizes que priorizam vocabulário e reconhecimento de fala real (sotaques nativos); público que já testou Duolingo e busca imersão mais "autêntica", porém ainda casual.
- **Modelo de negócio:** Freemium com assinatura "Memrise Pro". Preços variam bastante entre fontes: relatos de mensalidade entre ~US$ 22,99 e US$ 39,99/mês, planos anuais entre ~US$ 62 e US$ 90/ano (equivalente a ~US$ 5–8,50/mês), e plano vitalício entre ~US$ 119,99 e US$ 249,98 — a variação reflete promoções frequentes.
- **Avaliação:** Cerca de 4,75/5 com mais de 930 mil avaliações agregadas (dado de analytics de terceiros).
- **Downloads:** Cerca de 65 milhões de usuários registrados em mais de 180 países (dado histórico de 2024, ainda citado em relatórios 2026), com aproximadamente 8 milhões de usuários ativos mensais, ~1 milhão de assinantes Pro pagantes, e estimativa de ~200 mil downloads/mês em mercados analisados.

### Onboarding
- **Cadastro:** Fluxo guiado: (1) seleção do idioma nativo, (2) seleção do idioma-alvo, (3) seleção do nível atual (editável depois), (4) criação de conta (usuário, e-mail, senha) ou login via Google/Facebook.
- **Tutorial:** Onboarding funcional e direto, sem grande narrativa; após o cadastro, o app oferece configuração de lembretes diários e apresenta a oferta de assinatura Pro.
- **Primeira experiência:** O usuário é levado rapidamente a um curso estruturado por CEFR (A1, A2 etc.) com flashcards de repetição espaçada e vídeos curtos de falantes nativos ("Learn with Locals").

### Interface
- **Organização:** Estrutura por cursos/níveis CEFR, com módulos de vocabulário organizados em decks de flashcards.
- **Navegação:** Navegação por abas/dashboard de progresso mostrando streak e total de palavras aprendidas.
- **Cores:** Paleta mais sóbria que a do Duolingo (tons neutros com destaques de cor por módulo), sem uma "cor de marca" tão dominante quanto o verde do Duolingo.
- **Ícones:** Estilo ilustrado, porém menos "cartunesco" e com foco maior em fotos/vídeos reais de pessoas (diferencial do produto).
- **UX:** Pontos fortes na experiência de vídeo (sotaques reais, expressões faciais); pontos fracos relatados incluem gamificação "repetitiva e pouco empolgante" — os mesmos elementos (streak, pontos, leaderboard) se repetem em cada nível sem grande evolução.

### Gamificação
- **XP:** Sistema de pontos por atividade concluída, alimentando o placar/leaderboard.
- **Níveis:** Progressão por decks/cursos alinhados ao CEFR (A1 a C2), mais níveis de "força de memória" por palavra (repetição espaçada).
- **Streak:** Existe e é destacado no dashboard de progresso, mas críticas apontam falta de originalidade em comparação ao Duolingo.
- **Conquistas/badges:** Presentes, mas descritas por analistas como "copiadas em cada nível" e com pouco impacto emocional.
- **Ranking:** Leaderboards simples entre usuários/amigos.
- **Ligas:** Não é um diferencial forte do produto (menos elaborado que o sistema de ligas do Duolingo).
- **Moedas/economia interna:** Sem um sistema de moeda virtual robusto equivalente às gemas do Duolingo.
- **Personagens/mascotes:** Sem mascote central forte de marca (diferente de Duo); o diferencial de "personagem" vem dos próprios falantes nativos em vídeo e dos "AI Buddies" (ex.: Grammar Buddy, lançado em 2025) e do chatbot MemBot (baseado em GPT) para diálogos simulados.

### Conteúdo
Flashcards com repetição espaçada (algoritmo de memorização), vídeos autênticos de falantes nativos em situações reais ("Learn with Locals"), cursos estruturados por nível CEFR em 23+ idiomas, chatbot de IA (MemBot) para praticar diálogos por cenário (ex.: check-in em hotel, pedir café), e "AI Buddies" temáticos como o Grammar Buddy para praticar estrutura de frases.

### Pontos fortes
- Vídeos de falantes nativos são um diferencial genuíno de autenticidade/imersão.
- Repetição espaçada bem implementada para retenção de vocabulário.
- Boa cobertura de idiomas (23+), incluindo línguas menos comuns.
- Recursos de IA (MemBot, AI Buddies) para prática conversacional simulada.

### Pontos fracos
- Ausência de lições estruturadas de gramática/explicações comparado a Babbel.
- Gamificação considerada genérica/repetitiva por reviewers, sem evolução clara entre níveis.
- Preços de assinatura relativamente altos e inconsistentes entre fontes/promoções.
- Menor força de marca e identidade visual que Duolingo.

### Ideias aproveitáveis para um app de história gamificado
- Vídeos curtos com "testemunhas"/reconstituições de época para dar autenticidade a eventos históricos (equivalente ao "Learn with Locals").
- Repetição espaçada aplicada a datas, nomes e fatos históricos para fixação de longo prazo.
- Chatbot de IA para "entrevistar" personagens históricos simulados (equivalente ao MemBot).
- Organização de conteúdo por "nível de profundidade" (ex.: visão geral → aprofundado → especialista), similar ao CEFR.

### Nota geral
**7/10** — Ótimo em autenticidade de conteúdo e memorização, mas gamificação pouco inspirada e menos “viciante” que a concorrência direta.

---

## Babbel

### Informações gerais
- **Plataforma:** iOS, Android, Web (desktop), com foco forte na experiência web/desktop além do mobile.
- **Público-alvo:** Adultos com objetivos práticos e sérios de aprendizagem (viagem, trabalho, comunicação real), público que valoriza estrutura pedagógica sobre gamificação "infantilizada".
- **Modelo de negócio:** Assinatura (sem versão totalmente gratuita robusta, apenas primeira lição/avaliação gratuita). Preços (meados de 2026): ~US$ 15/mês (plano de 3 meses), ~US$ 13/mês (plano de 6 meses), ~US$ 8/mês (plano de 12 meses), e plano vitalício por pagamento único de US$ 299,99.
- **Avaliação:** ~4,7/5, consistente entre App Store, Google Play e Trustpilot.
- **Downloads:** Mais de 50 milhões de downloads no Google Play; mais de 25 milhões de assinaturas vendidas ao longo da história do produto; cerca de 1,5 milhão de avaliações 5 estrelas somadas nas lojas de apps.

### Onboarding
- **Cadastro:** Fluxo mais longo e consultivo — relatos indicam até 17 etapas, cobrindo seleção de idioma, motivação de aprendizado, definição de objetivos específicos e autoavaliação de nível (ou teste de nivelamento).
- **Tutorial:** Teste de nivelamento baseado em afirmações "eu consigo fazer X" (can-do statements) com seletor de intervalo; as respostas alimentam um motor de seleção de unidade que recomenda o ponto de partida ideal.
- **Primeira experiência:** Onboarding mais "consultivo"/personalizado que os concorrentes, terminando em um plano de estudos recomendado; pesquisas internas da Babbel identificaram que a tela de resultados do teste gerava confusão (usuários não distinguiam habilidades de gramática vs. vocabulário), indicando um ponto de atrito conhecido.

### Interface
- **Organização:** Abas centrais: "Hoje" (Today), "Plano de aprendizado" (Learning plan), "Explorar" (Explore) e "Perfil".
- **Navegação:** Bottom nav / tabs clássicas, com estrutura mais "produto de produtividade" do que "jogo".
- **Cores:** Interface limpa e profissional, com suporte a modo claro e escuro; paleta mais neutra e corporativa comparada ao Duolingo.
- **Ícones:** Estilo mais minimalista/editorial, com menos personagens cartunescos.
- **UX:** Animações sutis que adicionam polish sem distrair; foco em clareza e progressão pedagógica ao invés de estímulo lúdico constante.

### Gamificação
- **XP:** Não possui sistema de XP no estilo Duolingo — é descrito explicitamente como "sem pontos XP, sem baús de tesouro".
- **Níveis:** Estrutura por unidades/plano de aprendizado personalizado, alinhado a metas do usuário, sem "níveis de jogo" explícitos.
- **Streak:** Existe (dias consecutivos de qualquer atividade de aprendizado no app), mas de forma discreta, sem personagens cobrando o usuário.
- **Conquistas/badges:** Presença mínima/pouco enfatizada comparado aos concorrentes gamificados.
- **Ranking:** Não é um elemento central do produto.
- **Ligas:** Inexistente.
- **Moedas/economia interna:** Inexistente.
- **Personagens/mascotes:** Nenhum mascote — postura deliberadamente "adulta", sem personagens fofos pedindo para manter o streak.

### Conteúdo
Lições estruturadas por especialistas humanos (não geradas apenas por IA), foco em vocabulário prático e conversação cotidiana, reforço de gramática, lições de 10–15 minutos, reconhecimento de fala, podcasts curtos e sessões de revisão adaptadas aos erros do usuário, em 14 idiomas.

### Pontos fortes
- Conteúdo pedagogicamente sólido, criado por linguistas/especialistas humanos.
- Forte foco em gramática e conversação real, não apenas vocabulário solto.
- Interface limpa, "adulta", que passa confiança e seriedade.
- Onboarding altamente personalizado (objetivos, motivação, nivelamento).

### Pontos fracos
- Praticamente sem gamificação — menor apelo para retenção via hábito/diversão comparado a Duolingo/Busuu.
- Sem versão gratuita robusta (barreira de entrada maior).
- Menos idiomas disponíveis (14) que concorrentes.
- Onboarding mais longo pode gerar abandono antes da primeira lição.

### Ideias aproveitáveis para um app de história gamificado
- Onboarding consultivo: perguntar objetivo do usuário (curiosidade geral, preparação para prova, interesse em uma era específica) para personalizar a trilha de conteúdo histórico.
- Teste de nivelamento por "eu sei explicar X evento" para calibrar o ponto de entrada no conteúdo.
- Segmentação de conteúdo por "plano de aprendizado" temático (ex.: Brasil Colônia, Segunda Guerra, Grécia Antiga) em vez de trilha genérica única.
- Qualidade editorial/pedagógica como diferencial de credibilidade histórica (evitar "fatos genéricos", como a Babbel evita "vocabulário inútil").

### Nota geral
**6,5/10** — Excelente em profundidade de conteúdo e personalização, mas fraco em mecanismos de retenção lúdica, o que é justamente o núcleo do produto que queremos construir.

---

## Busuu

### Informações gerais
- **Plataforma:** iOS, Android, Web.
- **Público-alvo:** Aprendizes que valorizam comunidade e correção por falantes nativos reais, além de quem busca certificação (parceria com McGraw Hill para testes oficiais de idioma).
- **Modelo de negócio:** Freemium com assinatura Premium/Premium Plus. Preços (início de 2026): mensalidades entre ~US$ 7 e US$ 14 dependendo do plano (1, 6 ou 12 meses); compras dentro do app entre ~US$ 6,99–23,49/mês e planos anuais entre ~US$ 70–139,99; compras via loja de apps podem custar até 30% mais caro que direto no site.
- **Avaliação:** ~4,7/5 tanto na App Store (cerca de 96 mil avaliações) quanto no Google Play.
- **Downloads:** Mais de 120 milhões de aprendizes cadastrados, segundo a própria empresa (outra fonte cita 70 milhões de aprendizes em comunicação anterior da marca).

### Onboarding
- **Cadastro:** Fluxo de sign-up redesenhado ao longo dos anos (redesign estrutural documentado desde 2016) justamente por ser um ponto de atrito identificado por dados de uso — primeira impressão crítica para conversão.
- **Tutorial:** Placement Test (teste de nivelamento) que avalia o conhecimento atual em cerca de 5 minutos, cobrindo várias habilidades de idioma, terminando com uma sugestão de nível de entrada.
- **Primeira experiência:** Seleção do idioma a aprender (histórico mostrava bandeiras dos idiomas mais populares com botão "mais opções"), teste de nivelamento, e entrada no curso estruturado com plano de estudo personalizado.

### Interface
- **Organização:** Cursos estruturados por nível, com trilha de lições combinando vocabulário, gramática, áudio e exercícios de múltipla escolha.
- **Navegação:** Navegação por abas incluindo acesso a plano de estudo, exercícios do dia e comunidade/correções.
- **Cores:** Paleta com identidade própria (tons de laranja/coral e branco predominam na marca), mais amigável que Babbel, porém menos "brinquedo" que Duolingo.
- **Ícones:** Estilo ilustrado, moderno, intermediário entre o profissionalismo da Babbel e o tom lúdico do Duolingo.
- **UX:** Diferencial forte no fluxo de correções da comunidade (envio de exercícios de escrita/fala para correção por falantes nativos, de forma assíncrona por texto ou áudio).

### Gamificação
- **XP:** Sistema de pontos por atividade (semelhante em espírito ao XP do Duolingo).
- **Níveis:** Progressão por nível estruturado de curso (alinhado a CEFR) mais nível de usuário via pontos.
- **Streak:** Presente, incentivando dias consecutivos de uso, no mesmo espírito do Duolingo.
- **Conquistas/badges:** Existem, associadas a marcos de estudo e desafios diários.
- **Ranking:** Comparação de desempenho entre usuários dentro das ligas.
- **Ligas:** Sistema de ligas (bronze, prata, ouro) comparável ao do Duolingo, além de 3 desafios diários (equivalente às "3 missões diárias" do Duolingo).
- **Moedas/economia interna:** Menos proeminente/documentada que a de Duolingo; foco maior em progressão de curso do que em economia virtual.
- **Personagens/mascotes:** Sem mascote de marca central forte; o "personagem" do produto é a própria comunidade de falantes nativos que corrige exercícios.

### Conteúdo
Lições de vocabulário e gramática, áudio com falantes nativos, exercícios de tradução e múltipla escolha, reconhecimento de fala para pronúncia, correções feitas por humanos da comunidade (escrita e fala), conversas com parceiro de IA ("Busuu Conversations"), plano de estudo personalizado, download de lições offline, e testes oficiais de idioma (McGraw-Hill) para certificação.

### Pontos fortes
- Correção por falantes nativos reais é um diferencial forte de autenticidade e engajamento social.
- Equilíbrio entre gamificação (streak, ligas, desafios diários) e conteúdo pedagógico estruturado.
- Certificação oficial (McGraw-Hill) agrega valor prático/curricular.
- Boa avaliação consistente entre lojas (4,7/5).

### Pontos fracos
- Menor força de marca/reconhecimento global comparado a Duolingo e Babbel.
- Estrutura de preços confusa, com variação significativa entre planos e canal de compra (app vs. site).
- Dependência da participação da comunidade pode gerar correções lentas ou inconsistentes.
- Gamificação é claramente "inspirada" no Duolingo, com pouca inovação própria.

### Ideias aproveitáveis para um app de história gamificado
- Sistema de "correção pela comunidade": usuários avançados corrigem respostas dissertativas/interpretações de outros usuários sobre eventos históricos.
- Certificação oficial/parceria institucional (ex.: com universidades ou museus) para dar credibilidade a um "nível" concluído.
- 3 desafios diários curtos como gatilho de abertura do app (menor fricção que uma lição completa).
- Conversas com IA simulando "testemunhas" ou personagens de uma época para prática de interpretação histórica.

### Nota geral
**7,5/10** — Bom equilíbrio entre gamificação e comunidade, mas ainda vive na sombra do Duolingo em termos de inovação e força de marca.

---

## Quadro-resumo comparativo

| App | Nota geral | Maior força | Maior fraqueza |
|---|---|---|---|
| Duolingo | 9/10 | Gamificação e retenção de hábito | Monetização agressiva |
| Memrise | 7/10 | Autenticidade (vídeos nativos) + repetição espaçada | Gamificação repetitiva |
| Babbel | 6,5/10 | Profundidade pedagógica e personalização | Quase nenhuma gamificação |
| Busuu | 7,5/10 | Comunidade e correção por nativos | Pouca diferenciação/inovação própria |

## Fontes consultadas (principais)
- [Duolingo Statistics (2026) — Business of Apps](https://www.businessofapps.com/data/duolingo-statistics/)
- [Duolingo quarterly global MAUs — Statista](https://www.statista.com/statistics/1309610/duolingo-quarterly-mau/)
- [Duolingo — Google Play](https://play.google.com/store/apps/details?id=com.duolingo&hl=en_US)
- [Duolingo Gamification Strategy — Trophy.so](https://trophy.so/blog/duolingo-gamification-case-study)
- [Duolingo: How the $15B App uses Gaming Principles — Deconstructor of Fun](https://www.deconstructoroffun.com/blog/2025/4/14/duolingo-how-the-15b-app-uses-gaming-principles-to-supercharge-dau-growth)
- [Elevating craft: How we refreshed our core tabs — Duolingo Blog](https://blog.duolingo.com/core-tabs-redesign/)
- [Duolingo Gems & Lingots — duoplanet](https://duoplanet.com/duolingo-gems-and-lingots/)
- [Duolingo: the worst language app out there — The Mycenaean](https://www.themycenaean.org/2026/03/duolingo-the-worst-language-app-out-there/)
- [Duolingo's Ad Blitz Backfires — WebProNews](https://www.webpronews.com/duolingos-ad-blitz-backfires-how-aggressive-monetization-sent-the-language-apps-stock-into-a-tailspin/)
- [Memrise Statistics 2026 — Skillademia](https://www.skillademia.com/statistics/memrise-statistics/)
- [Memrise Review 2026 — Copycat Cafe](https://copycatcafe.com/blog/memrise)
- [Memrise Pricing 2026 — LinguaSteps](https://linguasteps.com/reviews/memrise-pricing-a-transparent-overview)
- [Memrise iOS Onboarding Flow — Mobbin](https://mobbin.com/explore/flows/97215372-5a04-4f1a-a800-7146e6aff4ad)
- [Babbel Review 2026 — Babbel.com](https://www.babbel.com/babbel-review)
- [Babbel Pricing — my.babbel.com](https://my.babbel.com/en/prices)
- [Babbel Statistics — Business of Apps](https://www.businessofapps.com/data/babbel-statistics/)
- [Testing, testing — how we created an assessment tool for Babbel users — Babbel Design (Medium)](https://medium.com/babbeldesign/testing-testing-how-we-created-an-assessment-tool-for-babbel-users-9051407ca3be)
- [Busuu Review 2026 — Copycat Cafe](https://copycatcafe.com/blog/busuu-review)
- [Busuu Pricing 2026 — LinguaSteps](https://linguasteps.com/resources/busuu-pricing-a-transparent-overview)
- [Practise speaking like a local with Busuu's Community Corrections — Busuu Blog](https://blog.busuu.com/community-corrections/)
- [The Busuu Placement Test, Part III — Busuu Tech (Medium)](https://tech.busuu.com/the-busuu-placement-test-part-iii-selecting-an-irt-model-1295d29a302b)
- [Improving the busuu Sign Up flow — Busuu (Medium)](https://medium.com/busuu/improving-the-busuu-sign-up-flow-3e4dc2ff714b)
