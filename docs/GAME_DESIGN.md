# Game Design Document (GDD)

> Subordinado ao [`VISION.md`](VISION.md) (Princípio Fundamental §2, Filosofia de Crescimento §2.1, fases §16.2) e ao [`LEARNING_DESIGN.md`](LEARNING_DESIGN.md) (estados de nó §6, afirmações §1). **Nenhum sistema deste documento existe por si — cada um declara qual passo do Core Loop fortalece.** Se um sistema não fortalece passo nenhum, ele não pertence ao jogo (VISION §2.1).
>
> Todos os números deste documento são **hipóteses de calibração** — valores iniciais para o piloto, instrumentados desde o dia 1 e ajustados com dados reais. Nenhum número aqui é decisão final.

---

## 1. Core Gameplay Loop

O produto inteiro é este loop. Tudo o mais é reforço.

```
                    Entrar no app
                         ↓
              Receber uma missão          ◄─── Missões (§3)
                         ↓
             Aprender um conceito         ◄─── Lição LDD §3 (gancho → narrativa)
                         ↓
             Responder desafios           ◄─── Interações LDD §7
                         ↓
              Receber feedback            ◄─── Feedback e celebração (§9)
                         ↓
             Avançar na Timeline          ◄─── Corredor do Tempo (§4)
                         ↓
              Ver Thoth evoluir           ◄─── Companheiro (§7)
                         ↓
            Desbloquear próximo nó        ◄─── Progressão (§5)
                         ↓
               Sair satisfeito            ◄─── Fecho de sessão (§3.4)
                         ↓
   Receber missão de revisão no futuro    ◄─── Agendador SRS (§6)
                         ↓
                    Retornar              ◄─── Streak compassivo (§8)
                         ↺
```

### 1.1 Os três loops aninhados

O diagrama acima opera em três escalas de tempo simultâneas — a progressão precisa recompensar nas três (VISION §13):

| Loop | Escala | Pergunta do usuário | Recompensa central |
|---|---|---|---|
| **Sessão** | 3-10 min | "Valeu a pena abrir o app agora?" | Conceito compreendido + feedback emocional imediato |
| **Hábito** | dias | "Por que volto amanhã?" | Missão de revisão que só existe amanhã + streak + Thoth |
| **Maestria** | semanas/meses | "Para onde tudo isso vai?" | Timeline acendendo, módulos completos, títulos, momentos compartilháveis |

### 1.2 Regra de ouro do documento

> Para cada sistema abaixo, a primeira linha declara **[Loop: passo que fortalece]**. Sistema sem passo declarado não entra no produto.

### 1.3 A emoção dominante (o "efeito Zelda")

Todo jogo memorável tem uma emoção dominante (Minecraft: descoberta; Dark Souls: superação; Finch: carinho; Pokémon: coleção). A nossa, em uma frase:

> **A emoção dominante é a descoberta — o arrepio do "agora faz sentido", quando algo distante no tempo de repente se conecta ao mundo do usuário.**

Hierarquia emocional (para resolver conflitos de design):

| Papel | Emoção | Onde vive |
|---|---|---|
| **Dominante** | **Descoberta** (de conexões, de causas, de "por que o mundo é assim") | Ganchos, conexões reveladas, fios entre eras no Corredor |
| Suporte 1 | Carinho | Thoth |
| Suporte 2 | Coleção/reconstrução | Timeline acendendo, eras completas |
| Suporte 3 | Continuidade | Streak, missões diárias |

**Regra de decisão:** quando duas opções de design empatarem, vence a que reforça descoberta. Se uma mecânica de suporte (coleção, streak) começar a competir com a descoberta pela atenção do usuário — por exemplo, o usuário completando nós pelo brilho, sem ler as conexões — a mecânica de suporte é atenuada. É a versão em jogo da regra da moldura (VISION §9.1).

### 1.4 Por que isso é divertido (definição explícita)

A diversão central do produto não é ganhar pontos — é **montar o mapa mental da humanidade, uma conexão inesperada por vez**. Os quatro mecanismos de diversão, em ordem de importância:

1. **Lacuna de curiosidade:** cada gancho abre uma pergunta que incomoda não saber ("por que os atenienses achavam eleição aristocrática?") — a diversão de precisar saber o final.
2. **O momento "aha":** a conexão revelada que reorganiza o que já se sabia ("a Constituição de 1988 ecoa uma assembleia de 2.500 anos atrás") — a recompensa intelectual mais forte que existe, e a que nenhum concorrente da Etapa 1 entrega.
3. **Reconstrução visível:** ver o Corredor do Tempo passar de escuro a aceso pelas próprias mãos — a satisfação de Minecraft/Civilization aplicada à memória do mundo.
4. **Crescer junto:** Thoth registrando a jornada da dupla — o carinho do Finch a serviço do conhecimento.

