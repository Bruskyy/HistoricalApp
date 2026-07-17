# Product Vision Document

> Este documento define a identidade do produto antes de qualquer decisão técnica. Toda decisão aqui é justificada por uma lacuna de mercado identificada em [`COMPETITOR_ANALYSIS.md`](COMPETITOR_ANALYSIS.md) ou por um objetivo de produto explícito — nenhuma funcionalidade é proposta apenas "porque um concorrente tem". Onde uma decisão é estratégica (nome, posicionamento, monetização), ela é marcada como **provisória** e deve ser validada pelo fundador antes de virar compromisso de engenharia.
>
> **v2** — revisado após feedback do fundador: adicionados mantra, Princípio Fundamental, universo do produto, progressão unificada, momentos memoráveis, camada de emoção e comunidade/eventos; timeline promovida para o coração do propósito; roadmap alterado para incluir um Learning Design Document (LDD) antes do GDD.

---

## 1. Mantra

> **"Entender o mundo é a maior das aventuras."**

Toda decisão de produto, texto de interface, notificação e material de marketing deve caber debaixo dessa frase. Se uma feature faz o aprendizado parecer obrigação em vez de aventura, ela está errada — não importa quão boa seja a métrica que ela otimiza.

*(Alternativa considerada: "Aprender é uma aventura, não uma obrigação" — mais literal, porém define o produto pelo que ele não é. A versão escolhida aponta para o resultado na vida do usuário, no espírito de "entender o mundo muda a forma como você vive nele".)*

## 2. Princípio Fundamental

> **O produto nunca recompensa apenas tempo investido. Ele recompensa compreensão.**
>
> **E errar nunca custa nada — errar ensina.**

Consequências não-negociáveis desse princípio, que todo sistema do produto deve refletir:

- Nenhuma métrica central (North Star, nível, título) pode ser inflada só com presença/cliques — todas exigem evidência de compreensão retida (ver seções 16 e 21).
- Não existem "vidas", "corações" ou qualquer punição por erro. Um erro dispara explicação e agenda revisão — nunca cobra um recurso do usuário. (Rejeição deliberada da mecânica mais criticada do Duolingo na Etapa 1.)
- Perguntas de "pegadinha" e memorização de data solta não são portões de progresso — avaliação mede entendimento causal, não decoreba (detalhado no [`LEARNING_DESIGN.md`](LEARNING_DESIGN.md)).

## 3. Propósito do produto

**O usuário percorre visualmente toda a História da Humanidade.**

A tela central do produto não é um menu, um feed nem uma trilha genérica: é a **linha do tempo da humanidade** — Pré-História → Mesopotâmia → Egito → Grécia → Roma → Idade Média → ... — que o usuário literalmente caminha, acendendo cada nó com conhecimento real. Onde o Duolingo tem "o caminho", nós temos **a História**.

Sobre essa espinha dorsal, o propósito: transformar o ato de adquirir conhecimento profundo — não trivial, não superficial — em um hábito diário tão envolvente quanto um jogo, começando por História e construído desde o dia 1 como uma **engine de domínios de conhecimento**, não como um app de nicho único.

