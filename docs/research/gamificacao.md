# Pesquisa de Mercado Competitiva — Apps de Gamificação de Hábitos/Produtividade

> Objetivo: extrair padrões de onboarding, interface, gamificação e conteúdo de quatro apps de referência (Habitica, Finch, Elevate, Lumosity) para orientar o design de um app educacional gamificado sobre História ("Duolingo da História").
>
> Dados coletados via busca na web em julho de 2026, a partir de App Store, Google Play, sites oficiais, agregadores de reviews (AppBrain, Sensor Tower, G2) e imprensa especializada. Números de avaliação/downloads variam entre fontes e mudam com frequência — tratar como estimativas, não valores oficiais exatos.

---

## Habitica

### Informações gerais
- **Plataforma:** iOS, Android, Web (a versão web é a mais completa/original), além de extensões de terceiros (Chrome, integrações via API).
- **Público-alvo:** pessoas que gostam de RPG/jogos retrô aplicados à produtividade; forte adoção por comunidades neurodivergentes — há uma "ADHDers Guild" ativa dentro do próprio app, usada por pessoas com TDAH para gerenciar motivação e rotina.
- **Modelo de negócio:** freemium, open source. Núcleo do app é totalmente gratuito; assinatura opcional "Habitica Subscriber" custa cerca de US$ 5/mês (com desconto no plano anual, ~US$ 4/mês). A assinatura não dá vantagem de progresso (não é pay-to-win), apenas gemas mensais, itens místicos e a possibilidade de comprar gemas com ouro do jogo.
- **Avaliação:** relatos divergem por fonte — App Store mostra algo entre 3,9 e 4,0/5 em reviews recentes (bugs e streaks quebrados são queixa comum); Google Play é bem mais positivo, com cerca de 4,7/5 em base de dezenas de milhares de avaliações.
- **Downloads:** estimativas de 5 a 8 milhões de downloads acumulados e mais de 4 milhões de usuários registrados; volume mensal recente estimado em ~40 mil downloads.

### Onboarding
- **Cadastro:** e-mail/senha ou login social; rápido, sem muita fricção.
- **Tutorial:** guiado, com um "guia" (NPC) que explica o conceito de transformar tarefas da vida real em RPG. Logo no início o usuário é levado a **criar e customizar seu avatar** (corpo, cor de pele, cabelo, acessórios como cadeira de rodas).
- **Primeira experiência:** o app pergunta em que áreas o usuário quer trabalhar (trabalho, exercício, autocuidado) e já sugere tarefas/hábitos pré-populados nessas categorias, para que o usuário comece a ganhar XP quase imediatamente.

### Interface
- **Organização:** estrutura em abas — Hábitos, Diárias (Dailies), Afazeres (To-Dos), Recompensas — mais seções de social (Festa/Party, Guildas, Desafios) e Loja.
- **Navegação:** navegação por abas horizontais (mobile) com cabeçalho fixo mostrando avatar, barras de vida (HP), experiência (XP) e nível/classe.
- **Cores:** paleta colorida e saturada, inspirada em pixel art retrô de RPGs 16-bit; muitos elementos visuais diferentes na tela ao mesmo tempo.
- **Ícones:** estilo pixel art desenhado à mão, com tema de fantasia medieval (espadas, poções, monstros).
- **UX:** ponto forte é a customização de avatar e a sensação de "jogo de verdade"; ponto fraco citado com frequência é a interface "carregada"/poluída visualmente para novos usuários, e bugs afetando notificações e contagem de streaks.