Se os testes mostrarem usuários engajados sem momentos "aha" (mecanismo 2), o produto está falhando na sua diversão central mesmo que as métricas de retenção estejam boas — e é isso que deve ser corrigido primeiro.

### 1.5 O núcleo irredutível (teste de remoção)

Pergunta obrigatória antes de congelar o MVP: **"o que acontece se removermos metade dos sistemas?"** Resposta registrada:

**Núcleo irredutível (4 sistemas — sem qualquer um deles, não há produto):**
1. Corredor do Tempo (o mundo)
2. Módulos/lições (o conteúdo — LDD)
3. Missões de revisão SRS (a memória)
4. Thoth (a emoção)

**Camada de suporte (tudo o mais no MVP):** XP, níveis, títulos, streak, cards compartilháveis, notificações. Cada sistema de suporte entra no piloto **instrumentado e sob suspeita**: se removê-lo não enfraquecer nenhum passo do loop nas métricas e nos testes qualitativos, ele sai — o produto ideal é o núcleo mais o mínimo de suporte que os dados justificarem. O piloto deve incluir pelo menos um experimento de ocultação (ex.: esconder XP de uma coorte, §5.0) antes do lançamento público.

---

## 2. A sessão ideal (3-10 minutos)

**[Loop: "Entrar no app" → "Sair satisfeito"]**

1. **Abertura (5s):** Thoth recebe o usuário; o Corredor do Tempo mostra onde ele parou. Zero menus antes de contexto.
2. **A missão do dia** já está montada (§3) — um toque para começar.
3. **1-2 lições** (LDD §3) e/ou uma missão de revisão (§6).
4. **Fecho de sessão (§3.4):** progressão visível + gancho do amanhã.

Sem paredes de escolha: o usuário *pode* explorar livremente o Corredor, mas o caminho de menor esforço é sempre "jogar a missão do dia". (Referência: a fricção de "muitos cliques entre vídeos" é reclamação documentada contra o Coursera na Etapa 1.)

## 3. Missões

**[Loop: "Receber uma missão"]**

Missão é a embalagem universal de qualquer atividade — aprender algo novo e revisar algo antigo chegam ao usuário com a mesma cara: um chamado do Arquivo.

### 3.1 Composição da missão diária (MVP)

| Slot | Conteúdo | Fonte |
|---|---|---|
| 1 | Próxima lição do módulo ativo | Progressão normal |
| 2 | Revisões pendentes do dia (se houver), vestidas de "memória se apagando" | Agendador SRS §6 |
| 3 (opcional) | "Explorar": lição de outro módulo disponível, ou aprofundamento (LDD §4, camada 2) | Escolha do usuário |

Completar o slot 1 **ou** o slot 2 conta para o streak — revisar vale tanto quanto aprender coisa nova (é aprendizado igual, pelo Princípio Fundamental).

### 3.2 Missões especiais

- **"Memória se apagando" urgente:** nó Dominado em regressão (LDD §6) gera missão destacada com XP em dobro (§10). É o único caso de "urgência" no produto — e é urgência de conhecimento, não de FOMO comercial.
- **Desafio da semana (V1)** e **eventos temáticos (V2)**: VISION §15 — reutilizam esta mesma estrutura de missão.

### 3.3 Agência: escolhas reais dentro do guia

**[Loop: "Receber uma missão" — transformar "receba → faça → fim" em "escolha → faça → quero mais"]**

O caminho é guiado, mas o jogador precisa sentir que dirige. Escolhas do MVP — nenhuma compromete o aprendizado, todas aumentam a sensação de autonomia:

- **Escolha de módulo:** desde o onboarding, 2-3 módulos da coleção de lançamento disponíveis — o usuário decide *qual pergunta quer responder primeiro* ("Como a República morreu e o Império nasceu?" vs. "Por que Roma nunca foi derrotada no auge?"). Trocar de módulo ativo é livre e sem punição.
- **Ordem da missão diária:** os slots (§3.1) podem ser feitos em qualquer ordem — revisar antes de aprender, ou o contrário.
- **Escolha dentro da revisão:** quando há várias memórias vacilando, o usuário escolhe qual resgatar primeiro (as demais esperam — o teto do §6.3 protege).
- **Decisões situadas nas lições** (LDD §7, tipo 7): "você vota?" — a agência *dentro* do conteúdo, a mais importante de todas.
- **Slot de exploração** (§3.1, slot 3): mergulhar na camada de aprofundamento (LDD §4) ou espiar outro módulo/coleção — curiosidade nunca fica bloqueada atrás da missão do dia.

Regra: guiar o próximo passo ≠ trancar os outros. O caminho recomendado é sempre um toque; os alternativos, sempre visíveis.

### 3.4 Fecho de sessão

**[Loop: "Sair satisfeito" + "Retornar"]**

