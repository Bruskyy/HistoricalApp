# Product Vision Document

> Este documento define a identidade do produto antes de qualquer decisão técnica. Toda decisão aqui é justificada por uma lacuna de mercado identificada em [`COMPETITOR_ANALYSIS.md`](COMPETITOR_ANALYSIS.md) ou por um objetivo de produto explícito — nenhuma funcionalidade é proposta apenas "porque um concorrente tem". Onde uma decisão é estratégica (nome, posicionamento, monetização), ela é marcada como **provisória** e deve ser validada pelo fundador antes de virar compromisso de engenharia.

---

## 1. Propósito do produto

Transformar o ato de adquirir conhecimento profundo — não trivial, não superficial — em um hábito diário tão viciante quanto aprender um idioma no Duolingo, começando por História e construído desde o dia 1 como uma **engine de domínios de conhecimento**, não como um app de nicho único.

## 2. Problema de mercado que resolve

A Etapa 1 mapeou uma lacuna dupla e específica (ver `COMPETITOR_ANALYSIS.md`, seção 4):

1. **Quem gamifica bem (Duolingo, Brilliant, Busuu) não ensina conteúdo profundo/factual** — a mecânica é genérica e portátil para qualquer assunto raso, mas nenhum desses produtos lida com a exigência de **precisão historiográfica, fontes e incerteza acadêmica**.
2. **Quem ensina história com seriedade (History Hit, Khan Academy) não gamifica bem, ou não gamifica nada** — são consumo passivo (vídeo/podcast) ou LMS tradicional, sem loop de hábito diário.

O único concorrente que tentou os dois ao mesmo tempo (Paladin, 7/10) falhou exatamente no equilíbrio: gamificação forte, mas curadoria de conteúdo criticada por imprecisão. **O problema real não é "faltar um Duolingo de História" — é faltar um produto que trate conhecimento profundo com o mesmo rigor de design de produto que hoje só existe em apps de conteúdo raso.**

## 3. Visão de longo prazo: uma plataforma, não um app

**Reformulação de visão adotada nesta etapa** (substitui a visão inicial "Duolingo de História"):

> Construir a primeira plataforma que transforma conhecimento profundo em jogo — começando por História, com arquitetura desde o dia 1 preparada para novos domínios (Filosofia, Economia, Geografia, Direito, Psicologia, Literatura, Artes, Ciências Políticas) rodando sobre a mesma engine de aprendizado, gamificação e IA.

Implicações práticas dessa mudança de visão:

- **História não é "o produto"; é o primeiro domínio de conteúdo publicado sobre a engine.** Todo conceito de produto abaixo (trilha, missão, personagem, mascote) precisa ser nomeado e desenhado de forma domínio-agnóstica, mesmo que o MVP só tenha um domínio ativo.
- Isso é uma decisão de **arquitetura de conteúdo e produto**, não de escopo do MVP — o MVP continua sendo só História (ver seção 10). A diferença é que o banco de dados de conteúdo, o sistema de progressão e a IA não podem ser hardcoded para "história" especificamente.
- O nome da marca (seção 14) precisa funcionar para a plataforma inteira, não apenas para o domínio História.

## 4. Proposta única de valor (USP)

> **"A única plataforma onde você aprende de verdade — com o rigor de uma fonte confiável e o hábito de um jogo viciante."**

Os três pilares que sustentam essa USP, cada um endereçando uma lacuna específica da Etapa 1:

| Pilar | Lacuna que resolve | Mecânica central |
|---|---|---|
| **Rigor sem ser chato** | Ninguém une gamificação forte + precisão acadêmica | Sistema de "nível de consenso" transparente (seção 9) |
| **Memória real, não ilusão de progresso** | SRS de qualidade nunca aparece com camada social | Repetição espaçada invisível (seção 9) |
| **Vínculo emocional com o conhecimento** | Nenhum concorrente de história tem companion evolutivo | Companheiro de aprendizado (seção 14) |

## 5. Posicionamento frente aos concorrentes