### Gamificação
- **XP:** completar hábitos e diárias positivas dá XP e ouro; hábitos negativos ou diárias perdidas tiram HP (pontos de vida).
- **Níveis:** o avatar sobe de nível conforme acumula XP, desbloqueando classes (Guerreiro, Mago, Curandeiro, Ladino) com habilidades próprias.
- **Streak:** "Diárias" têm contadores de sequência com bônus por consistência e penalidade de HP por falha — sistema de streak é punitivo, não compassivo.
- **Conquistas/badges:** existem conquistas por marcos (primeiro nível, primeiras diárias completas, participação em eventos sazonais).
- **Ranking:** não há ranking público global tradicional, mas há competição informal dentro de guildas/desafios.
- **Ligas:** não tem sistema de ligas como Duolingo/Elevate.
- **Moedas/economia interna:** dupla moeda — Ouro (ganho jogando, usado para comprar itens/gemas) e Gemas (moeda premium, compradas com dinheiro real ou convertidas de ouro por assinantes).
- **Personagens/mascotes:** mecânica central do app. O avatar do próprio jogador é o "personagem"; adicionalmente existem **pets e montarias colecionáveis** (dezenas de criaturas que evoluem e podem ser equipadas), reforçando colecionismo. Times ("Party") fazem quests cooperativas e "boss battles" onde o grupo inteiro toma dano se alguém falhar suas diárias — pressão social positiva.

### Conteúdo
- Não há conteúdo educacional embutido; o "conteúdo" é o próprio sistema de tarefas que o usuário cria. É uma camada de gamificação pura sobre produtividade pessoal, sem vídeos, quizzes ou lições.

### Pontos fortes
- Sistema RPG completo (avatar, classes, pets, montarias) gera apego emocional forte e diferenciação real frente a apps de hábito genéricos.
- Mecânica social de "Party"/Guildas com consequência coletiva (dano ao grupo) cria accountability sem ser o próprio app quem pune — os amigos "cobram".
- Open source e API aberta permitem integrações (inclusive com IA, como mostrado em matérias recentes conectando Habitica a assistentes de IA).
- Modelo de monetização não é pay-to-win, o que gera confiança e retenção de longo prazo.

### Pontos fracos
- Interface percebida como poluída/confusa para iniciantes, curva de aprendizado alta.
- Bugs recorrentes citados em reviews recentes (streaks quebrados, notificações falhando).
- Streak é punitivo (perde HP ao falhar), o que pode desmotivar usuários mais sensíveis — contraste direto com a filosofia "compassiva" do Finch.
- Sem conteúdo/currículo: depende 100% do usuário criar suas próprias tarefas, o que não se aplica diretamente a um app de ensino.

### Ideias aproveitáveis para um app de história gamificado
- Avatar customizável com "classes" temáticas (ex.: Historiador, Arqueólogo, Diplomata) que desbloqueiam bônus cosméticos ao acumular XP por período/civilização estudado.
- Pets/mascotes colecionáveis vinculados a épocas históricas (ex.: colecionar "artefatos" ou "figuras históricas" como companions) para reforçar progressão de longo prazo.
- Mecânica de grupo/guilda para estudo coletivo de história com metas compartilhadas (ex.: "expedição" temática que a turma completa junto).
- Dupla moeda (XP para progresso + moeda gastável em customização) para separar "prova de conhecimento" de "recompensa cosmética".

### Nota geral
**6,5/10** — mecânica de gamificação profunda e um case de estudo valioso, mas prejudicada por UI pesada e ausência de qualquer estrutura de conteúdo educacional.

---

## Finch

### Informações gerais
- **Plataforma:** iOS e Android (não tem versão web completa).
- **Público-alvo:** adultos e adolescentes interessados em autocuidado/saúde mental, com forte apelo entre usuários de Gen Z/millennials que buscam alternativa "gentil" a apps de produtividade tradicionais.
- **Modelo de negócio:** freemium. Ferramentas de autocuidado principais são gratuitas; assinatura "Finch Plus" (~US$ 9,99/mês ou ~US$ 69,99/ano, com variação regional) libera itens cosméticos, roupas, aventuras extras e trilhas sonoras — é descrita como majoritariamente cosmética, não pay-to-win.
- **Avaliação:** entre as mais altas da categoria, por volta de 4,9/5 nas lojas de app.
- **Downloads:** mais de 12,5 milhões de downloads acumulados.