Ao fim da última atividade: (1) resumo emocional — o que acendeu, o que Thoth ganhou, conexões reveladas; (2) **o gancho do amanhã**, sempre concreto: "Amanhã: por que Roma copiou os gregos — e o que ela se recusou a copiar." Nunca terminar numa tela morta; a última imagem é o motivo do retorno.

## 4. Corredor do Tempo (Timeline)

**[Loop: "Avançar na Timeline" + "Desbloquear próximo nó"]**

### 4.0 Hierarquia de navegação: Biblioteca → Coleção → Módulo → Salões → Lições

*(v2, pivô "Biblioteca de Alexandria" — VISION v6/LDD §1-2: a porta de entrada deixa de ser a Jornada e passa a ser a Coleção. A estrutura de níveis abaixo, criada na fase de refinamento anterior, se mantém quase intacta — só o nível do meio muda de nome e de regra. v3: nomenclatura "Assunto" trocada por "Coleção" — feedback do fundador de que "assunto" lembra artigo de blog, "coleção" já é o vocabulário que o próprio produto usa para memórias recuperadas.)*

**Conteúdo vs. forma de aprender** *(distinção do fundador, v3):* Coleção é **o quê** — "Império Romano" como conteúdo, independente de como é jogado. Módulo é **como** — a forma de construir entendimento daquele conteúdo. Essa separação é o que torna o produto uma plataforma: os mesmos módulos alimentam a Biblioteca, o Corredor e as Trilhas, sem que nenhuma experiência exija conteúdo escrito só para ela.

- **A Biblioteca é a home de quem retorna — e é minimalista.** A home mostra apenas: o título "O que você quer entender hoje?", os cards das duas **Bibliotecas do Arquivo** (📜 História, 🧠 Filosofia) com contagens honestas ("2 coleções abertas · N em escrita"), um divisor e o **⭐ Continue de onde parou** com barra de % da coleção. Quem chega olha para cima; quem retorna olha para baixo — as duas experiências convivem numa tela só. Tocar numa Biblioteca abre a **tela do domínio** com as Coleções.
- **Coleção é a porta de entrada — o que a pessoa já busca, não uma estante de curadoria.** "Império Romano", "Estoicismo", "Aristóteles": o nível do meio deixou de agrupar jornadas soltas por tema (estante) e virou o próprio destino — um substantivo pesquisável com módulos dentro. Cada card de Coleção mostra quantos módulos estão abertos, quantos em escrita, e a coleção de memórias recuperadas (abaixo) — o mesmo nome, dois sentidos que se reforçam: você entra numa coleção do Arquivo para reconstruir a sua coleção de memórias.
- **Dentro da Coleção, os Módulos são os grandes temas de compreensão — não uma lista cronológica.** Ex.: "Império Romano" abre em Nascimento do Império, Auge Romano, Estado Romano, Religião e Cultura, Crises, Queda do Ocidente, Império Bizantino (LDD §1-2). A ordem pode ser cronológica ou temática/transversal — o critério é o que ensina melhor, nunca a obrigação de uma única linha do tempo. Cada módulo aberto leva ao Corredor daquele módulo (abaixo); módulos ainda não escritos aparecem como mistério (próximo bullet).
- **Cards de módulo/coleção parecem livros, não itens de lista.** Lombada colorida, título em serifa, a pergunta central em itálico, e os números de uma aventura: 🚪 salões, 📖 lições, ⏱ tempo estimado, barra de progresso com "▶ continuar — 57%". O cérebro deve ler "isso é uma aventura", não "isso é uma página". Sem estrelas decorativas: todo símbolo no card corresponde a algo real (emblemas conquistados, progresso feito) — avaliação fake é anti-mecânica (§14).
- **Antecipação é mecânica de produto ("a biblioteca infinita") — e vende mistério, não lista conteúdo.** Módulos e coleções ainda não escritos aparecem como **"ainda escondidos nesta estante…"**: não títulos de aula, mas **ganchos narrativos** — a pergunta ou o acontecimento que faz o cérebro querer saber a resposta ("23 facadas: por que os amigos de César o mataram?", "O rei que jurou que seu poder vinha de Deus — e perdeu a cabeça"). Regra editorial: o gancho tem que ser **verdadeiro** — cada um corresponde a um evento/questão real que o módulo vai cobrir quando for escrito, nunca um clickbait vazio (EDITORIAL_POLICY, Princípio 7). A Biblioteca de Filosofia inteira é navegável como promessa — coleções e módulos visíveis, todos selados, cada um com seu próprio mistério ("E se tudo que você já viu for sombra na parede?"). Objetivo emocional: como Zelda mostra a montanha antes de deixar escalar — "há um mundo enorme esperando", e você já quer saber a resposta de um deles. Regra de honestidade numérica se mantém: "aberto" e "em escrita" nunca somam num único número (LDD §9.2, alerta de escopo).
- **Coleção de memórias: o Arquivo se reconstrói, não só "você progride".** Cada Coleção aberta mostra quantas **memórias** (afirmações de conteúdo) já foram recuperadas do total que ela guarda — "12 de 20 memórias recuperadas — 60%" — com barra de progresso. Não é XP nem nível: é a mesma métrica do "teste do print" (abaixo) expressa como coleção. A moldura narrativa importa: o usuário não está "completando lições", está **reconstruindo o Arquivo** — o que conversa diretamente com o universo (Grande Arquivo, memórias se apagando) em vez de com mecânica de app de estudo.
- **O Corredor mostra UM módulo por vez.** Ele continua sendo a recompensa espacial — o mural de arcadas, o fio de chamas, a próxima porta —, agora escopado ao módulo em curso em vez de à jornada inteira. Concluído o módulo, a porta do próximo módulo aparece dentro do próprio Corredor (o "só mais um pouco" não exige voltar à Biblioteca); concluído o último módulo, o Corredor entrega o momento de síntese da Coleção (LDD §2.1) seguido da celebração de **Coleção Completa** (§9.1) — o maior marco de conteúdo do produto.
- **Trilhas são um destino explícito, e preferencialmente uma recompensa de desbloqueio.** *(v2: formato cross-coleção que antes era "jornada" sobrevive, rotulado. v3, refinamento do fundador: uma trilha não deveria só existir numa prateleira — deveria ser algo que se *ganha*.)* Uma Trilha ("Como nasceu a Democracia": Atenas → Roma → Iluminismo → Constituição Americana → Constituição Brasileira) nunca aparece como se fosse uma Coleção comum — o caso preferencial é ela se revelar **dentro da celebração de Coleção Completa** ("🔓 Você desbloqueou uma Trilha"), montada com módulos que já existem, como um documentário editado com cenas já filmadas — nenhuma lição nova, só uma pergunta nova amarrando o que já foi aprendido. Secundariamente, também vive numa prateleira própria da Biblioteca ("Grandes Fios do Arquivo" ou nome a definir) e é descoberta via **Eco** dentro de um nó que ela atravessa. Tem seu próprio Corredor (mostrando só os nós da trilha, que já pertencem às suas coleções nativas) e sua própria síntese (LDD §2.2). Nunca compete com a Coleção pela primeira escolha do usuário.
- **O primeiro uso NUNCA começa na Biblioteca.** A primeira sessão continua guiada direto ao primeiro salão de um módulo (VISION §17-D1: sem parede de escolha). A Biblioteca só se revela quando existe algo a escolher — a partir do segundo dia. Corolário: a Biblioteca nunca mostra escolha vazia; domínios/coleções/módulos em escrita aparecem como promessa selada ("Sócrates espera por você"), não como opção quebrada.
- **Missões de resgate aparecem em qualquer nível.** A memória vacilando fura a hierarquia: o card de resgate aparece na Biblioteca e no Corredor, porque o SRS não pertence a um módulo — pertence ao Guardião.

