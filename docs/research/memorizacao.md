# Pesquisa Competitiva — Apps de Memorização/Estudo

> Pesquisa de mercado para o desenvolvimento de um app educacional gamificado sobre História (o "Duolingo do conhecimento histórico"). Analisa três referências no universo de memorização/estudo: **Anki**, **Quizlet** e **RemNote**. Dados levantados via busca web em julho de 2026; números de avaliação/downloads são estimativas de fontes de terceiros (App Store/Google Play nem sempre expõem esses dados a ferramentas automatizadas) e podem variar.

---

## Anki

### Informações gerais
- **Plataforma**: Desktop (Windows/macOS/Linux — app "AnkiDesktop", gratuito e open-source), iOS ("AnkiMobile", pago), Android ("AnkiDroid", gratuito e open-source, mantido pela comunidade), Web (AnkiWeb, para sincronização e revisão básica).
- **Público-alvo**: Estudantes de alta exigência de retenção — muito forte entre estudantes de medicina, concurseiros (especialmente no Brasil) e estudantes de idiomas. Público mais "power user"/autodidata, tolerante a curva de aprendizado técnica.
- **Modelo de negócio**: Híbrido incomum — o núcleo é gratuito e open-source (desktop, Android, web/sync), mas o app iOS oficial (AnkiMobile) custa **US$ 24,99** em pagamento único, cujo valor subsidia o desenvolvimento do projeto como um todo. Não há assinatura recorrente nem anúncios.
- **Avaliação**: AnkiMobile (App Store) gira em torno de **4,0–4,8 de 5** dependendo da fonte (cerca de 2,3 mil avaliações, ranking #1 em Educação na App Store dos EUA). AnkiDroid (Google Play) tem cerca de **4,5 de 5**.
- **Downloads**: AnkiDroid ultrapassou **10 milhões de downloads** no Google Play. AnkiMobile não divulga número de downloads publicamente (app pago). AnkiWeb/AnkiDesktop não reportam contadores públicos.

### Onboarding
- **Cadastro**: Não é obrigatório para uso local (desktop/Android funcionam offline sem conta). Para sincronizar entre dispositivos, cria-se uma conta gratuita no AnkiWeb (e-mail + senha).
- **Tutorial**: Historicamente quase inexistente — é um ponto de crítica recorrente na comunidade (há tópicos ativos no fórum oficial pedindo um "onboarding deck" ou tutorial interativo para iniciantes). Não há um fluxo guiado nativo robusto; o aprendizado depende de tutoriais de terceiros (YouTube, comunidades, add-ons como "Anki Design").
- **Primeira experiência**: Tela vazia de "lista de decks" com um botão "Create Deck" e outro para baixar decks compartilhados da comunidade (AnkiWeb). O usuário se depara rapidamente com uma tela de opções de deck (novos cartões/dia, intervalos, lapsos) considerada tecnicamente intimidadora para iniciantes — a própria comunidade reconhece que isso "define a expectativa de que o app será confuso".

### Interface
- **Organização**: Estrutura baseada em "Decks" (baralhos) que podem ter subdecks, cada um com cartões organizados em "Note Types"/modelos.
- **Navegação**: Não há bottom nav/tabs no sentido de apps mobile modernos; é uma lista de decks com uma barra inferior de ações (Study Now, Add, Browse, Stats, Sync).
- **Cores**: Interface utilitária, historicamente minimalista (tons neutros/cinza, com um modo escuro nativo desde a versão 2.1.50+, mostrando texto branco sobre fundo preto nos cartões).
- **Ícones**: Estilo funcional, sem grande investimento em identidade visual; a experiência "de fábrica" é considerada datada — existem addons de terceiros (ex.: "Anki Design", "Anki-redesign") que redesenham a UI com heatmap, barra de progresso e sidebar modernos, sinal de que a comunidade sente falta disso nativamente.
- **UX**: Extremamente customizável via add-ons e CSS, o que agrada usuários avançados mas afasta iniciantes. Foco total em eficiência de revisão, zero foco em "deleite" visual ou motivação emocional.

### Gamificação
- **XP**: Não existe sistema de pontos de experiência nativo.
- **Níveis**: Inexistente.
- **Streak**: Existe uma contagem de dias de estudo consecutivos (heatmap de atividade estilo GitHub, mostrado nas Estatísticas), mas sem grande destaque visual nem recompensas atreladas.
- **Conquistas/badges**: Não há sistema nativo de badges/conquistas.
- **Ranking**: Inexistente (é uma ferramenta individual, sem componente social/competitivo nativo).
- **Ligas**: Inexistente.
- **Moedas/economia interna**: Inexistente.
- **Personagens/mascotes**: Nenhum mascote oficial (o addon "Anki Loop", de terceiros, tenta gamificar com um modo de quiz ao estilo Quizlet, mas não é nativo).

### Conteúdo
- Baseado 100% em **flashcards com repetição espaçada (SRS)**. Cartões podem ter texto, imagens, áudio, cloze deletion (lacunas) e image occlusion (oclusão de partes de imagens, popular para anatomia/mapas).
- **Algoritmo**: Historicamente usa o **SM-2** (algoritmo de 1987, de Piotr Woźniak), que aplica curvas fixas de intervalo a todos os usuários. Desde a versão **23.10 (novembro de 2023)**, o Anki adotou o **FSRS (Free Spaced Repetition Scheduler)** como agendador padrão — um modelo estatístico que ajusta a previsão de "probabilidade de recordação" ao histórico real de revisões de cada usuário, considerando três variáveis: Recuperabilidade (R), Estabilidade (S) e Dificuldade (D). Benchmarks sobre mais de 500 milhões de revisões mostram que o FSRS precisa de 20-30% menos revisões que o SM-2 para a mesma retenção.
- Sem vídeos, mapas, timelines ou IA nativos (existem add-ons/serviços de terceiros que geram cards via IA, mas não é parte do produto oficial).

### Pontos fortes
- Algoritmo de repetição espaçada (FSRS) tecnicamente superior e cientificamente validado — referência do setor.
- Enorme comunidade e biblioteca de decks compartilhados prontos (medicina, idiomas, concursos).
- Extremamente customizável e gratuito no essencial (multiplataforma, exceto iOS).
- Funciona 100% offline, com sincronização opcional.

### Pontos fracos
- Curva de aprendizado íngreme; onboarding quase inexistente, reconhecido pela própria comunidade como barreira de entrada.
- Interface datada e pouco atraente visualmente "de fábrica".
- Zero gamificação motivacional (sem XP, níveis, ligas, recompensas) — depende 100% de disciplina intrínseca do usuário.
- App iOS pago (US$ 24,99) é um ponto de atrito e confusão (existe até um clone concorrente, "AnkiApp"/AlgoApp, que se aproveita da confusão de nome).

### Ideias aproveitáveis para um app de história gamificado
- Adotar um algoritmo de repetição espaçada moderno (tipo FSRS) para agendar revisões de datas/eventos/personagens históricos de forma personalizada por usuário.
- Oferecer "decks" temáticos prontos por período histórico (Brasil Colônia, Revolução Francesa, Guerra Fria etc.), no estilo dos decks compartilhados do Anki, mas com curadoria própria e visual atraente.
- Usar oclusão de imagem para mapas históricos (ex.: "identifique o território no mapa") como mecânica de flashcard visual.
- Mostrar um heatmap de consistência de estudo (estilo GitHub/Anki), mas vestido com a linguagem de gamificação (fogo/streak) já validada por apps como Duolingo.

### Nota geral
**7/10** — motor de aprendizado imbatível tecnicamente, mas perde muitos pontos em UX, onboarding e motivação/gamificação, exatamente as áreas em que um app de história gamificado precisa brilhar.

---

## Quizlet

### Informações gerais
- **Plataforma**: iOS, Android e Web (é a mais multiplataforma e "mainstream" dos três apps).
- **Público-alvo**: Estudantes do ensino fundamental ao superior, com forte presença em salas de aula (professores criam sets para turmas). Público mais amplo e menos "nichado" que Anki e RemNote — inclui adolescentes.
- **Modelo de negócio**: Freemium com assinatura. **Quizlet Plus** custa cerca de **US$ 35,99/ano** (ou ~US$ 7,99/mês), e há um plano **Plus Unlimited** por cerca de US$ 3,74/mês (~US$ 44,99/ano) com acesso ilimitado a testes práticos, soluções de exercícios e modo "Learn". Free trial de 7 dias nos planos anuais. Funcionalidades como Learn Mode completo, acesso offline e upload de imagens ficam atrás do paywall.
- **Avaliação**: App Store em torno de **4,7–4,8 de 5** (cerca de 1 milhão de avaliações). Google Play em torno de **4,3 de 5** (cerca de 765 mil avaliações). Vale notar uma divergência forte com sites de review como Trustpilot (nota baixa, ~1,4/5), reflexo de reclamações sobre aumento de paywalls.
- **Downloads**: Cerca de **50 milhões+ de downloads** no Google Play; a empresa reporta **mais de 60 milhões de estudantes/professores ativos** e uma comunidade histórica de mais de 300 milhões de usuários globais; mais de 350 milhões de "study sets" criados na plataforma. Receita anual reportada acima de US$ 100 milhões (2024).

### Onboarding
- **Cadastro**: Conta obrigatória para maior parte dos recursos (e-mail, Google, Apple ou Facebook login), com fluxo rápido e familiar (padrão de apps mainstream).
- **Tutorial**: Onboarding relativamente leve e guiado — pergunta o objetivo do usuário (ex. "estudar para uma prova", "aprender idioma") para personalizar sugestões de conteúdo.
- **Primeira experiência**: O usuário é direcionado rapidamente a buscar ou criar um "study set" (conjunto de termo/definição) e é apresentado aos modos de estudo (Flashcards, Learn, Test, Match, Live) logo de início — a ênfase é em "encontrar conteúdo pronto" (milhões de sets já existentes) mais do que em criar do zero.

### Interface
- **Organização**: Estrutura em "Study Sets" (conjuntos de termo/definição), organizáveis em pastas/turmas; forte busca e biblioteca de conteúdo de outros usuários.
- **Navegação**: Bottom nav / tabs no padrão mobile moderno (Home, Biblioteca, Criar, etc.).
- **Cores**: Paleta de marca em azul (historicamente um azul escuro/"Dodger Blue" até ~2021); o redesign mais recente ("Meet the new Quizlet") migrou para uma paleta mais clara e "amigável", com tons de lilás/roxo suave combinados com branco, buscando uma identidade mais moderna e acolhedora.
- **Ícones**: Estilo flat, colorido, amigável — visual mais próximo de apps consumer mainstream (tipo Duolingo) do que de ferramentas utilitárias como o Anki.
- **UX**: Interface polida e acessível para iniciantes; forte incentivo a descobrir conteúdo pronto de terceiros em vez de criar o próprio material, o que acelera o "time to value" mas pode reduzir a qualidade/precisão do conteúdo estudado.

### Gamificação
- **XP**: Existe sistema de pontos — usuários ganham pontos por criar sets, dominar termos, jogar os modos de jogo e engajar com a plataforma.
- **Níveis**: Pontos acumulados contribuem para subir de nível, desbloqueando reconhecimento e recursos dentro da comunidade Quizlet.
- **Streak**: "Answer Streaks" no modo Learn — a sequência de respostas corretas é destacada visualmente a partir da 5ª resposta certa seguida (streak dentro de uma sessão, não necessariamente streak diário no sentido Duolingo).
- **Conquistas/badges**: Reconhecimento/recompensas virtuais mencionados como parte do sistema de pontos/níveis, porém sem o mesmo destaque central que apps como Duolingo dão a badges.
- **Ranking**: Existe leaderboard no modo "Match" (comparação de tempo com colegas de turma ou globalmente).
- **Ligas**: Não identificado um sistema de ligas (grupos competitivos por faixa) equivalente ao de Duolingo.
- **Moedas/economia interna**: Não identificada uma moeda virtual própria (ex. gemas/corações) — a "economia" do app é baseada no modelo de assinatura (Plus), não em moeda de gamificação.
- **Personagens/mascotes**: Não foi identificado um mascote de marca forte e recorrente (como o coruja do Duolingo); a marca se apoia mais em cores/tipografia do que em um personagem.
- **Modos de jogo**: **Quizlet Live** (jogo em equipes/salas de aula, colaborativo, usado por professores), **Match** (arrastar pares o mais rápido possível, com leaderboard de tempo), **Learn** (modo adaptativo de estudo com Answer Streaks), **Test** (simulação de prova).

### Conteúdo
- Baseado em flashcards (termo/definição) criados por usuários/professores ou por IA, com múltiplos modos de estudo: flashcards clássicos, quiz/teste, jogos (Match, Live), e modo "Learn" adaptativo.
- Fortes recursos de **IA generativa** (2025-2026): **Magic Notes** (transforma anotações/PDFs em material de estudo), **Q-Chat** (tutor de IA por chat estilo socrático — porém reportado como descontinuado/removido em 2025 em algumas fontes, com reintrodução via aquisição do Coconote em 2026 para IA de anotações a partir de áudio/vídeo), **Quick Summary** (resumos), **Memory Score** (medição de domínio do conteúdo com revisões agendadas) e até **Brain Beats** (transforma flashcards em música).
- Não usa timelines ou mapas nativamente; foco é genérico (qualquer matéria), não específico de história.

### Pontos fortes
- Base de usuários enorme e biblioteca massiva de conteúdo pronto (350M+ sets), reduzindo fricção para começar a estudar.
- Múltiplos modos de estudo/jogo (Live, Match) fortemente adotados em salas de aula, com componente social/colaborativo real.
- Interface moderna, acessível e onboarding simples comparado a Anki/RemNote.
- Investimento pesado em IA para geração de conteúdo (Magic Notes, resumos, etc.).

### Pontos fracos
- Gamificação é rasa comparada a apps "gamification-first" (sem ligas, sem mascote forte, sem streak diário robusto no estilo Duolingo).
- Monetização agressiva percebida negativamente por parte dos usuários (reviews baixas em sites como Trustpilot, reclamações de paywall crescente).
- Qualidade do conteúdo é inconsistente por depender de UGC (conteúdo gerado por outros usuários, nem sempre revisado/correto).
- Funcionalidades de IA mudam com frequência (lançamentos e descontinuações, como o caso do Q-Chat), gerando instabilidade de experiência.

### Ideias aproveitáveis para um app de história gamificado
- Modos de jogo social/multiplayer em tempo real (estilo Quizlet Live) para salas de aula de história, incentivando competição em equipe.
- Sistema de pontos por criação de conteúdo (permitir professores/usuários avançados criarem "decks" de história e ganharem reconhecimento/pontos por isso).
- Uso de IA para gerar automaticamente quizzes/resumos a partir de textos/documentos históricos que o usuário sobe.
- Modo "Match" (arrastar pares contra o tempo, com leaderboard) aplicado a pares como "personagem histórico + feito" ou "data + evento".

### Nota geral
**7,5/10** — excelente em alcance, conteúdo pronto e ferramentas de IA, mas fica devendo em gamificação de retenção (streak diário, ligas, mascote) que é justamente o pilar central de um app "estilo Duolingo".

---

## RemNote

### Informações gerais
- **Plataforma**: Web (produto principal), Desktop (Windows/macOS/Linux) e apps móveis (iOS e Android).
- **Público-alvo**: Estudantes universitários e de pós-graduação com necessidade de organizar conhecimento complexo (notas + flashcards integrados) — forte adoção entre estudantes de medicina e "power users" de produtividade/PKM (personal knowledge management), nicho que também se sobrepõe a ferramentas tipo Notion/Obsidian.
- **Modelo de negócio**: Freemium com assinatura. Plano **Free** robusto (notas e flashcards ilimitados, repetição espaçada básica, mas com limites de 3 PDFs anotados, 5 cards de oclusão de imagem, 3 notas manuscritas e 100 créditos de IA/mês). Plano **Pro**: ~US$ 8-10/mês (US$ 96/ano se pago anualmente), com anotação de PDF ilimitada, oclusão de imagem ilimitada e 1.000 créditos de IA/mês. Plano **Pro + AI**: 20.000 créditos de IA e recursos avançados (AI Tutor Chat, correção automática, insights de flashcards). Há também plano educacional (EDU) com desconto mediante e-mail estudantil.
- **Avaliação**: Google Play em torno de **4,64 de 5** (cerca de 4,1 mil avaliações). App Store não teve nota consolidada encontrada nas buscas, mas o app está publicado e ativo com avaliações de usuários.
- **Downloads**: A empresa relata ser usada por mais de **730 mil estudantes** (dado de divulgação própria/Product Hunt) e "mais de 1 milhão de estudantes" em outra menção de marketing — não foi possível confirmar a faixa exata de downloads do Google Play nas buscas realizadas.

### Onboarding
- **Cadastro**: Conta obrigatória (e-mail ou login social) para uso — é uma ferramenta baseada em nuvem por padrão (embora funcione offline depois).
- **Tutorial**: Existe uma central de ajuda robusta (help.remnote.com) e há um "tour" com o fundador explicando o produto, mas o próprio time reconhece publicamente (quadro de feedback público "onboarding") que o onboarding é uma área em desenvolvimento contínuo — sinal de que a curva de entrada ainda é considerada um desafio.
- **Primeira experiência**: O usuário chega a uma "Knowledge Base" (base de conhecimento) em branco, similar a um editor de notas hierárquico (bullets aninhados, como Roam/Notion). A transição de "nota" para "flashcard" é feita digitando `::` entre um termo e sua definição (ex.: "A capital da França é ::Paris::"), o que é poderoso mas exige aprendizado da sintaxe própria — não é um fluxo tão "point-and-click" quanto Quizlet.

### Interface
- **Organização**: Estrutura hierárquica de notas ("Rems") aninhadas, com suporte a múltiplas "Knowledge Bases" (bases de conhecimento separadas), busca hierárquica e sistema de referências cruzadas (linking) entre conceitos.
- **Navegação**: Sidebar de navegação lateral (padrão de apps de notas tipo Notion/Obsidian) mais do que bottom nav mobile tradicional.
- **Cores**: Interface predominantemente neutra/clara com suporte a modo escuro completo; altamente customizável via CSS próprio (usuários podem alterar cores globais de tema, destaque e fonte via "design tokens").
- **Ícones**: Estilo minimalista, focado em produtividade — visual mais próximo de uma ferramenta de PKM (Notion/Obsidian) do que de um app de estudo "gamer-friendly".
- **UX**: Alta curva de aprendizado devido à combinação de conceitos (hierarquia de notas + sintaxe de flashcards + PDF/anotação + IA); usuários relatam que a interface pode parecer "complexa" no início, embora poderosa uma vez dominada.

### Gamificação
- **XP**: Não identificado sistema de pontos de experiência nativo.
- **Níveis**: Não identificado.
- **Streak**: Não identificado um sistema de streak diário no estilo Duolingo/Quizlet nas fontes pesquisadas (o foco do produto é PKM + SRS, não engajamento gamificado).
- **Conquistas/badges**: Não identificado.
- **Ranking**: Não identificado (produto sem componente social/competitivo relevante).
- **Ligas**: Não identificado.
- **Moedas/economia interna**: Existe um sistema de "créditos de IA" (mensal, por plano), mas isso é um limite de uso de IA, não uma moeda de gamificação motivacional.
- **Personagens/mascotes**: Não identificado mascote de marca.

### Conteúdo
- Combina **notas hierárquicas** com **flashcards de repetição espaçada** gerados a partir das próprias notas (qualquer trecho de texto pode virar flashcard com sintaxe `::`), **anotação de PDF** (destaques viram notas/flashcards automaticamente) e **oclusão de imagem** (útil para anatomia, mapas, diagramas).
- **Algoritmo**: Sistema de repetição espaçada baseado em uma variante do **SM-2**, que agenda automaticamente quando cada flashcard deve reaparecer, conforme o desempenho do usuário nas revisões.
- **IA**: Geração automática de flashcards e quizzes a partir de qualquer fonte (texto, PDF), explicações de IA para cada flashcard, resumo automático, e no plano superior um "AI Tutor Chat" para tirar dúvidas e correção automática de respostas.
- Não é focado em vídeo, mapas dedicados ou timelines nativas — o "mapa" do conhecimento é a própria hierarquia de notas interligadas.

### Pontos fortes
- Combinação única de anotação/PKM com flashcards de repetição espaçada — o material de estudo nasce das próprias notas, sem duplicar trabalho.
- Recursos de IA bem integrados ao fluxo (gerar flashcards a partir de PDF/anotações automaticamente).
- Oclusão de imagem e anotação de PDF muito úteis para conteúdo visual (ex.: mapas, diagramas), algo diretamente aproveitável para história.
- Plano gratuito genuinamente utilizável (não é só uma isca para assinatura).

### Pontos fracos
- Curva de aprendizado alta — mistura conceitos de PKM (hierarquia, linking) com SRS, o que pode confundir um público não avançado.
- Zero gamificação motivacional nativa (sem streak, XP, ligas) — depende de disciplina do usuário, assim como o Anki.
- Onboarding reconhecido como ponto fraco pelo próprio time (item aberto no quadro público de feedback).
- Limites do plano gratuito (poucos PDFs/oclusões de imagem por mês) podem frustrar uso intenso rapidamente.

### Ideias aproveitáveis para um app de história gamificado
- Gerar flashcards automaticamente a partir de textos/documentos históricos usando IA, reduzindo o trabalho de criação de conteúdo por professores/curadores.
- Interligar conceitos históricos (ex. "Revolução Francesa" → linkado com "Napoleão", "Iluminismo", "Bastilha") como um grafo de conhecimento navegável, deixando claro o contexto histórico entre eventos.
- Usar oclusão de imagem para mapas históricos e linhas do tempo (esconder datas/territórios e pedir para o usuário completar).
- AI Tutor Chat para o usuário "conversar" com uma figura histórica ou tirar dúvidas contextuais sobre um evento, unindo IA conversacional a aprendizado de história.

### Nota geral
**6,5/10** — proposta de valor tecnicamente rica (PKM + SRS + IA) e ótimas ideias de conteúdo, mas curva de aprendizado alta e ausência total de gamificação o tornam o menos "pronto" dos três como inspiração direta de produto consumer/gamificado.

---

## Síntese comparativa rápida

| Critério | Anki | Quizlet | RemNote |
|---|---|---|---|
| Preço | Grátis (exceto iOS, US$ 24,99) | Freemium, ~US$ 36/ano (Plus) | Freemium, ~US$ 96/ano (Pro) |
| Avaliação média | ~4,0–4,8 (iOS) / 4,5 (Android) | ~4,7 (iOS) / 4,3 (Android) | ~4,64 (Android) |
| Algoritmo SRS | FSRS (desde 2023), antes SM-2 | Não é SRS "puro" (Learn Mode adaptativo) | Variante do SM-2 |
| Gamificação | Quase nenhuma | Pontos, níveis, streak de acertos, leaderboard em Match | Quase nenhuma |
| Foco de conteúdo | Flashcards puros | Flashcards + jogos + IA generativa | Notas + flashcards + IA |
| Nota geral | 7/10 | 7,5/10 | 6,5/10 |

**Conclusão geral para o app de história gamificado**: nenhum dos três concorrentes une repetição espaçada de qualidade com gamificação forte (streak diário, ligas, mascote, XP) — esse é exatamente o espaço em branco que o produto de história pode ocupar, combinando o rigor de aprendizado do Anki/RemNote (FSRS/SM-2) com a camada de engajamento visual e social que nenhum dos três entrega bem.