### Onboarding
- **Cadastro:** simples, com opção de conta local/anônima ou vinculada a e-mail/redes sociais.
- **Tutorial:** ao abrir o app pela primeira vez, o usuário é recebido por um passarinho (o "Finch") e guiado por uma breve personalização (nome do pet, objetivo de autocuidado).
- **Primeira experiência:** logo nos primeiros minutos o usuário já faz um "check-in de humor" e recebe uma pequena lista de metas de autocuidado (ex.: beber água, respirar fundo, anotar um pensamento) — completar qualquer uma já gera energia para o pet sair em uma "aventura" visual, dando recompensa quase instantânea.

### Interface
- **Organização:** tela inicial centrada no pet (o pássaro), com painel lateral/inferior de metas diárias, seção de "jornal", loja de itens e estatísticas de humor.
- **Navegação:** navegação simples por ícones inferiores/laterais; foco em manter a tela principal (o pet) sempre visível.
- **Cores:** paleta pastel suave — tons como azul acinzentado (pigeon post), rosa (mandys pink), pêssego (manhattan), amarelo suave (saffron) e bege (tan) — reforçando estética "wellness"/acolhedora.
- **Ícones:** estilo semi-skeuomórfico e fofo (cute/kawaii), com ilustrações desenhadas à mão do pássaro e dos itens.
- **UX:** feedback animado forte a cada conclusão de tarefa (o pet reage, ganha energia, viaja); ponto de atrito citado é que a primeira experiência pode parecer "carregada"/confusa por causa da quantidade de elementos e telas de personalização.

### Gamificação
- **XP:** não há XP numérico tradicional exposto ao usuário — o equivalente é "energia", gerada ao completar metas de autocuidado.
- **Níveis:** o pet cresce e evolui em estágios ao acumular energia/atividades ao longo do tempo.
- **Streak:** existe contagem de sequência, mas o design é deliberadamente **não-punitivo** — ao contrário de Habitica/Duolingo, faltar um dia não "quebra" a experiência de forma agressiva; a filosofia é "tecnologia compassiva", incentivando retomar sem culpa.
- **Conquistas/badges:** existem recompensas por marcos e itens desbloqueáveis, mas sem sistema robusto de badges/conquistas expostas como conquista formal.
- **Ranking:** não possui ranking competitivo entre usuários (foco é individual/introspectivo, não competitivo).
- **Ligas:** não existe.
- **Moedas/economia interna:** "Rainbow Stones" (pedras coloridas) e energia são usadas para desbloquear roupas, acessórios, destinos de viagem e cenários para o pet.
- **Personagens/mascotes:** é a mecânica central e o maior diferencial do app — o passarinho de estimação virtual é o motivo emocional para o usuário voltar todo dia. Cada ação de autocuidado do usuário se traduz diretamente em bem-estar/crescimento do pet, invertendo a lógica: "cuide de si mesmo para cuidar do seu bichinho" (mecânica de tamagotchi aplicada à saúde mental).

### Conteúdo
- Conteúdo é majoritariamente baseado em pequenas atividades textuais guiadas: check-ins de humor, exercícios de respiração/mindfulness, journaling (diário), pequenas metas de hábito (água, sono, movimento) e "quizzes" leves de autoconhecimento. Não há vídeo-aula nem trilha de conhecimento estruturada — é mais prática de bem-estar do que ensino de conteúdo.

### Pontos fortes
- Mascote/pet como "gancho emocional" é extremamente eficaz para retenção diária — recorrentemente citado como o motivo pelo qual usuários voltam.
- Streak não-punitivo reduz ansiedade e abandono, mecânica de "acolhimento" bem executada.
- Paleta visual e tom de voz coesos, reforçando identidade de marca amigável.
- Altíssima nota nas lojas de app (~4,9) e grande base instalada indicam forte product-market fit.