*Justificativa da timeline como coração (e não como feature): nenhum concorrente de história tem timeline navegável e gamificada (lacuna #2 da Etapa 1) — é a estrutura de navegação mais natural para o domínio, a mais intuitiva para o usuário ("estou na Grécia, falta muito para Roma") e ainda está completamente livre no mercado.*

## 4. Problema de mercado que resolve

A Etapa 1 mapeou uma lacuna dupla e específica (ver `COMPETITOR_ANALYSIS.md`, seção 4):

1. **Quem gamifica bem (Duolingo, Brilliant, Busuu) não ensina conteúdo profundo/factual** — a mecânica é genérica e portátil para qualquer assunto raso, mas nenhum desses produtos lida com a exigência de **precisão historiográfica, fontes e incerteza acadêmica**.
2. **Quem ensina história com seriedade (History Hit, Khan Academy) não gamifica bem, ou não gamifica nada** — são consumo passivo (vídeo/podcast) ou LMS tradicional, sem loop de hábito diário.

O único concorrente que tentou os dois ao mesmo tempo (Paladin, 7/10) falhou exatamente no equilíbrio: gamificação forte, mas curadoria de conteúdo criticada por imprecisão. **O problema real não é "faltar um Duolingo de História" — é faltar um produto que trate conhecimento profundo com o mesmo rigor de design de produto que hoje só existe em apps de conteúdo raso.**

## 5. Visão de longo prazo: uma plataforma, não um app

> Construir a primeira plataforma que transforma conhecimento profundo em jogo — começando por História, com arquitetura desde o dia 1 preparada para novos domínios (Filosofia, Economia, Geografia, Direito, Psicologia, Literatura, Artes, Ciências Políticas) rodando sobre a mesma engine de aprendizado, gamificação e IA.

Implicações práticas:

- **História não é "o produto"; é o primeiro domínio de conteúdo publicado sobre a engine.** Todo conceito de produto abaixo (jornada, nó, missão, companheiro, museu) é nomeado e desenhado de forma domínio-agnóstica, mesmo que o MVP só tenha um domínio ativo.
- Isso é uma decisão de **arquitetura de conteúdo e produto**, não de escopo do MVP — o MVP continua sendo só História (seção 15). O banco de conteúdo, a progressão e a IA não podem ser hardcoded para "história".
- O nome da marca (seção 19) precisa funcionar para a plataforma inteira.

## 6. Proposta única de valor (USP)

> **"A única plataforma onde você aprende de verdade — com o rigor de uma fonte confiável e o hábito de um jogo viciante."**

| Pilar | Lacuna que resolve | Mecânica central |
|---|---|---|
| **Rigor sem ser chato** | Ninguém une gamificação forte + precisão acadêmica | Nível de consenso acadêmico transparente (seção 12) |
| **Memória real, não ilusão de progresso** | SRS de qualidade nunca aparece com camada social | Repetição espaçada invisível (seção 12) |
| **Vínculo emocional com o conhecimento** | Nenhum concorrente de história tem companion evolutivo | Companheiro de aprendizado (seções 9 e 19) |

## 7. Posicionamento frente aos concorrentes

- **Frente a Duolingo/Busuu (gamificação madura):** mais sério e mais preciso — a gamificação serve o aprendizado real, não o tempo de tela.
- **Frente a Brilliant (benchmark de gamificação mais próximo):** mesma qualidade de XP/streak/ligas, aplicada a humanidades/pensamento crítico — território que o Brilliant não ocupa.
- **Frente a History Hit/HISTORY Channel (conteúdo sério, mídia passiva):** mesma seriedade editorial, com aprendizado ativo e retenção mensurável.
- **Frente a Anki/RemNote (retenção científica):** mesmo rigor de memorização (SRS), sem exigir que o usuário entenda o algoritmo.
- **Frente a Paladin (concorrente direto mais próximo):** onde ele é rápido e impreciso, nós somos rigorosos e transparentes sobre incerteza histórica.

**Não somos "o Duolingo de História".** Somos a plataforma que prova que conhecimento profundo pode ser tão envolvente quanto conhecimento raso.

## 8. Missão e valores

**Missão:** Fazer com que entender o mundo — seu passado, seus sistemas, suas ideias — seja um hábito diário acessível a qualquer pessoa.

**Valores:**
- **Precisão antes de engajamento.** Nunca simplificamos a ponto de mentir. Quando a história é incerta, o produto mostra a incerteza.
- **Retenção compassiva, não punitiva.** Hábito se constrói com acolhimento (referência: Finch), não com culpa.
- **Gamificação a serviço do domínio.** Toda mecânica aponta para evidência real de aprendizado — nunca XP por clique vazio (seção 2).
- **Construir uma vez, aplicar em muitos domínios.** Toda decisão do MVP responde também: "isso funciona se o domínio fosse Filosofia?".

## 9. O universo do produto

> Decisão de design: o produto não é "um app com features" — é **um universo com regras**, como Duolingo (o mundo do Duo), Habitica (fantasia RPG) e Finch (o ninho do passarinho). Nomes abaixo **provisórios**.

**O Grande Arquivo.** Existe um lugar fora do tempo onde toda a memória da humanidade está guardada — mas seus salões estão apagados, esquecidos. O usuário é um **Guardião da Memória**: cada nó da timeline que ele domina *reacende* uma parte do Arquivo. Aprender, neste universo, é literalmente devolver luz à memória do mundo.

Como o universo amarra os sistemas do produto (cada um deixa de ser "feature" e vira lugar/papel no mundo):

| Sistema | No universo |
|---|---|
| Timeline | **O Corredor do Tempo** — o grande salão central do Arquivo, que o usuário percorre e ilumina |
| Companheiro | **Thoth**, um jovem escriba do Arquivo, aprendiz como o usuário — vocês crescem juntos |
| Museu/coleções | **O Salão do Guardião** — a ala pessoal do usuário no Arquivo, onde cada era dominada ergue um artefato |
| Títulos/níveis | Hierarquia do Arquivo: Curioso → Aprendiz → Escriba → Cronista → Historiador → Sábio → **Guardião da Memória** |
| Ligas | **Ordens** de Guardiões que competem semanalmente |
| Mapa mundial | **O Atlas Vivo** — regiões do mundo que ganham cor conforme o usuário domina suas histórias |
| Missões de revisão (SRS) | **Memórias se apagando** — "a chama de Roma está enfraquecendo, Guardião" |

Esse enquadramento resolve a crítica de "parece um app de estudos, não um universo": a repetição espaçada, por exemplo, deixa de ser "revisão pendente" (tarefa) e vira "uma memória do Arquivo está se apagando e só você pode reacendê-la" (aventura) — mesmo sistema, emoção oposta, exatamente o mantra da seção 1.

## 10. Personas

### 10.1 Marina, 26 anos — "A Curiosa Casual" (persona primária do MVP)
Usa o celular no transporte público e antes de dormir. Já teve o Duolingo, abandonou por achar "vazio depois de um tempo". Quer sentir que aprende algo que faz diferença em conversas reais. **Precisa de:** vitória rápida no dia 1, companheiro que gera afeto, streak sem culpa.

### 10.2 Rafael, 19 anos — "O Concurseiro/Vestibulando" (persona secundária, forte em D30+)
Estuda para ENEM/vestibular/concursos, usa Anki mas odeia a interface. Precisa de retenção real porque será cobrado em prova; muito sensível a erro factual. **Precisa de:** repetição espaçada que funciona, conhecimento conectado (interdisciplinaridade para redação), transparência de fontes.

### 10.3 Beatriz, 41 anos — "A Entusiasta Erudita" (persona de LTV alto)
Perfil "history buff" (público History Hit); já paga por conteúdo histórico; rejeita gamificação infantilizada. **Precisa de:** jornadas com profundidade real, conversas futuras com personagens históricos, tom adulto.

### 10.4 (Futura, não-MVP) O Educador
Professor que atribui jornadas à turma (oportunidade B2B validada pelo modelo Key Stage da History Hit). Fora do escopo do MVP (seção 16).

## 11. Princípios pedagógicos

1. **Aprender fazendo, não assistindo** (referência: "learn-by-doing" do Brilliant, 8,5/10).
2. **Método socrático na IA** — guiar com perguntas, não entregar respostas (referência: Khanmigo).
3. **Transparência sobre incerteza histórica** — feature central, não rodapé.
4. **Narrativa antes de fato isolado** — causa e consequência, nunca lista de datas.
5. **Conhecimento é uma rede, não uma lista** — todo tópico concluído explicita o que conecta.
6. **Repetição espaçada como motor invisível** — o usuário sente que "o app sabe o que eu preciso revisar", nunca configura um algoritmo.

> O detalhamento operacional destes princípios (como nasce uma jornada, anatomia de uma lição, o que conta como "aprendido", como escrever perguntas de compreensão) vive no [`LEARNING_DESIGN.md`](LEARNING_DESIGN.md) — etapa nova do roadmap, anterior ao GDD.

## 12. Princípios de gamificação

- **Timeline como estrutura central** (seção 3) — o Corredor do Tempo é a tela-mãe do produto.
- **Companheiro de aprendizado evolutivo** — Thoth cresce, muda de vestes e ganha objetos com marcos reais do usuário; tem estados emocionais ("sente sua falta", "fez aniversário"). *Justificativa: Finch (8/10) prova que companion emocional sustenta retenção sozinho; nenhum concorrente de história tem isso (lacuna #6).*
- **Repetição espaçada invisível, vestida de missão** — "A memória de Roma está se apagando — Missão especial, XP em dobro". *Justificativa: lacuna #3 (SRS nunca combinado com camada motivacional).*
- **Nível de consenso acadêmico** — percentual ("Nível de consenso: 72%") que, ao toque, explica quem defende, quem discorda e por quê. *Diferencial de credibilidade frente ao Paladin.*
- **Estatísticas como identidade** — horas, civilizações concluídas, eventos dominados, precisão, velocidade, Atlas Vivo por continente, assuntos esquecidos. *Combina o rigor de dado do LPI/EPQ (Lumosity/Elevate) com calor emocional que eles não têm.*
- **Conhecimento conectado** — ao concluir Grécia: "Agora você entende melhor: ✔ Democracia ✔ Roma ✔ Iluminismo ✔ Revolução Francesa ✔ Constituição Brasileira".
- **Streak compassivo** — congelamento generoso, retomada sem culpa (Finch), rejeitando punição (Habitica) e ansiedade de streak (crítica ao Duolingo).
- **Ligas/Ordens como camada opcional** — visível para o segmento competitivo (Rafael), nunca o gancho principal para Marina/Beatriz.
- **Jornadas, não cursos** — "Jornada: O Nascimento da Democracia" (Grécia → Sócrates → Platão → Aristóteles → Roma → Iluminismo → Revolução Francesa → Brasil).

## 13. Progressão unificada

> Progressão é o coração da gamificação e precisa ser **um sistema único**, não features espalhadas. A regra: **um único ato de aprendizado irradia por todos os sistemas ao mesmo tempo.**

Cadeia de progressão — tudo nasce de compreensão (seção 2) e tudo cresce junto:

```
Compreensão demonstrada (lição/revisão)
        │
        ├─► XP ──► Nível ──► Título no Arquivo (Curioso → ... → Guardião da Memória)
        │
        ├─► Nó da Timeline acende ──► Era progride ──► Corredor do Tempo se ilumina
        │
        ├─► Companheiro ganha energia ──► evolui de estágio ──► novas vestes/objetos de época
        │
        ├─► Atlas Vivo pinta a região do mundo correspondente
        │
        ├─► Salão do Guardião (museu) ganha artefatos/estátuas da era
        │
        ├─► Coleções avançam (figuras históricas, artefatos, conquistas)
        │
        ├─► Estatísticas atualizam (precisão, domínio por era/continente)
        │
        └─► Posição na Ordem (liga semanal) sobe
```

Regras do sistema:
1. **Nenhum eixo progride sozinho** — se o usuário sente que "subiu de nível mas nada mudou", a progressão falhou. Cada marco relevante deve ser visível em pelo menos 3 eixos (ex.: dominar Roma = nó acende + Thoth ganha toga + estátua no museu).
2. **Eixos têm ritmos diferentes de propósito** — XP é feedback de minuto a minuto; título e museu são conquistas de semanas; o Corredor do Tempo completo é o horizonte de meses/anos. A progressão precisa dar recompensa em todas as escalas de tempo simultaneamente.
3. **Só compreensão move a cadeia** (Princípio Fundamental) — assistir/abrir/clicar sem demonstrar entendimento não gera progressão em eixo nenhum.

## 14. Emoção e momentos memoráveis

### 14.1 Emoção: como o progresso é *sentido*

O documento de visão não pode falar só de aprendizado — precisa especificar **o que o usuário sente**. Regra de design: **nenhum marco relevante é comunicado apenas por número**. Quando o usuário termina Roma:

- uma animação dedicada acontece (o nó de Roma acende no Corredor do Tempo);
- o Atlas Vivo pinta a península Itálica;
- Thoth comemora e veste a toga romana;
- o Salão do Guardião ergue uma estátua;
- e só então aparece o XP.

O número é o registro; a emoção é a recompensa. (Referência validada: o loop de recompensa visual imediata do Finch — o pet reage e "viaja" a cada tarefa — é citado na Etapa 1 como o motivo pelo qual usuários voltam diariamente.)

**Sensibilidade de tom:** celebração é calibrada ao conteúdo — concluir um nó sobre uma tragédia histórica (guerras, escravidão, genocídios) fecha com solenidade e reflexão, nunca com confete. Detalhado no LDD.

### 14.2 Momentos memoráveis (o "efeito WOW" compartilhável)

Todo produto gigante tem seu momento de "olha isso" (streak do Duolingo, Wrapped do Spotify). Os nossos, desenhados desde já como **cards visuais compartilháveis** gerados automaticamente:

| Momento | O que o usuário mostra |
|---|---|
| **Completei a Antiguidade** | Card da era com o trecho do Corredor do Tempo totalmente aceso |
| **Meu companheiro evoluiu** | Thoth em novo estágio, com as vestes/objetos que a jornada dele conta |
| **Descobri 100% da Europa** | O Atlas Vivo com o continente inteiro colorido |
| **Meu Salão do Guardião** | O museu pessoal, visitável/mostrável como uma galeria |
| **Recebi o título de Historiador** | Selo/diploma do Arquivo com o novo título |
| **Retrospectiva anual** | "Seu ano no Arquivo": eras dominadas, horas, figura histórica favorita — o nosso "Wrapped" |

Critério de sucesso: cada card deve ser bonito o suficiente para ser postado sem vergonha e legível o suficiente para quem nunca viu o app entender em 3 segundos. Taxa de compartilhamento é métrica de marca (seção 21).

## 15. Comunidade e eventos

Comunidade ≠ rede social. O MVP não tem feed, chat nem guildas (seção 16) — mas tem **momentos coletivos sincronizados**, que geram pertencimento com custo de infraestrutura baixo:

- **Desafio da semana:** um objetivo comum a todos os usuários ("Quem consegue dominar o Renascimento até domingo?"), com card de conclusão especial. Reaproveita o ciclo semanal das Ordens/ligas.
- **Eventos temáticos mensais:** "Semana Egípcia", "Semana Napoleônica" — o conteúdo da era ganha destaque, XP bônus e um colecionável exclusivo de evento no museu. *Custo baixo: reusa conteúdo existente + 1 colecionável; efeito: motivo para voltar mesmo para quem já passou daquela era.*
- **Quiz mundial (pós-MVP):** evento síncrono global — todos respondem as mesmas perguntas na mesma janela, ranking único. Alto potencial de viralidade, mas exige infraestrutura de tempo real: fica para depois da validação do MVP.

*Justificativa: retenção de longo prazo precisa de motivos coletivos de retorno (validado pelos eventos sazonais do Duolingo e desafios do Habitica na Etapa 1), mas mecânica social profunda antes de validar o loop individual é risco de escopo — este é o meio-termo deliberado.*

## 16. Diferenciais obrigatórios do MVP — e o que fica de fora

### Obrigatórios (o que torna o produto defensável no dia 1)

1. Timeline navegável (Corredor do Tempo) como tela central de progresso.
2. Companheiro com pelo menos 3 estágios visuais de evolução ligados a marcos reais.
3. Repetição espaçada de ponta a ponta, vestida de "memórias se apagando"/missões — nunca exposta como configuração.
4. Nível de consenso acadêmico nas afirmações disputadas do conteúdo de lançamento.
5. Conteúdo em jornadas narrativas — 2 a 3 jornadas completas no lançamento.
6. Modelo de dados domínio-agnóstico desde o schema inicial (seção 5).
7. Progressão unificada mínima: cada marco visível em ≥3 eixos (seção 13), incluindo museu simples (Salão do Guardião v1: galeria de artefatos conquistados) e Atlas Vivo v1.
8. Pelo menos 2 momentos memoráveis compartilháveis funcionando no lançamento (conclusão de era + evolução do companheiro).

### Excluídos do MVP (boas ideias, momento errado)

- **Personagens de IA com memória persistente** (Sócrates que lembra conversas de semanas atrás — o "divisor de águas") — alto custo de infra/moderação; validar o loop central primeiro. Fica como aposta de longo prazo (seção 17).
- **Segundo domínio de conhecimento ativo** — a arquitetura nasce pronta, o conteúdo espera validação de retenção.
- **Ligas em tempo real** — começar com ranking semanal assíncrono simples.
- **Guildas/mecânicas sociais profundas** — a camada coletiva do MVP são os eventos da seção 15.
- **Quiz mundial síncrono** — pós-MVP (seção 15).
- **B2B escolar** — canal e produto distintos; não compete com o MVP consumer por engenharia.
- **Monetização por pacotes de conteúdo** — decidir granularidade só com dados reais de uso.

## 17. Estratégia de retenção

| Horizonte | Objetivo | Mecânica principal |
|---|---|---|
| **D1** | Vitória rápida sem fricção | Primeiro nó aceso na primeira sessão, antes do cadastro (referência: +20% D1 do Duolingo ao adiar conta); Thoth aparece e reage imediatamente. |
| **D7** | Criar o hábito | Primeira "memória se apagando" (SRS) dispara — o app "nota" que o usuário está esquecendo; streak compassivo ativo; primeiro "conhecimento conectado". |
| **D30** | Vínculo emocional + progresso composto | Thoth atinge o 2º estágio; museu e Atlas já têm conteúdo "mostrável"; primeira jornada completa; primeiro card compartilhado. |
| **Longo prazo** | Motivo estrutural para nunca sair | Eventos temáticos mensais (seção 15); expectativa de novos domínios (seção 5); personagens de IA persistentes (se validados); Ordens para o segmento competitivo; Retrospectiva anual como ritual. |

## 18. Modelo de monetização

**Modelo (provisório): freemium com assinatura, monetizando profundidade e amplitude — nunca o loop de hábito.**

- **Gratuito para sempre:** timeline, companheiro, streak, SRS, XP, jornadas do domínio de lançamento. O loop de hábito não pode ter fricção de pagamento — lição direta da reação contra "corações/energia" do Duolingo, e consequência do Princípio Fundamental (punir erro com paywall é punir aprendizado).
- **Assinatura Premium (provisória):** acesso antecipado a novas jornadas; conversas de IA aprofundadas (quando existirem); estatísticas avançadas; cosméticos raros para Thoth/museu; futuramente, novos domínios de conhecimento — o mecanismo natural de expansão de receita da visão de plataforma.
- **Nunca:** vidas/corações; anúncios no meio de lições (crítica recorrente a HISTORY Channel/Nibble).

Validar lógica → depois preços, com dados reais.

## 19. Identidade de marca

> Nomes **provisórios** — sujeitos a validação de disponibilidade de marca/domínio antes de investimento visual.

- **Plataforma: Mneme** (deusa grega da memória; raiz de "mnemônico"). Funciona para todos os domínios; conecta à USP de retenção real; curto e pronunciável. Alternativas descartadas: *Lyceum* (soa curso tradicional), *Chronis* (menos distintivo). **A validar:** domínio/lojas/trademark.
- **Companheiro: Thoth** (deus egípcio da escrita, escriba dos deuses). Um jovem escriba de **pergaminho vivo e tinta animada**, pena que se ornamenta com a evolução — unifica "pergaminho vivo", "pequeno escriba" e "pena que evolui" numa criatura só. Evolução expressa em selos de cera e vestes de época (toga ao concluir Roma), extensível a outros domínios. *"Clio" descartado por conflito de marca (software jurídico, automóvel).*
- **Universo: O Grande Arquivo** (seção 9) — é ele que transforma marca em mundo, respondendo à crítica "parece app de estudos": o usuário não abre um app, ele *entra num lugar*.
- **Tom de voz:** "amigo erudito" — curioso, caloroso, respeitoso com a inteligência do adulto; celebra entendimento genuíno; nunca usa culpa/ironia para cobrar engajamento (rejeição ao tom sarcástico do Duo, já em desgaste segundo a Etapa 1).
- **Identidade visual conceitual:** pergaminho/sépia e tinta (terrosos, dourado envelhecido, azul-tinta) como base; cada era da timeline com cor de destaque própria (a sensação visual de "viajar no tempo"); iconografia de objetos de conhecimento (selos, pergaminhos, ampulhetas, constelações). Precisa ser reconhecível a distância como o verde Duolingo ou os hexágonos do Brilliant.

## 20. Métricas de sucesso

**North Star Metric:** **Nós de Conhecimento Dominados por Usuário Ativo por Semana** — um nó só conta como dominado ao passar no limiar de retenção da repetição espaçada (definição operacional no LDD), não ao ser "visitado". *Mede hábito e aprendizado real ao mesmo tempo — XP mede esforço; a North Star mede conhecimento retido (Princípio Fundamental).*

**Apoio:**
- **Retenção:** coortes D1/D7/D30/D90.
- **Engajamento:** streak médio, % com jornada ativa, sessões/semana, participação em eventos temáticos.
- **Aprendizado real:** taxa de acerto em revisões espaçadas; % de jornadas concluídas vs. abandonadas.
- **Monetização:** conversão free→premium, LTV/CAC, churn.
- **Marca/viralidade:** NPS; **taxa de compartilhamento de momentos memoráveis** (seção 14.2) como proxy de aquisição orgânica.

## 21. Riscos e mitigação

| Risco | Mitigação |
|---|---|
| Imprecisão de conteúdo (fraqueza fatal do Paladin) | Processo editorial com revisão especializada (LDD) + nível de consenso transparente. |
| Custo/complexidade de IA persistente | Fora do MVP; validar loop central primeiro. |
| Scope creep (plataforma + gamificação + IA de uma vez) | MVP de um domínio, lista explícita de exclusões (seção 16). |
| Monetização corroer a marca (caso Duolingo 2026) | Loop de hábito 100% gratuito por princípio, não por pricing. |
| Universo/narrativa soar infantil para a persona Beatriz | Tom "amigo erudito"; universo apresentado com sobriedade (Arquivo/Guardião, não "mundo mágico dos amiguinhos"); testar recepção por persona. |
| Gamificar tragédias históricas gerar repulsa/reputação | Celebração calibrada ao conteúdo (seção 14.1) + diretrizes de sensibilidade no LDD. |
| Concorrência de marcas gigantes | Nicho defensável (profundidade > amplitude) antes de expansão horizontal. |
| Claims de eficácia sem evidência (multa FTC/Lumosity) | Comunicar mecanismo e cobertura, nunca "melhora sua memória/inteligência" sem estudo. |
| Nomes provisórios sem disponibilidade | Validar domínio/trademark antes de produção visual. |

---

## Roadmap de documentação (revisado)

1. ✅ Pesquisa de mercado — `COMPETITOR_ANALYSIS.md`
2. ✅ Product Vision — este documento
3. ⏭️ **Learning Design Document (LDD)** — `LEARNING_DESIGN.md` *(etapa nova: o modelo de aprendizagem vem antes do jogo, porque o diferencial do produto é como se ensina, não só como se joga)*
4. Game Design Document — `GAME_DESIGN.md`
5. Product Requirements Document — `PRD.md`
6. Arquitetura — `ARCHITECTURE.md`
7. Backlog — `BACKLOG.md` / `ROADMAP.md`
8. Desenvolvimento