- **Estrutura do Corredor:** nós de um módulo em sequência (cronológica ou temática — LDD §1); as civilizações paralelas (China, Américas, África — LDD §8) aparecem como trilhos paralelos, não como apêndice.
- **Estados visuais do nó** = estados do LDD §6: apagado (bloqueado) → tênue (disponível) → **aceso** (Compreendido) → **chama firme** (Dominado) → **constelação** (Mestre). Nó em regressão: a chama visivelmente vacila — sem texto de culpa, o visual conta a história.
- **Desbloqueio é por módulo, não estritamente linear:** concluir um nó de um módulo libera o próximo nó *daquele módulo*. Saltos entre séculos/civilizações distantes deixam de ser trabalho do módulo (que vive dentro de uma só coleção) e passam a ser trabalho da **Trilha** (acima) — é ela quem mostra o fio de conexão atravessando coleções, a visualização literal do conhecimento conectado.
- **MVP:** apenas os módulos da coleção de lançamento existem visualmente; os demais módulos da mesma coleção, e as demais coleções, aparecem como "salas ainda seladas" no horizonte — promessa visível de futuro sem custo de conteúdo (LDD §9.2, alerta de escopo: lançar com 2-3 módulos de UMA coleção, não uma coleção "completa").
- **O mundo registra o progresso ("o teste do print").** O Corredor não *exibe* progresso — ele o *sofre*: o trilho entre salões acesos vira um fio de chama contínuo; cada salão concluído ergue seu **emblema** (campo de conteúdo do nó: 🏛️ Atenas, 🦅 Roma, 📖 Renascimento…) numa arcada iluminada do mural; a próxima porta aparece como escuridão com uma fresta de luz pulsando; módulos futuros são vultos quase invisíveis. **Critério de aceitação permanente:** um print do Corredor no primeiro dia e outro após dois módulos devem parecer *lugares diferentes*. Barras e números são registro; o mundo transformado é a recompensa — o usuário olha para trás e enxerga o caminho que construiu.