### Pontos fracos
- Falta de dados/analytics robustos de progresso — por não punir streaks, também não oferece estatísticas profundas de consistência para quem quer se cobrar mais.
- Onboarding inicial pode parecer sobrecarregado de telas de personalização antes de "ir ao ponto".
- Sem estrutura de conteúdo educacional real — é ferramenta de hábito, não de aprendizado de matéria.
- Reviews recentes mencionam aumento de anúncios in-app e mudanças em funcionalidades queridas, gerando percepção de "comercialização".

### Ideias aproveitáveis para um app de história gamificado
- Mascote/companion que "evolui" visualmente conforme o usuário completa lições de história — cria vínculo emocional similar ao Duolingo (coruja) mas com estética própria (ex.: um "cronista" ou criatura que ganha artefatos de cada era estudada).
- Adotar streak "compassivo" (com "congelamentos" ou perdão de faltas) para reduzir abandono, especialmente em público adulto/casual que não quer pressão tipo Duolingo.
- Micro-recompensas visuais imediatas (animação de "aventura"/descoberta) a cada lição concluída, não só número de XP.
- Paleta de cores calorosa e ilustrações autorais para diferenciar de apps mais "corporativos"/frios.

### Nota geral
**8/10** — melhor exemplo do grupo de como um mascote e um loop de recompensa emocional bem desenhado sustentam engajamento diário, mesmo sem competitividade.

---

## Elevate

### Informações gerais
- **Plataforma:** iOS e Android (desenvolvido pela Elevate Labs / "The Mind Company").
- **Público-alvo:** adultos profissionais que quer melhorar habilidades práticas de comunicação (leitura, escrita, matemática, fala) — mais orientado a "produtividade cognitiva no trabalho" do que a "prevenção de declínio cognitivo" (diferença chave frente a Lumosity).
- **Modelo de negócio:** freemium com paywall relativamente agressivo — versão gratuita libera poucos jogos por dia (cerca de 3) e não permite escolher quais treinar; assinatura Pro custa em torno de US$ 4,99/mês ou US$ 39,99/ano (relatos também citam ~US$ 45/ano), com teste grátis de 7 dias.
- **Avaliação:** cerca de 4,8/5 na App Store; no Google Play, cerca de 4,6/5 com base em ~480 mil avaliações.
- **Downloads:** cerca de 28-30 milhões de downloads acumulados (Android); volume mensal recente estimado em ~200 mil downloads. Foi eleito "App do Ano" da Apple em 2014.

### Onboarding
- **Cadastro:** e-mail, Apple/Google login.
- **Tutorial:** logo no início aplica uma **avaliação rápida de habilidades** (cerca de 2 minutos) cobrindo gramática, vocabulário e matemática.
- **Primeira experiência:** ao final da avaliação, o usuário recebe um "Elevate Proficiency Quotient" (EPQ) — uma pontuação que resume seu nível em cada categoria — e o app já monta automaticamente um treino diário personalizado (3 a 5 jogos, ~10-15 min) com base nesse resultado.

### Interface
- **Organização:** estrutura simples centrada em "treino do dia", com seções de estatísticas/progresso, biblioteca de jogos e configurações.
- **Navegação:** barra de navegação inferior com botões de call-to-action bem destacados ("Play"/treino do dia em evidência).
- **Cores:** paleta minimalista com poucas cores de marca (predominância de azul/tons neutros), uso amplo de espaço em branco.
- **Ícones:** ícones simples, geométricos, consistentes por categoria de habilidade (cada categoria tem cor/ícone fixo).
- **UX:** design limpo e "sério"/profissional (menos "gamer" que Habitica, menos "fofo" que Finch); foco em clareza de dados de progresso.