- **Frente a Duolingo/Busuu (gamificação madura):** mais sério e mais preciso — a gamificação existe para servir o aprendizado real, não para maximizar tempo de tela com "vocabulário inútil" (crítica registrada contra Duolingo na Etapa 1).
- **Frente a Brilliant (o benchmark de gamificação mais próximo):** mesma qualidade de XP/streak/ligas, mas aplicada a humanidades/pensamento crítico em vez de STEM — território que o Brilliant não ocupa.
- **Frente a History Hit/HISTORY Channel (conteúdo sério, mídia passiva):** mesma seriedade editorial, mas com aprendizado ativo e retenção mensurável em vez de consumo passivo.
- **Frente a Anki/RemNote (retenção científica):** mesmo rigor de memorização (SRS), mas sem exigir que o usuário entenda o que é um algoritmo de repetição espaçada — a experiência é 100% guiada.
- **Frente a Paladin (concorrente direto mais próximo):** onde ele é rápido e impreciso, nós somos rigorosos e transparentes sobre incerteza histórica — essa é a principal barreira de diferenciação a defender.

**Não somos "o Duolingo de História".** Somos a plataforma que prova que conhecimento profundo pode ser tão viciante quanto conhecimento raso.

## 6. Missão e valores

**Missão:** Fazer com que entender o mundo — seu passado, seus sistemas, suas ideias — seja um hábito diário acessível a qualquer pessoa.

**Valores:**
- **Precisão antes de engajamento.** Nunca simplificamos a ponto de mentir. Quando a história é incerta, o produto mostra a incerteza (seção 9) em vez de escondê-la atrás de uma resposta "certa" de quiz.
- **Retenção compassiva, não punitiva.** Hábito se constrói com acolhimento (referência: Finch), não com culpa (crítica registrada contra Duolingo/Habitica na Etapa 1).
- **Gamificação a serviço do domínio, não do domínio a serviço da gamificação.** Toda mecânica de jogo precisa apontar para uma evidência real de aprendizado (mastery, retenção espaçada) — nunca XP por clique vazio.
- **Construir uma vez, aplicar em muitos domínios.** Toda decisão de produto do MVP é avaliada também pela pergunta "isso funciona se o domínio fosse Filosofia?".

## 7. Personas

### 7.1 Marina, 26 anos — "A Curiosa Casual" (persona primária do MVP)
Usa o celular no transporte público e antes de dormir. Já teve o Duolingo instalado, abandonou por achar "vazio depois de um tempo". Quer sentir que está aprendendo algo que faz diferença em conversas reais, não só colecionando XP. Gatilho de instalação: quer "parar de ficar muda quando o assunto vira história/atualidades" em conversas sociais.
**O que o produto precisa entregar para ela:** vitória rápida no dia 1, companheiro que gera afeto, streak sem culpa.

### 7.2 Rafael, 19 anos — "O Concurseiro/Vestibulando" (persona secundária, forte em D30+)
Estuda para ENEM/vestibular/concursos, já usa Anki para outras matérias mas odeia a interface. Precisa de retenção de longo prazo real (não ilusão de progresso) porque vai ser cobrado em prova. Muito sensível a precisão factual — vai desconfiar do produto se pegar um erro (igual às críticas ao Paladin).
**O que o produto precisa entregar para ele:** repetição espaçada que realmente funciona, conexões entre temas (seção 9, "conhecimento conectado" ajuda a estudar para redação/interdisciplinaridade), transparência de fontes.

### 7.3 Beatriz, 41 anos — "A Entusiasta Erudita" (persona de monetização/LTV alto)
Perfil "history buff" parecido com o público de History Hit — já paga por podcasts/documentários de história. Tem renda disponível e pouca paciência para gamificação "infantilizada". Quer profundidade e conversas de verdade sobre o assunto, não só quiz de múltipla escolha.
**O que o produto precisa entregar para ela:** jornadas com profundidade real, futura conversa persistente com personagens históricos (visão de longo prazo, seção 11), tom de voz respeitoso e adulto.

### 7.4 (Persona futura, não-MVP) O Educador
Professor que quer atribuir jornadas para a turma, à imagem do alinhamento a currículo escolar (Key Stage) da History Hit. Registrado aqui como oportunidade B2B validada pela pesquisa, mas **fora de escopo do MVP** (seção 11).