## 5. XP, níveis e títulos

**[Loop: "Receber feedback" + "Desbloquear próximo nó" (escala de maestria)]**

### 5.0 XP é registro, não pilar (hipótese sob teste)

A progressão *real* do usuário é **Timeline → Conhecimento → Thoth → Jornadas** — coisas que ele vê e sente. XP é a contabilidade por trás disso: útil como moeda comum entre sistemas (ligas futuras, calibração), mas **o loop precisa sobreviver sem ele**. Hipótese registrada para o piloto: uma coorte com XP oculto (só celebração, timeline e Thoth como feedback). Se a retenção e a satisfação não caírem, o XP vira métrica interna e sai da interface. O mesmo vale para níveis. Nada nesta seção é pilar; é instrumentação com roupa de jogo.

### 5.1 Fontes de XP (hipóteses iniciais)

| Evento | XP | Justificativa |
|---|---|---|
| Interação correta (1ª tentativa) | 10 | Compreensão demonstrada |
| Interação correta após caminho do erro | 5 | Compreensão recuperada — vale, e vale menos que domínio imediato; **errar nunca zera nem desconta** |
| Lição concluída | +20 | Fecho da unidade mínima |
| Nó → Compreendido | +50 | Marco da timeline |
| Nó → Dominado | +100 | Marco da North Star |
| Nó → Mestre | +150 | Conexões entre eras |
| Revisão em missão "memória se apagando" | ×2 sobre a interação | Resgatar memória em risco é o comportamento mais valioso do produto |

**O que deliberadamente NÃO dá XP:** abrir o app, assistir/ler sem interagir, manter streak, compartilhar cards. XP é medida de compreensão, não de presença (VISION §2). Streak e compartilhamento têm recompensas próprias (celebração, cosméticos §11) — nunca XP.

### 5.2 Níveis

Curva de custo crescente: XP para o nível *n* ≈ `100 × n^1.5` (nível 2: ~283; nível 5: ~1.118; nível 10: ~3.162; nível 20: ~8.944 XP acumulados). Hipótese a calibrar no piloto com a meta: usuário engajado (1 sessão/dia) sobe de nível ~2×/semana no início, desacelerando suavemente.

### 5.3 Títulos do Arquivo (hipótese, não certeza)

> **Alerta registrado:** títulos são uma camada gamificada clássica — e é possível que nos testes ninguém ligue para "virei Cronista" e todo mundo ligue para **"terminei Roma"**. Se for isso que os dados mostrarem, os títulos são substituídos por marcos de conteúdo real como identidade pública do progresso (módulo concluído, coleção completa), e a hierarquia do Arquivo vira detalhe cosmético ou sai. Tratar esta subseção inteira como hipótese de piloto, no mesmo regime do XP (§5.0).

**Se existirem, títulos não são compráveis com XP** — cada um tem um portão de compreensão (Princípio Fundamental aplicado à progressão):

| Título | Requisito (hipótese) |
|---|---|
| Curioso | Início |
| Aprendiz | Nível 3 + 1 nó Dominado |
| Escriba | Nível 6 + 5 nós Dominados |
| Cronista | Nível 10 + 1 módulo completo + 12 nós Dominados |
| Historiador | Nível 16 + 3 módulos + 30 nós Dominados |
| Sábio | Nível 25 + 60 nós Dominados + 10 nós Mestre |
| Guardião da Memória | Nível 40 + domínio de eras inteiras + 30 nós Mestre |

Sem nós dominados, não há título — impossível "grindar" título com presença.

## 6. Agendador de repetição espaçada (SRS)

**[Loop: "Receber missão de revisão no futuro" — o passo que transforma sessões em memória]**

### 6.1 O que é agendado

**Afirmações (claims), não lições** (LDD §1). Cada afirmação de um nó Compreendido entra no agendador individualmente — é o que permite à "memória se apagando" ser cirúrgica ("você está esquecendo *o sorteio de cargos*", não "revise Grécia inteira").

### 6.2 Ciclo de vida de uma afirmação (parâmetros iniciais, inspirados em FSRS simplificado)

```
Compreendida (na lição)
   → revisão 1 em ~3 dias   ─ acerto → revisão 2 em ~14 dias ─ acerto → DOMINADA
                             ─ erro   → reapresenta amanhã (com caminho do erro)
Dominada (manutenção)
   → ~45 dias → ~120 dias → ... (intervalo cresce a cada acerto)
   → erro em manutenção → volta a ~7 dias
   → 2 erros consecutivos → afirmação EM RISCO
Nó com ≥30% das afirmações em risco → nó em REGRESSÃO (silenciosa)
   → dispara missão "memória se apagando" (XP ×2)
   → resgate completo → nó volta a Dominado, intervalo recalculado
```