### Gamificação
- **XP:** existe — XP é ganho jogando os jogos diários e é a métrica usada para ranquear nas Ligas.
- **Níveis:** dificuldade adapta-se automaticamente por jogo (algoritmo aumenta/diminui o nível conforme desempenho), mais parecido com "nível de habilidade" do que nível de personagem.
- **Streak:** streak diário de dias consecutivos completando o treino/palavra-cruzada; possui "streak freeze" (proteção) para não perder a sequência em caso de falha ocasional.
- **Conquistas/badges:** há badges/marcos de desempenho, mas o carro-chefe competitivo são as Ligas.
- **Ranking:** ranking dentro de cada Liga semanal, baseado em XP acumulado.
- **Ligas:** sistema de ligas por níveis — Bronze, Prata, Ouro, Safira, Rubi, Esmeralda, Diamante — resetadas toda semana (mecânica muito próxima à do Duolingo).
- **Moedas/economia interna:** não há moeda cosmética/gastável relevante; o foco é todo em métricas de desempenho (EPQ, LPI-like scores) em vez de economia virtual.
- **Personagens/mascotes:** não possui mascote ou avatar — identidade é 100% baseada em dados/estatísticas pessoais, sem personagem.

### Conteúdo
- Mais de 40 jogos/exercícios curtos (estilo "quiz"/minigame) cobrindo leitura, escrita, matemática, fala e memória — é treino de habilidade prática (ex.: escrever e-mails melhores, cálculo mental), não conteúdo narrativo. Não há vídeo-aula; tudo é interativo/jogo curto com correção instantânea.

### Pontos fortes
- Sistema de Ligas semanais (estilo Duolingo) é um mecanismo de competição leve muito eficaz para retenção recorrente.
- Onboarding com avaliação de nível + treino personalizado imediato reduz fricção e aumenta relevância percebida desde o primeiro uso.
- Visual limpo e "profissional" atrai público adulto que rejeitaria estética "infantilizada".
- Foco em habilidades práticas aplicáveis ao trabalho dá proposta de valor clara e mensurável (EPQ).

### Pontos fracos
- Versão gratuita é bastante limitada (poucos jogos/dia, sem escolha), o que pode frustrar quem não converte para Pro.
- Falta de mascote/avatar reduz o apego emocional em comparação a Habitica/Finch.
- Preço de assinatura considerado alto por parte da crítica frente a concorrentes.
- Conteúdo é atomizado em minigames de habilidade, sem uma narrativa/trilha de conhecimento coesa (o que seria essencial num app de história).

### Ideias aproveitáveis para um app de história gamificado
- Teste de nivelamento inicial (2 minutos) que gera um "perfil de conhecimento histórico" e monta a primeira trilha personalizada — replica muito bem o efeito "uau, o app já sabe o que eu preciso estudar".
- Sistema de Ligas semanais para gerar competição leve e recorrência, sem depender de amigos/rede social do usuário.
- "Streak freeze"/proteção de sequência para reduzir abandono por falhas pontuais.
- Métrica de desempenho pessoal única e visível (equivalente a um "EPQ" de conhecimento histórico) que o usuário acompanha evoluir ao longo do tempo.

### Nota geral
**7,5/10** — excelente estrutura de personalização, liga e streak, mas modelo de negócio agressivo no free tier e ausência de personagem/mascote deixam a experiência menos "quente" emocionalmente.

---

## Lumosity

### Informações gerais
- **Plataforma:** iOS, Android e Web; também possui um spin-off de meditação ("Lumosity Mind").
- **Público-alvo:** público amplo (13+), mas o maior grupo demográfico de visitantes do site está na faixa de 55-64 anos — historicamente associado a adultos/idosos preocupados com declínio cognitivo, embora também tenha base jovem. Existe até uma variante prescrita ("Lumosity Rx") voltada a adultos de 22-55 anos com TDAH.
- **Modelo de negócio:** freemium com paywall forte — versão grátis libera apenas 3 jogos rotativos por dia. Assinatura Premium a partir de ~US$ 11,99/mês ou ~US$ 59,99/ano (há relatos de reajuste recente para ~US$ 109,99/ano); plano família (~US$ 17,95/mês, até 5 usuários) e plano vitalício (pagamento único de ~US$ 299,95).
- **Avaliação:** cerca de 4,8/5 no Google Play (base de ~290 mil avaliações); reviews em sites de reclamação (ex.: Sitejabber) são bem mais críticos (~2,1/5), sugerindo forte insatisfação relacionada a cobrança/cancelamento de assinatura.
- **Downloads:** mais de 100 milhões de downloads acumulados desde o lançamento em 2007 (um dos pioneiros da categoria); estimativa de ~10 milhões+ só no Google Play atual, com volume mensal recente de dezenas de milhares.