## 8. Princípios pedagógicos

1. **Aprender fazendo, não assistindo.** Cada conceito é introduzido por uma pergunta ou decisão antes de qualquer explicação longa (referência: filosofia "learn-by-doing" do Brilliant, nota 8,5/10 na Etapa 1).
2. **Método socrático na IA.** Personagens/tutores de IA guiam com perguntas em vez de entregar a resposta pronta (referência: Khanmigo).
3. **Transparência sobre incerteza histórica.** Nenhum fato é apresentado como absoluto quando a historiografia diverge — isso é uma feature central, não um detalhe de rodapé (seção 9).
4. **Narrativa antes de fato isolado.** Conhecimento é ensinado como jornada causal ("por que isso aconteceu, o que isso causou depois"), nunca como lista de datas soltas — resposta direta à crítica de "vocabulário inútil"/fatos soltos do Duolingo.
5. **Conhecimento é uma rede, não uma lista.** Todo tópico concluído deve deixar explícito o que ele conecta (seção 9), reforçando retenção por associação em vez de memorização isolada.
6. **Repetição espaçada como motor invisível de tudo.** O usuário nunca precisa entender o algoritmo; ele só sente que "o app sabe o que eu preciso revisar" (seção 9).

## 9. Princípios de gamificação

Cada mecânica abaixo veio de um insight desta etapa e é ancorada numa lacuna específica da Etapa 1.