Um nó é **Dominado** quando ≥80% de suas afirmações estão Dominadas (operacionaliza LDD §6 e a North Star).

### 6.3 Regras de humanidade do agendador

- **Teto diário de revisão: ~15 afirmações.** Excedente é priorizado por risco e adiado — o produto jamais recebe o usuário com uma pilha de 200 revisões (o colapso clássico do Anki, documentado na Etapa 1). O algoritmo absorve o atraso; o usuário nunca vê dívida.
- **Invisibilidade total:** nenhum intervalo, porcentagem de retenção ou nome de algoritmo aparece na interface. O usuário vê apenas missões e chamas vacilando.
- **Pausas longas são bem-vindas de volta:** após ausência de semanas, a primeira sessão é uma missão de resgate curta e generosa (as 10 memórias mais em risco), não um muro de revisões — reencontro, não cobrança.

### 6.4 Loop de dificuldade: Descoberta → Aplicação → Transferência → Domínio

**[Loop: "Responder desafios" — como o desafio cresce sem virar repetição]**

Cada conceito sobe uma escada de exigência cognitiva ao longo da vida dele no produto, usando a taxonomia do LDD §7:

| Degrau | Quando | Tipos de interação (LDD §7) | O que prova |
|---|---|---|---|
| **Descoberta** | Gancho da lição | Decisão situada (7), antes de qualquer explicação | Engajou com o problema |
| **Aplicação** | Dentro da lição | Causal (1), ordenação causal (4), interpretação de fonte (6) | Entendeu o que acabou de ver |
| **Transferência** | Revisões SRS | Contrafactual (2), aplicação/analogia (3) — **sempre em formato diferente do usado na lição original** | Entendeu de verdade, não decorou a pergunta |
| **Domínio** | Nível Mestre | Conexão entre nós/eras (5) | Integrou ao mapa mental |

Duas regras anti-repetição:

1. **Revisão nunca repete a pergunta da lição.** Se o usuário viu "por que o sorteio era democrático?" na lição, a revisão pergunta "e se Atenas tivesse adotado eleições — o que mudaria?". Reencontrar a mesma pergunta mede memória da *pergunta*; formato novo mede memória do *conceito*. (É também o que torna o SRS divertido em vez de burocrático — cada revisão contém uma pequena descoberta, alimentando a emoção dominante do §1.3.)
2. **Variedade de formato dentro da sessão:** duas interações consecutivas nunca usam o mesmo tipo — o ritmo da sessão alterna decidir/explicar/ordenar/conectar.

A dificuldade *percebida* é gerenciada pela banda de acerto 60-85% (LDD §9.3); a dificuldade *estrutural* é esta escada. As duas coisas são medidas separadamente no piloto.

## 7. Companheiro (Thoth)

**[Loop: "Ver Thoth evoluir" — o eixo emocional do loop inteiro]**

### 7.1 Evolução (3 estágios no MVP)

Gatilhos são **marcos de compreensão**, nunca XP bruto:

| Estágio | Gatilho (hipótese) | Mudança visível |
|---|---|---|
| 1. Aprendiz de tinta | Início | Pequeno, pena simples, pergaminho em branco |
| 2. Escriba iniciado | 1º módulo completo | Cresce; pena ornamentada; 1º selo de cera no pergaminho |
| 3. Escriba do Arquivo | 10 nós Dominados + 2º módulo | Vestes; o pergaminho dele exibe as eras que *vocês* dominaram |

Regra narrativa: **Thoth aprende com o usuário** — o pergaminho dele é o diário da dupla. Cada era dominada adiciona um desenho ao pergaminho; itens de época (toga romana etc.) vêm de marcos específicos. É "aprendemos juntos", não "alimente o bichinho".

### 7.2 Estados emocionais

- **Thoth fala só quando tem algo a dizer.** *(Refinado na 3ª rodada de feedback: "se ele fala toda vez, vira banner; se aparece poucas vezes, vira evento".)* Fora de um evento real — memória vacilando, ala nova desbloqueada, módulo concluído, evolução, aniversário — Thoth fica **presente, mas calado**: um ícone fixo no cabeçalho, sempre tocável para abrir o pergaminho, sem bolha de fala. A Biblioteca e o Corredor em estado estável (nada pendente, sem marco novo) não têm mensagem nenhuma dele. Isso protege o valor de quando ele *de fato* fala.
- **Celebrando** (marco recente), **concentrado** (durante lições), **solene** (nós de tragédia — LDD §8: sem confete em genocídio), **saudade** (ausência de 3+ dias).
- **Saudade sem culpa** — a diferença para o Duo é de tom, e é inegociável: *"Thoth guardou uma memória para mostrar a você"* (presente que espera), nunca *"Thoth está triste porque você o abandonou"* (dívida emocional). Notificações seguem a mesma regra (§12).
- **Aniversário** (data de início da dupla) — pequeno ritual anual, precursor da Retrospectiva (VISION §14.2).