### Onboarding
- **Cadastro:** e-mail ou redes sociais; processo padrão de app freemium com oferta de trial.
- **Tutorial:** apresenta um teste inicial (Fit Test) que estabelece uma linha de base de desempenho cognitivo do usuário nas áreas trabalhadas (memória, atenção, velocidade, flexibilidade, resolução de problemas).
- **Primeira experiência:** o usuário chega direto a um dashboard com "treinar com os jogos de hoje" — ou seja, a experiência de "primeiro treino" já ocorre nos primeiros minutos, seguida da visualização do índice de desempenho (LPI).

### Interface
- **Organização:** cinco seções principais — Home, Jogos, Estatísticas, Análises (Analytics) e Mais — acessíveis por um menu horizontal inferior.
- **Navegação:** navegação em tela cheia por jogo (modo retrato fixo, botões de jogo fixados perto do polegar para uso com uma mão); ícone de home no canto superior esquerdo e indicadores de progresso em pontos horizontais (posição pouco convencional, criticada em análises de UX).
- **Cores:** paleta vibrante seguindo tendências de material design, hierarquia visual clara e uso generoso de espaço em branco; cada categoria cognitiva tem uma cor fixa consistente nos ícones circulares dos jogos.
- **Ícones:** ícones circulares, arredondados, um por categoria de jogo/habilidade cognitiva.
- **UX:** elogiado por clareza visual e consistência de cores; mas a colocação de funções essenciais (home) em posição não convencional é apontada como ponto fraco de usabilidade.

### Gamificação
- **XP:** não há XP tradicional; a métrica central é o **LPI (Lumosity Performance Index)**, calculado a três níveis — por jogo, por área cognitiva e um LPI geral — com base na distribuição estatística de pontuações de todos os usuários (não idade nem preferências).
- **Níveis:** dificuldade adaptativa por jogo, sem sistema de "nível de personagem".
- **Streak:** possui streak diário, mantido inclusive no "Zen Mode" (modo sem pressão/sem pontuação competitiva).
- **Conquistas/badges:** possui badges por marcos e consistência.
- **Ranking:** o LPI permite comparação estatística de desempenho com outros usuários (percentil), mas não é um ranking social direto entre amigos.
- **Ligas:** não possui sistema de ligas.
- **Moedas/economia interna:** não possui moeda virtual/cosmética.
- **Personagens/mascotes:** não possui avatar, pet ou personagem — identidade visual é 100% baseada em dashboards de dados e ícones de jogos.

### Conteúdo
- Cerca de 25+ jogos de treino cognitivo cobrindo memória, atenção, velocidade de processamento, orientação espacial, flexibilidade mental e resolução de problemas — formato minigame com pontuação e correção instantânea, sem vídeo-aula, texto longo ou narrativa. Todo o "ensino" é baseado em prática repetida e métricas (não em explicação de conteúdo).

### Pontos fortes
- Pioneiro e marca mais reconhecida da categoria de "brain training", com base de dados de desempenho massiva (mais de 100M downloads históricos) que sustenta comparações estatísticas (LPI) robustas.
- Métrica de desempenho (LPI) é sofisticada e cientificamente comunicada (por jogo/área/geral).
- Design visual elogiado por clareza e hierarquia, com boa ergonomia para uso com uma mão.
- Modo "Zen" sem pressão competitiva atende a usuários que não querem estresse de pontuação.