- **Timeline como estrutura central, não como feature.** Em vez de um "path" genérico (Duolingo), a espinha dorsal do produto é a **linha do tempo da humanidade**: Pré-História → Mesopotâmia → Egito → Grécia → Roma → Idade Média → ... Cada nó desbloqueado é um marco de conhecimento real. *Justificativa: nenhum concorrente de história tem timeline navegável e gamificada (lacuna #2 da Etapa 1) — é a estrutura de navegação mais natural para o domínio e ainda está livre.*
- **Companheiro de aprendizado evolutivo** (não mascote decorativo). Cresce, muda de aparência e ganha objetos conforme o usuário avança; tem estados emocionais ("sente sua falta"). *Justificativa: Finch (8/10, maior nota entre os apps de gamificação pesquisados) prova que o vínculo emocional com um companion sustenta retenção sozinho — e nenhum concorrente de história tem isso (lacuna #6).* Ver seção 14 para o conceito de identidade.
- **Repetição espaçada invisível, disfarçada de missão.** O algoritmo decide o que revisar e apresenta isso como "Você está esquecendo Roma — Missão especial, XP em dobro" em vez de expor configurações técnicas (que são o maior ponto fraco de UX do Anki). *Justificativa: lacuna #3 — SRS de qualidade nunca aparece combinado com camada social/motivacional.*
- **Nível de consenso acadêmico, não semáforo.** Cada afirmação histórica relevante mostra um percentual ("Nível de consenso: 72%") que, ao ser tocado, explica quem defende, quem discorda e por quê. *Justificativa: mecanismo citado nas notas de pesquisa como diferencial de credibilidade frente ao Paladin; a versão percentual é mais elegante e mais alinhada ao pensamento científico do que semáforo 🟢🟡🔴.*
- **Estatísticas como identidade, não como relatório.** Horas estudadas, civilizações concluídas, eventos dominados, mapa de conhecimento por era/continente, velocidade e precisão de resposta. *Justificativa: nenhuma pesquisa da Etapa 1 registrou um concorrente com painel de estatísticas rico e "mostrável" — o mais próximo é o LPI da Lumosity (6/10, sem calor emocional) e o EPQ do Elevate (7,5/10). A oportunidade é combinar esse rigor de dado com a identidade emocional do companheiro.*
- **Conhecimento conectado.** Ao concluir um tópico, o produto mostra explicitamente o que ele desbloqueou em termos de compreensão ("Agora você entende melhor: Democracia, Roma, Iluminismo..."). *Justificativa: reforça o princípio pedagógico #5 e dá ao usuário uma sensação tangível de progresso composto, algo que nenhum concorrente pesquisado expõe de forma visual.*
- **Streak compassivo, não punitivo.** Congelamento de sequência generoso e sem culpa (referência: filosofia de design do Finch), rejeitando deliberadamente o modelo punitivo do Habitica (perda de HP) e a "ansiedade de streak" documentada como crítica ao Duolingo.
- **Ligas e ranking como camada opcional, não obrigatória.** Baseado no sistema validado de Brilliant/Elevate (10 e 7 divisões respectivamente), mas visível principalmente para o segmento competitivo (persona Rafael); não deve ser o gancho principal para a persona Marina ou Beatriz.
- **Jornadas, não cursos.** Trilhas nomeadas como narrativas causais que atravessam eras (ex.: "Jornada: O Nascimento da Democracia" — Grécia → Sócrates → Platão → Aristóteles → Roma → Iluminismo → Revolução Francesa → Brasil), em vez de "Curso de Grécia Antiga". *Justificativa: reforça o princípio pedagógico #4 e diferencia estruturalmente de Coursera/edX/Khan Academy, cuja organização é por curso/módulo tradicional.*

## 10. Diferenciais obrigatórios do MVP

Estes 6 itens são o que torna o produto defensável desde o dia 1 — nenhum é opcional:

1. Timeline navegável como tela central de progresso (não uma trilha linear genérica).
2. Um companheiro de aprendizado com pelo menos 3 estágios visuais de evolução ligados a marcos reais de progresso.
3. Repetição espaçada funcionando de ponta a ponta, apresentada como "missões de revisão", nunca exposta como configuração técnica.
4. Sistema de nível de consenso acadêmico em pelo menos as afirmações mais "disputadas" do conteúdo de lançamento.
5. Estrutura de conteúdo em "jornadas" narrativas (não cursos/módulos soltos), com pelo menos 2-3 jornadas completas no lançamento.
6. Modelo de dados e conteúdo desenhado como domínio-agnóstico desde o schema inicial (mesmo com um único domínio ativo — ver seção 3), para não pagar o custo de migração ao abrir o segundo domínio.

## 11. Funcionalidades que devem ser evitadas no MVP

Escopo é a decisão mais importante desta etapa. Cada item abaixo é uma ideia genuinamente boa (nasceu desta mesma conversa) que **não deve** entrar na primeira versão:

- **Personagens de IA com memória persistente de longo prazo** (ex.: Sócrates lembrando uma conversa de semanas atrás). Alto custo de infraestrutura de IA em escala, risco de moderação de conteúdo (personagens históricos "debatendo" temas atuais sensíveis) e complexidade de produto — validar primeiro o loop central sem essa camada, tratar como visão de longo prazo (seção 12).
- **Múltiplos domínios de conhecimento ativos** (Filosofia, Economia etc.). O MVP é 100% História; a arquitetura é domínio-agnóstica (item 6, seção 10), mas o conteúdo e o esforço de curadoria de um segundo domínio só entram depois de validar retenção no primeiro.
- **Sistema completo de ligas com infraestrutura de ranking em tempo real.** Começar com um ranking semanal assíncrono mais simples; evoluir para ligas completas (estilo Brilliant) só depois de validar que o segmento competitivo (persona Rafael) é relevante o suficiente.
- **Mecânicas sociais profundas** (guildas, "party" cooperativa ao estilo Habitica). Interessante para retenção de longo prazo, mas adiciona complexidade de infraestrutura social sem validar primeiro se o loop individual já retém.
- **Monetização por "pacotes pagos de era/domínio".** Decidir a granularidade de cobrança (seção 13) só depois de ter dados reais de uso — não hardcodar um modelo de compra por conteúdo antes de entender comportamento.
- **Licenciamento B2B para escolas** (persona Educador, seção 7.4). Oportunidade real identificada na pesquisa (History Hit vende currículo Key Stage), mas é um canal de vendas e produto diferente (multi-usuário, relatórios para professor) que não deve competir por atenção de engenharia com o MVP consumer.

## 12. Estratégia de retenção

| Horizonte | Objetivo | Mecânica principal |
|---|---|---|
| **D1** | Vitória rápida sem fricção de cadastro | Primeiro nó da timeline completado na primeira sessão, antes de pedir conta (referência: onboarding do Duolingo, que ganhou ~20% de retenção D1 ao adiar o cadastro); companheiro aparece e reage imediatamente. |
| **D7** | Criar o hábito antes que o app vire "só mais um app" | Primeira "missão de revisão" de repetição espaçada dispara (o app "nota" que o usuário está esquecendo algo); streak com congelamento compassivo já ativo; primeiro momento de "conhecimento conectado" gera curiosidade para continuar. |
| **D30** | Vínculo emocional + progresso visivelmente composto | Companheiro atinge o 2º estágio de evolução visual; painel de estatísticas já tem dado suficiente para ser interessante; primeira jornada completa de ponta a ponta gera orgulho/compartilhamento. |
| **Longo prazo** | Motivo estrutural para nunca desinstalar | Expectativa de novos domínios de conhecimento (visão de plataforma, seção 3) cria horizonte de crescimento; personagens de IA com memória persistente (se validados) viram o motivo emocional de retorno; camada competitiva (ligas) para o segmento que responde a isso. |

## 13. Modelo de monetização

**Modelo proposto (provisório): freemium com assinatura, monetizando profundidade e amplitude — nunca o loop de hábito em si.**

- **Gratuito para sempre:** timeline, companheiro, streak, repetição espaçada, XP, jornadas do domínio de lançamento (História). O loop central de hábito não pode ter fricção de pagamento — é a lição direta da reação negativa a "corações/energia" do Duolingo (crítica mais citada contra o líder de mercado na Etapa 1).
- **Assinatura Premium (provisória) monetiza:**
  - Acesso antecipado/expandido a novas jornadas dentro do domínio de lançamento.
  - Conversas de IA mais profundas com personagens (quando essa camada existir).
  - Estatísticas avançadas (mapa de conhecimento detalhado, comparativos históricos de desempenho).
  - No futuro (pós-MVP): acesso a novos domínios de conhecimento — mecanismo natural de expansão de receita alinhado à visão de plataforma (seção 3), similar a como um usuário "compra" um novo idioma, mas aqui compra um novo *campo de saber*.
- **Evitar deliberadamente:** qualquer mecânica que limite tentativas/vidas no núcleo de aprendizado (o "sistema de corações" é a fricção mais criticada do mercado); anúncios intrusivos no meio de lições (crítica recorrente contra HISTORY Channel e Nibble).

Este modelo precisa ser validado com dados reais de conversão antes de qualquer compromisso de preço — o valor aqui é a **lógica** (o que se cobra e o que nunca se cobra), não os números.

## 14. Identidade de marca

> Nome, tom de voz e conceito visual abaixo são **provisórios** — sujeitos a validação de disponibilidade de marca/domínio e a aprovação do fundador antes de qualquer investimento em produção visual.

### Nome da plataforma (provisório): **Mneme**
Da deusa grega Mnemosine/Mneme, personificação da memória — raiz etimológica de "mnemônico". Justificativa: (1) funciona para a plataforma inteira, não só para História, resolvendo a mudança de visão da seção 3; (2) conecta diretamente ao pilar de repetição espaçada/retenção real, que é a USP central (seção 4); (3) curto, pronunciável, sem tradução literal problemática em português.
Alternativas consideradas: *Lyceum* (evoca a escola de Aristóteles, mas soa mais "curso online tradicional" do que hábito diário); *Chronis* (remete a tempo/timeline, mas menos distintivo). **A validar:** disponibilidade de domínio/app stores/trademark antes de qualquer decisão final.

### Companheiro de aprendizado (provisório): **Thoth**
Do deus egípcio da escrita, do conhecimento e escriba dos deuses. Conceito visual: um pequeno espírito feito de **pergaminho vivo e tinta animada**, carregando uma pena que se torna mais ornamentada conforme o usuário evolui — unifica as ideias de "pergaminho vivo", "pequeno escriba" e "pena que evolui" levantadas nesta conversa em uma única criatura coerente. A evolução de aparência (seção 9) é expressa por selos/lacres de cera e vestes de época que mudam conforme marcos de jornada são atingidos (ex.: uma toga ao concluir Roma), preparando visualmente a transição para outros domínios no futuro (vestes de filósofo, motivos de pergaminhos econômicos etc.).
**Nota de risco:** o nome "Clio" (musa da história) foi cogitado e descartado nesta proposta por conflito relevante de marca já estabelecida em outros setores (software jurídico, automóveis) — evitar reuso.

### Tom de voz
"Amigo erudito", não "professor de escola" nem "palhaço de aplicativo". Curioso, caloroso e respeitoso com a inteligência do usuário adulto — celebra entendimento genuíno em vez de "pegadinhas" de quiz (reação direta à crítica de perguntas mal calibradas do Paladin), e nunca usa culpa/ironia para cobrar engajamento (rejeitando o tom "brincalhão e um pouco sarcástico" do Duo, que já mostra sinais de desgaste segundo as críticas coletadas na Etapa 1).

### Identidade visual conceitual
Paleta ancorada em pergaminho/sépia e tinta (tons terrosos, dourado envelhecido, azul-tinta profundo) como base, com acentos vibrantes por era histórica na timeline (cada período ganha uma cor de destaque, reforçando a sensação de "viajar" visualmente pelo tempo). Iconografia baseada em objetos de conhecimento (selos, pergaminhos, ampulhetas, constelações) em vez de cartoon genérico — precisa ser reconhecível a distância como o verde do Duolingo ou os hexágonos do Brilliant.

## 15. Métricas de sucesso

**North Star Metric (proposta):** **Nós de Conhecimento Dominados por Usuário Ativo por Semana** — um "nó" só conta como dominado quando passa no limiar de retenção da repetição espaçada, não apenas ao ser "visitado" uma vez. *Justificativa: mede hábito e aprendizado real ao mesmo tempo, respondendo diretamente à crítica (levantada na Etapa 1 contra Duolingo/Paladin) de que XP mede esforço/engajamento, não conhecimento retido.*

**Métricas de apoio:**
- **Retenção:** curvas de coorte D1/D7/D30/D90.
- **Engajamento:** streak médio, % de usuários com jornada ativa, sessões/semana, duração média de sessão.
- **Aprendizado real:** taxa de acerto em revisões espaçadas (proxy de retenção de memória), % de jornadas concluídas até o fim vs. abandonadas no meio.
- **Monetização:** conversão free→premium, LTV/CAC, churn de assinantes.
- **Marca:** NPS, % de usuários que compartilham conquistas/estatísticas (proxy de aquisição orgânica).

## 16. Riscos e mitigação

| Risco | Mitigação |
|---|---|
| Imprecisão de conteúdo (maior ponto fraco do concorrente mais próximo, Paladin) | Processo editorial com revisão especializada + sistema de nível de consenso transparente em vez de apresentar fatos como absolutos. |
| Custo/complexidade de IA com memória persistente | Adiar para pós-MVP (seção 11); validar o loop central sem essa camada primeiro. |
| Scope creep (querer construir plataforma + toda gamificação + IA de uma vez) | MVP estritamente de um domínio (História), arquitetura extensível mas conteúdo restrito (seções 10-11). |
| Monetização agressiva corroer a marca (caso Duolingo, queda reputacional em 2026) | Loop de hábito 100% gratuito por princípio de produto (seção 13), não apenas por decisão de pricing. |
| Concorrência com marcas gigantes já estabelecidas (Duolingo, Khan Academy) | Posicionamento deliberadamente de nicho defensável (profundidade > amplitude) antes de qualquer expansão horizontal (seção 5). |
| Claims de eficácia pedagógica sem evidência (erro que custou multa da FTC à Lumosity) | Nunca afirmar "melhora sua memória/inteligência" sem estudo — comunicar apenas cobertura de conteúdo e mecanismo de retenção. |
| Nome/identidade de marca propostos (Mneme/Thoth) sem disponibilidade de domínio/trademark | Tratar como provisório nesta etapa; validar antes de qualquer investimento em produção visual (marcado explicitamente na seção 14). |

---

**Próximo passo:** Etapa 3 (Game Design Document) — traduzir as seções 9-10 deste documento em sistemas de jogo detalhados (fórmulas de XP, curva de progressão do companheiro, especificação do agendador de repetição espaçada, estrutura de dados de jornadas).