## 8. Streak compassivo

**[Loop: "Retornar"]**

- **O que conta:** completar qualquer lição **ou** missão de revisão (≥1 slot da missão diária). ~3 minutos honestos, sem exigir "meta de XP".
- **Proteção automática:** a cada 7 dias de streak, o usuário **ganha** 1 "Selo do Tempo" (máx. 2 guardados) — consumido sozinho ao faltar um dia. Ganho, não comprado: proteção é recompensa de consistência, nunca produto (diferença deliberada frente ao Duolingo, onde streak freeze é mercadoria).
- **Reacender:** streak quebrado pode ser restaurado completando uma missão dupla nas 48h seguintes — o retorno é sempre mais celebrado que a falha é lamentada.
- **Marcos de streak** (7, 30, 100, 365): celebração + cosmético para Thoth. **Nunca XP** (§5.1).

## 9. Feedback e celebração

**[Loop: "Receber feedback" — o passo que transforma progresso em emoção]**

Ordem fixa da celebração de marco (VISION §14.1 — "nenhum marco é comunicado apenas por número"):

1. O nó **acende** no Corredor (animação própria).
2. **Thoth reage** (e ganha o que tiver que ganhar).
3. **Conexões reveladas:** "Agora você entende melhor: ✔ ..."
4. **Card compartilhável** oferecido (só nos marcos que têm card — §11).
5. **XP por último** — o número é o registro; a emoção é a recompensa.

Calibração de tom por conteúdo (LDD §8): nós de tragédia fecham com solenidade — mesma progressão mecânica, celebração substituída por reflexão.

**Feedback de erro:** imediato, caloroso, e abre o caminho do erro (LDD §3). Sem som "de errado" humilhante, sem vermelho agressivo, sem contador de vidas — erro é o melhor momento da lição, e a interface precisa acreditar nisso.

### 9.1 Coleção Completa (o maior marco de conteúdo do produto)

**[Loop: "Receber feedback" + "Desbloquear próximo nó", na escala de maestria — VISION §13]**

*(Adicionado v3, crítica do fundador: "hoje vocês pensam muito na organização, pouco na recompensa — o jogador terminou 'Império Romano', ele ganha o quê?" A celebração de módulo (§9 acima) já existe; faltava a celebração de terminar uma coleção inteira — o momento em que o usuário deveria pensar "caramba, eu realmente terminei Roma".)*

Terminar o último módulo escrito de uma coleção dispara uma celebração **maior e mais rara** que a de módulo — no mesmo espírito da ordem fixa do §9, mas com mais eixos simultâneos (VISION §13, regra 1: marco relevante visível em ≥3 eixos):

1. **A coleção inteira acende no mural** — todos os módulos, todos os salões, o Corredor mostrando o "antes/depois" completo daquela coleção.
2. **Selo de conquista:** "🏛️ Império Romano — compreendido", com um emblema próprio da coleção (distinto dos emblemas de cada nó) — o primeiro artefato que existe *sobre* uma coleção, não sobre um nó.
3. **Reenquadramento do Guardião:** a síntese do LDD §2.1 já cobre o "agora tudo faz sentido"; aqui ela ganha moldura de conquista, não só de compreensão.
4. **Mapa de conexões:** uma visão simples (não precisa ser um grafo completo no MVP — uma lista basta) de onde esta coleção ecoa em outras: "Roma influencia → Iluminismo, Revoluções Atlânticas, Constituição Brasileira". Reaproveita as Conexões já mapeadas (LDD §2, passo 6) — não é conteúdo novo, é exibição do que já existe.
5. **Trilha desbloqueada (quando existir uma configurada para esta coleção):** "🔓 Você desbloqueou uma Trilha — Como nasceu a Democracia", com um convite a começar imediatamente ou depois (GDD §4.0). Nem toda coleção libera uma trilha ao terminar — só quando o plano editorial tiver uma trilha que a usa como gatilho natural.
6. **Card compartilhável** (o mesmo tipo do §11, mas na versão "coleção", não "módulo").
7. **XP por último**, como sempre (§5.0 — registro, não pilar).

Se, nos testes, os usuários não notarem diferença entre terminar um módulo e terminar uma coleção inteira, esta celebração falhou no objetivo — o sinal a observar é qualitativo ("senti que realmente terminei Roma?"), não só taxa de conclusão.

## 10. Economia

**[Loop: nenhum — e é exatamente por isso que o MVP não tem moeda.]**