### Pontos fracos
- Histórico de controvérsia relevante: em 2016 a empresa (Lumos Labs) pagou US$ 2 milhões à FTC americana por publicidade enganosa, por alegar sem evidência científica suficiente que o app previne declínio cognitivo/demência — mancha reputacional que ainda aparece em buscas.
- Paywall agressivo no free tier (apenas 3 jogos/dia) e reajustes de preço recentes (alguns relatos de assinatura anual saltando para ~US$ 109,99) geram forte insatisfação, refletida em notas baixas em sites de reclamação.
- Falta de qualquer personagem/mascote deixa a experiência fria/clínica, sem gancho emocional.
- Sem mecânica social/competitiva (ligas, amigos, chat), o que reduz a viralidade e o efeito de rede.

### Ideias aproveitáveis para um app de história gamificado
- Teste inicial de "linha de base" (equivalente ao Fit Test) para calibrar dificuldade e mostrar evolução objetiva do conhecimento histórico ao longo do tempo.
- Índice de desempenho único e "citável" (como o LPI) — por exemplo, um "Índice de Conhecimento Histórico" — pode virar elemento de marketing e retenção (usuários gostam de comparar/mostrar pontuação).
- Modo "sem pressão" (equivalente ao Zen Mode) para sessões de revisão/estudo livre sem afetar métricas competitivas, atendendo usuários avessos a competição.
- Evitar o erro de marketing do Lumosity: qualquer alegação de "eficácia" (ex.: "melhora sua memória histórica") deve ser sustentada por evidência real, sob risco de dano reputacional/legal.

### Nota geral
**6/10** — métricas de desempenho sofisticadas e marca forte, mas prejudicado por histórico de publicidade enganosa, monetização agressiva e ausência total de calor emocional/mascote na experiência.

---

## Síntese comparativa rápida

| App | Nota geral | Maior força | Maior fraqueza | Elemento mais replicável para o app de História |
|---|---|---|---|---|
| Habitica | 6,5/10 | Sistema RPG completo (avatar, pets, guildas) | UI poluída, sem conteúdo educacional | Avatar/classes + mascotes colecionáveis por era histórica |
| Finch | 8/10 | Mascote/pet como gancho emocional diário | Falta de estatísticas profundas de progresso | Streak compassivo + companion que evolui a cada lição |
| Elevate | 7,5/10 | Onboarding personalizado + Ligas semanais | Free tier limitado, sem mascote | Teste de nivelamento inicial + sistema de Ligas |
| Lumosity | 6/10 | Índice de desempenho (LPI) cientificamente comunicado | Histórico de publicidade enganosa (FTC), sem calor emocional | Índice de desempenho pessoal único e comparável |

**Recomendação geral:** o app de História gamificado deveria combinar o gancho emocional de mascote/companion do Finch, o sistema de progressão em camadas (avatar + colecionáveis) do Habitica, o onboarding personalizado e as Ligas semanais do Elevate, e a métrica de desempenho quantificável do Lumosity — evitando os erros de UI poluída (Habitica), paywall agressivo no free tier (Elevate/Lumosity) e qualquer alegação de eficácia não comprovada (erro fatal do Lumosity com a FTC).

---

### Fontes consultadas
- App Store e Google Play (páginas oficiais e agregadores: AppBrain, Sensor Tower, JustUseApp)
- Habitica Wiki (Fandom), GitHub HabitRPG, Wikipedia
- Site oficial e Help Center da Finch (help.finchcare.com), Uiland, Pratt IXD design critique
- Site oficial e Help Center da Elevate (support.elevateapp.com, themindcompany.com)
- Site oficial e Help Center da Lumosity (help.lumosity.com, lumosity.com/science), FTC.gov (comunicado oficial do caso de publicidade enganosa)
- Reviews e comparativos: G2, ChoosingTherapy, Calmevo, Nibble Blog, Mindkindly, Trophy.so, UsabilityGeek