Decisão deliberada: **o MVP não tem moeda gastável.** Toda tentativa de moeda passou pelo filtro da VISION §2.1 e falhou — loja de power-ups não melhora compreensão, curiosidade nem memória; e power-up de aprendizado (ex.: "pular revisão") seria *contra* o produto.

- **MVP:** XP (medida), Selos do Tempo (proteção de streak, ganhos), colecionáveis de marco (não gastáveis).
- **V1, se os dados pedirem:** cosméticos para Thoth/museu destravados por conquistas (nunca por grind de presença); a assinatura premium pode incluir cosméticos raros (VISION §18).
- **Nunca:** moeda que compre progresso, atalho de domínio ou proteção além dos Selos ganhos.

## 11. Momentos compartilháveis (MVP: 2)

**[Loop: "Sair satisfeito" + aquisição orgânica]**

Especificação dos dois cards do MVP (VISION §14.2):

1. **Conclusão de era:** trecho do Corredor totalmente aceso + nome da era + estatística-síntese ("47 memórias dominadas") + marca. Legível em 3 segundos por quem nunca viu o app.
2. **Evolução de Thoth:** o novo estágio + o pergaminho-diário com as eras da dupla.

Geração automática no momento da celebração (passo 4 do §9), compartilhamento em 1 toque, nunca obrigatório. Taxa de compartilhamento é métrica de marca (VISION §20).

## 12. Notificações

**[Loop: "Retornar" — a extensão do fecho de sessão para fora do app]**

- **Máximo 1/dia** no MVP; o conteúdo é sempre **conhecimento ou missão concreta**, nunca cobrança: *"A memória de Roma está vacilando — 3 minutos a resgatam"*, *"Hoje em 1789: a Bastilha caiu. Thoth separou essa história"* (o gatilho de efeméride validado na Etapa 1 como feature, não produto).
- **Proibido:** culpa ("você vai perder seu streak!!"), pressão em série, notificação comercial vestida de missão.
- O gancho do amanhã (§3.4) e a notificação do dia seguinte são o mesmo conteúdo — o fecho de sessão planta o que a notificação colhe.

## 13. Sistemas de fases futuras (resumo de intenção)

Especificação completa quando a fase chegar (VISION §16.2); intenções registradas para não redesenhar do zero:

- **V1 — Salão do Guardião (museu):** cada era dominada ergue um artefato; visitável e compartilhável. **Atlas Vivo:** regiões pintadas por domínio geográfico do conteúdo. **Desafio da semana:** missão comum global assíncrona. **Ranking semanal simples:** por XP semanal, opt-in.
- **V2 — Ordens (ligas):** grupos de ~30, subida/descida semanal, nomeadas como ordens do Arquivo (estrutura validada por Duolingo/Brilliant/Elevate na Etapa 1); entrada opt-in, invisível até o usuário estar em ritmo (VISION §16.2, revelação progressiva). **Eventos temáticos** e **Retrospectiva anual**.
- **V3+ — Quiz mundial síncrono; personagens de IA persistentes** (VISION §22).

## 14. O que este GDD recusa (anti-mecânicas)

Contrato negativo permanente, derivado das falhas documentadas na Etapa 1:

- ❌ Vidas/corações/energia limitando tentativas (fricção mais odiada do Duolingo).
- ❌ Streak punitivo ou culpabilizador (Habitica/Duo) — só o modelo compassivo do §8.
- ❌ Moeda de progresso / pay-to-win em qualquer forma.
- ❌ XP por presença sem compreensão (VISION §2).
- ❌ Anúncios dentro do loop de aprendizado (HISTORY Channel/Nibble).
- ❌ Dark patterns de assinatura (trial confuso do Paladin, cobranças criticadas de Brilliant/Lumosity).
- ❌ Pilha de revisões visível como dívida (colapso do Anki).
- ❌ Celebração festiva em conteúdo trágico (LDD §8).

---

## Apêndice A — Painel de calibração do piloto

Valores a instrumentar e revisar após o piloto (todos os números deste documento):

| Parâmetro | Valor inicial | Sinal de recalibração |
|---|---|---|
| XP por interação / curva de nível | 10 / `100×n^1.5` | Ritmo de subida ≠ ~2 níveis/semana no 1º mês |
| Intervalos SRS | 3d → 14d → 45d → 120d | Taxa de acerto em revisão fora de 80-90% |
| Limiar de Dominado | 80% das afirmações | North Star inflada ou inatingível |
| Teto diário de revisões | 15 afirmações | Abandono correlacionado a dias de revisão pesada |
| Gatilhos de estágio do Thoth | 1º módulo / 10 nós + 2º módulo | % de usuários que veem o estágio 2 antes do D30 (meta: maioria dos retidos) |
| Selos do Tempo | 1 a cada 7 dias, máx. 2 | Quebras de streak seguidas de churn |
| Banda de dificuldade por interação | 60-85% acerto (LDD §9.3) | Interações fora da banda |
