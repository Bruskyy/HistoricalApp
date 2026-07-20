# Learning Design Document (LDD)

> **Por que este documento existe e vem antes do GDD:** o diferencial do produto não é a gamificação — é **como o conteúdo é ensinado**. A gamificação (GDD) recompensa progressão; este documento define o que *é* progressão: como nasce uma coleção, como uma lição é estruturada, o que significa "aprendido" e como se avalia compreensão em vez de memorização. Todas as fórmulas do GDD (XP, evolução do companheiro, North Star) referenciam as definições daqui.
>
> Documento subordinado ao [`VISION.md`](VISION.md) — em especial ao Princípio Fundamental (*recompensar compreensão, nunca apenas tempo; errar ensina, nunca custa*) e aos princípios pedagógicos da seção 11 — e à [`EDITORIAL_POLICY.md`](EDITORIAL_POLICY.md), da qual este documento é a implementação operacional (cadeia: VISION > EDITORIAL_POLICY > LDD > GDD > PRD).
>
> **v2 (pivô "Biblioteca de Alexandria", VISION v6):** o modelo de conteúdo ganha dois níveis — **Coleção** (porta de entrada e busca — o *conteúdo*) e um nível intermediário (grande tema de compreensão dentro da coleção — a *forma de aprender*) — entre Domínio e Nó. A antiga Jornada cross-era deixa de ser a unidade de topo e vira **Trilha**: um formato secundário e explícito para quando a pergunta central só existe *entre* coleções (§2.2).
>
> **v4 (crítica do fundador ao ritmo e à forma do conteúdo):** o nível intermediário, chamado "Módulo" na v2/v3, é renomeado **Jornada** — reaproveitando o nome antigo, mas não o sentido antigo. Motivo: "Módulo" lia como capítulo de livro/curso ("Nascimento do Império", "Estado Romano"); o produto precisa de unidades que o cérebro reconheça como **uma aventura com começo, clímax e fim** — 15-30 minutos, título em forma de pergunta ("Como Roma deixou de ser uma República?"), não substantivo de sumário. **A Trilha não muda de nome nem de papel** — continua o formato secundário cross-coleção; a única mudança é que a unidade primária dentro da coleção agora se chama Jornada, não Módulo. Esta versão também formaliza a estratégia de **vertical slice**: antes de padronizar o formato para todas as coleções, uma única coleção (Império Romano) é redesenhada em um arco fechado de ~5 jornadas, testada com usuários reais, e só então generalizada (§2.3).
>
> **v5 (reorganização sem conteúdo novo):** os títulos-pergunta da v4 não bastam sozinhos — duas jornadas com títulos diferentes ainda podiam responder, no fundo, à mesma pergunta ("como Roma funcionava"). A coleção-piloto (Império Romano) foi reorganizada — reagrupando nós já escritos entre as jornadas existentes, sem escrever nó novo — para que cada jornada tenha um eixo temático inconfundível: jornada 2 vira o arco de **poder** (a paz de Augusto *e* a sucessão que ele nunca resolveu — mesmo eixo político, reforçado pelo clímax de 69 d.C.), jornada 3 vira o arco da **máquina administrativa** (estradas, direito, governadores, tributos — um registro deliberadamente diferente do da jornada anterior). Esta versão também torna explícito um gate permanente: **nenhuma jornada nova é escrita sem um playtest validando a coleção atual primeiro** (§2.3) — o teste da coleção-piloto reorganizada vem antes das jornadas 4 e 5 (queda, legado), não depois.
>
> **v6 (diretriz editorial do fundador — clareza narrativa antes de densidade):** o risco deixou de ser "falta de conteúdo" e passou a ser **qualidade da experiência**. O objetivo do Mneme não é maximizar fatos transmitidos — é construir **mapas mentais duradouros**: ao final de uma jornada, o usuário deve conseguir explicar a outra pessoa o quê aconteceu, por que aconteceu e como levou ao próximo acontecimento (especialização, ao nível da jornada, do Princípio Fundamental da VISION §2 — "recompensar compreensão, nunca apenas tempo"). Três regras novas, permanentes: (1) **uma jornada carrega uma única grande ideia**, resumível numa frase — se a frase não existe com clareza, a jornada não está pronta (§2, passo 2); (2) toda transição entre dois acontecimentos importantes precisa responder "existe uma frase que faça o segundo parecer inevitável depois do primeiro?" — clareza narrativa antes de densidade de informação, nunca em troca de profundidade (§2, passo 3); (3) o gate do §2.3 ganha critério numérico — uma coleção só libera a próxima jornada (ou a próxima coleção) ao atingir média ≥8/10, **em cada um** de 5 critérios de playtest (não só na média geral), com o roteiro operacional em [`PLAYTEST_E0.2.md`](PLAYTEST_E0.2.md). Enquanto isso não acontece, o trabalho não é escrever mais — é melhorar o que já existe.
>
> **v7 (Regra do Momento de Clareza — diretriz do fundador):** não basta a jornada deixar uma única grande ideia (v6) — ela precisa deixar essa ideia como uma **revisão de crença**, sentida como tal: o usuário percebe que a explicação com que chegou era incompleta ou simplista, e a substitui por uma melhor. A jornada muda **como** ele pensa, não só **quanto** ele sabe. Esta regra formaliza e passa a governar o que §2.1 já fazia de forma mais frouxa ("mudança de olhar explícita") — agora é um requisito de design decidido **antes** de escrever, não só uma síntese redigida no fim depois que o conteúdo já existe. Ver §2.1 para as três perguntas obrigatórias e o checklist em §10. Também muda o que o playtest observa: além dos 5 critérios numéricos do §2.3, passa a registrar o primeiro momento de "agora entendi" — frase, expressão facial, pausa ou conexão espontânea do próprio usuário (roteiro atualizado em [`PLAYTEST_E0.2.md`](PLAYTEST_E0.2.md)). **Prioridade vigente:** o maior desafio do Mneme deixou de ser escrever mais História — é descobrir uma fórmula editorial que produza esse momento com consistência, em qualquer coleção. Até essa fórmula estar validada, o trabalho é melhorar obsessivamente as 3 jornadas atuais, não expandir o catálogo (§2.3). Sobre o vazio identificado entre o título da Jornada 1 e o conteúdo do nó `republica-romana` (achado registrado em [`PLAYTEST_E0.2.md`](PLAYTEST_E0.2.md)): decisão explícita do fundador de **não corrigir antes do playtest** — só adicionar o nó que faltaria se o vazio for espontaneamente sentido por várias pessoas; se ninguém notar, o vazio não vira trabalho. O playtest guia a evolução do produto, não a suposição de quem escreveu.

---

## 1. Modelo de conteúdo (domínio-agnóstico)

Hierarquia única para todos os domínios presentes e futuros (História é a primeira instância):

```
Domínio              (História; Filosofia — VISION §5)
 └─ Coleção          (porta de entrada e busca: "Império Romano",
    │                 "Estoicismo", "Aristóteles" — LDD §2)
     └─ Jornada      (uma pergunta com começo, clímax e fim, dentro
        │             da coleção: "Como Roma deixou de ser uma
        │             República?" — 15-30 min, arco fechado)
         └─ Nó       (unidade de domínio, curada: só os
             │        acontecimentos indispensáveis à jornada)
             └─ Lição       (sessão de ~3 min; um nó tem 2-5 lições)
                 └─ Interação  (pergunta, decisão, ordenação...)
             └─ Afirmações   (claims atômicos do nó, com nível de
                              consenso e fontes — alimentam o SRS)

 └─ Trilha           (formato secundário: arco que atravessa vários
                       coleções — "De Atenas a 1988" — LDD §2.2)
```

Definições que o resto da documentação usa:

- **Coleção** é a unidade de descoberta e busca — o que uma pessoa real digitaria ("Império Romano"), não uma pergunta. É o nível que aparece na Biblioteca como porta de entrada padrão (GDD §4.0) — o **conteúdo** em si. Uma coleção nasce de um substantivo relevante da História/Filosofia com massa crítica de conteúdo próprio — nunca de um recorte artificialmente estreito só para preencher a estante. Uma coleção **não é infinita**: tem um arco fechado e visível de poucas jornadas (§2.3) — o usuário precisa enxergar a linha de chegada desde o primeiro dia.
- **Jornada** *(v4 — antes "Módulo")* é o arco narrativo dentro de uma coleção — uma pergunta que se resolve em 15-30 minutos, com começo, clímax e fim, escopada a uma única coleção. É a **forma de aprender** aquele conteúdo. Nasce de uma pergunta, nunca de um tema (a regra permanente desta seção): "Como Roma deixou de ser uma República?" é uma jornada; "Nascimento do Império" — um título de capítulo, sem pergunta — não é. O título **é** a pergunta, ou a expressa diretamente; não é um rótulo de sumário que a pergunta apenas acompanha. A ordem das jornadas de uma coleção pode ser cronológica ou temática/transversal — as duas formas convivem, mas a coleção inteira funciona melhor como uma sequência com progressão sentida (nascimento → auge → queda → legado), não como categorias soltas.
- **Nó** é a unidade de progresso da timeline e da North Star Metric, curada dentro de uma jornada (critério de corte inalterado: §2). Um nó "acende" no Corredor do Tempo quando é **Compreendido** e conta para a North Star quando é **Dominado** (seção 6).
- **Trilha** é o formato secundário para quando uma pergunta central só existe *atravessando* coleções ("De onde veio a ideia de que o povo pode governar?" cruza Grécia Antiga, Império Romano, Iluminismo, Revoluções, Brasil). Reaproveita jornadas e nós que já existem dentro de suas coleções nativas — não duplica conteúdo; é montagem editorial, não escrita nova. Frequentemente aparece como **recompensa de descoberta** ao concluir uma coleção (GDD §4.0/§9.1). Detalhada em §2.2. *(Nota histórica: antes do pivô v6, era a Trilha — então chamada só de "Jornada" — quem ocupava o papel de unidade primária; o pivô a rebaixou a formato secundário, e a v4 devolve o nome "Jornada" para a nova unidade primária dentro da coleção. Os dois papéis não se confundem: Jornada vive dentro de uma coleção; Trilha atravessa várias.)*
- **Afirmação (claim)** é a menor unidade de conhecimento verificável ("Atenas instituiu o sorteio de cargos públicos", "o consenso sobre a data X é ~72%"). Cada afirmação carrega: texto, nível de consenso, fontes, e as variantes de pergunta que a avaliam. **O SRS agenda afirmações, não lições** — é isso que permite a "memória de Roma se apagando" ser cirúrgica.
- **Conexão** é um vínculo tipado entre nós (causa → consequência, influência, analogia), inclusive entre coleções distantes (Grécia → Constituição Brasileira) — a camada leve e sempre presente (aparece como "Eco" na lição, LDD §3). Uma Trilha é uma sequência *guiada e com síntese própria* de conexões que juntas contam uma história; uma conexão solta é só um lembrete de que o mapa é uma rede (seção 6).

## 2. Como nasce uma Coleção (pipeline editorial)

Toda coleção passa por este funil, nesta ordem:

1. **A coleção nasce de um substantivo, não de uma pergunta.** *(v2 — a inversão deliberada do pivô "Biblioteca de Alexandria".)* "Império Romano", "Estoicismo", "Aristóteles" — o que uma pessoa real digitaria ou buscaria, não uma pergunta lapidada. Critério de aprovação: precisa ter massa crítica de conteúdo próprio para render pelo menos 2-3 jornadas reais — uma coleção criada só para caber um nó solto é escopo artificial (viola VISION §2.1).
2. **Curadoria de jornadas — e a coleção precisa de um arco fechado, não de uma lista aberta.** *(v4, reforçado pela crítica do fundador.)* Definir as **perguntas** que, juntas, respondem "por que esta coleção importa e como ela funciona" — nunca "grandes temas" em forma de substantivo. Compare: "Nascimento do Império" é um título de sumário; "Como Roma deixou de ser uma República?" é uma jornada. Cada jornada **nasce de uma pergunta** que uma pessoa real faria — a regra permanente desta seção não muda, só o nome do nível muda. Se a pergunta não desperta curiosidade em alguém da persona Marina, a jornada não é aprovada. **A coleção inteira mira um arco fechado de ~5 jornadas** (nascimento → auge/expansão → como funcionava → queda/crise → legado, ou equivalente do domínio) — visível como número finito desde o primeiro dia, nunca como lista que só cresce. Ver §2.3 para a estratégia de lançamento (vertical slice numa única coleção antes de generalizar).
   > **Alerta permanente (v3, o fundador nomeou o risco central do pivô):** uma jornada que perde sua pergunta vira uma sequência de fatos — o app deixa de ser o Mneme e vira "uma Wikipédia bonita". A pergunta central não é enfeite de abertura: é o filtro que decide quais nós entram (passo 4), o título que aparece na Biblioteca (GDD §4.0) e o que a síntese precisa resolver (§2.1).
   > **Ideia registrada para o futuro (v3, fundador — não implementar agora):** dentro de uma coleção grande, as jornadas podem ter dois níveis — um núcleo essencial que qualquer usuário percorre, e uma camada "explorar mais" para quem quer se aprofundar num assunto específico. É uma curadoria de **jornadas**, distinta da camada de aprofundamento por **nó** que já existe (§4 abaixo) — as duas podem conviver quando a fase de conteúdo justificar o volume extra (VISION §2.1: só entra quando prova servir ao aprendizado).
   > **Uma jornada, uma grande ideia (v6, diretriz do fundador).** Não basta a jornada nascer de uma pergunta — ela precisa deixar **uma única resposta**, não cinco ideias soltas. Teste obrigatório: a jornada inteira cabe numa frase? "Roma deixou de ser uma República porque as instituições deixaram de conseguir controlar o poder militar" (jornada 1); "A Pax Romana existiu porque Augusto criou um equilíbrio político eficiente, mas esse equilíbrio nunca resolveu a sucessão imperial" (jornada 2); "Roma governava um continente porque construiu uma máquina administrativa extremamente eficiente" (jornada 3). Se essa frase não existe com clareza — se o editor hesita entre duas respostas possíveis —, a jornada ainda não está pronta, por mais correta que cada afirmação individual seja. Esta frase é o alvo que a síntese (§2.1) precisa provar que o usuário alcançou; ela alimenta diretamente a Etapa 6 do roteiro de playtest ([`PLAYTEST_E0.2.md`](PLAYTEST_E0.2.md)): "se eu apagar todo o texto da jornada e deixar só a ideia principal, qual ideia você acredita que ela queria transmitir?"
3. **Arco narrativo por jornada.** A resposta de cada jornada é estruturada como história com forma dramática: contexto → tensão → virada → consequências → legado no presente. É o que separa "jornada" de "capítulo de enciclopédia" — e o que dá a ela um clímax e um fim sentidos, não apenas um ponto final.
   > **Clareza narrativa antes de densidade de informação (v6, diretriz do fundador).** O conteúdo pode estar factualmente correto e ainda assim exigir do usuário um conhecimento prévio que ele não tem — porque a transição entre dois acontecimentos ficou implícita, óbvia só para quem já sabia a história. Teste obrigatório para cada dois acontecimentos importantes em sequência: **existe uma frase de transição que faça o segundo parecer inevitável depois do primeiro** — não apenas "depois disso, aconteceu Y", mas o porquê que liga os dois? Isso não é sobre reduzir profundidade; é sobre aumentar fluidez. O objetivo não é caber o máximo de fatos — é que o usuário termine capaz de explicar a outra pessoa o quê aconteceu, por que aconteceu, e como aquilo levou ao próximo acontecimento (especialização, no nível da jornada, do Princípio Fundamental — VISION §2 — "recompensar compreensão, nunca apenas tempo"). Se o usuário decora datas mas não reconstrói essa cadeia, a jornada falhou, mesmo com todas as afirmações corretas e bem fundamentadas.
   > **Regra do Momento de Clareza (v7, diretriz do fundador).** Uma grande ideia (regra v6 acima) não basta se o usuário só a registra como fato novo — ela precisa ser sentida como **revisão de crença**: ele percebe que a explicação com que chegou era incompleta ou simplista, e a troca por uma melhor. A jornada muda **como** ele pensa, não só **quanto** ele sabe. Isto é decidido **antes** de escrever qualquer lição — é design, não redação de fecho — respondendo três perguntas para cada jornada:
   > 1. Qual ideia equivocada (ou simplista demais) o usuário provavelmente já tem antes de começar?
   > 2. Qual explicação mais sofisticada queremos que ele tenha ao terminar?
   > 3. Em que ponto exato da jornada essa mudança de entendimento acontece?
   >
   > Se essa mudança não existir com clareza, a jornada ainda não está pronta — por mais correto que cada nó individual seja. Exemplos (fundador): *República Romana* — antes, "Roma virou um Império porque apareceu um ditador"; depois, "Roma virou um Império porque as instituições republicanas deixaram de conseguir controlar o próprio sucesso militar". *Pax Romana* — antes, "Roma ficou em paz porque tinha um exército forte"; depois, "Roma permaneceu estável porque Augusto construiu um equilíbrio político extremamente eficiente — mas esse mesmo sistema nunca resolveu o problema da sucessão". O par antes/depois **é** o campo `synthesis.shift` (`before`/`after`) que já existe no schema de cada jornada (ARCHITECTURE §5.1) — a regra nova é que ele precisa ser **projetado no passo 2-3 do pipeline**, não só preenchido no passo 7 depois que o conteúdo já foi escrito. O playtest observa diretamente se esse momento aconteceu: o primeiro "agora entendi" — frase, expressão facial, pausa ou conexão espontânea do usuário — vira um dado registrado, não uma impressão (roteiro em [`PLAYTEST_E0.2.md`](PLAYTEST_E0.2.md)).
4. **Seleção de nós.** Para cada jornada, escolher os 3-8 nós que contam esse arco. Critério de corte (agora também o Princípio 7 da EDITORIAL_POLICY): um nó entra se sua remoção quebra a cadeia causal da jornada; não entra "porque é importante em geral" — isso é enciclopédia, não curadoria.
5. **Mapeamento de afirmações, consenso e classe epistêmica.** Para cada nó, listar as afirmações atômicas e classificá-las em **dois eixos independentes** (EDITORIAL_POLICY, Princípios 1-3):
   - **Banda de consenso:** forte (≥90%), majoritário (70-90%), disputado (40-70%), hipótese minoritária (<40%) — com fontes e os principais lados do debate para as duas últimas faixas. Percentuais são **avaliações editoriais da literatura**, feitas na revisão especializada, e devem ser defensáveis quando o usuário tocar no indicador.
   - **Classe epistêmica:** fato estabelecido · hipótese aceita · interpretação historiográfica · debate em aberto (tabela na EDITORIAL_POLICY, Princípio 3). A classe determina como a afirmação pode ser cobrada: fatos podem ter "resposta certa"; interpretações e debates **nunca** viram pergunta objetiva (regra da seção 7) — viram exploração de perspectivas.
   - **Regra anti-falso-balanceamento:** hipótese minoritária nunca é apresentada com o mesmo peso do consenso (Princípio 1); ela vive nas camadas de aprofundamento, nomeada como minoritária.
   - **Fontes:** cada afirmação referencia fontes conforme a hierarquia da EDITORIAL_POLICY (Princípio 4): obras acadêmicas e artigos revisados por pares sustentam claims; material de divulgação pode inspirar linguagem/ganchos, nunca sustentar conteúdo.
6. **Mapeamento de conexões.** Registrar o que este nó desbloqueia de compreensão em outros nós/jornadas/coleções (alimenta o "conhecimento conectado", os Ecos e o planejamento de Trilhas futuras — §2.2).
7. **Escrita das lições e interações** conforme seções 3-5.
8. **Revisão especializada.** Nenhuma jornada publica sem revisão por pessoa com formação na área (resposta direta à fraqueza fatal do Paladin). O revisor valida: precisão factual, classificação de consenso, e se as simplificações são omissões legítimas ou distorções (seção 4).
9. **Teste de calibração.** Rodar com usuários reais antes do lançamento: taxa de acerto por interação entre 60-85% (abaixo: lição não ensinou ou pergunta mal escrita; acima: pergunta trivial demais para gerar aprendizado).

### 2.1 O momento de síntese (regra de prontidão — diretriz do fundador)

> **Toda jornada de vários nós — e toda trilha — termina com um momento de síntese. Se a conclusão não provocar o "agora tudo faz sentido", não está pronto — independentemente das métricas de engajamento.**

O usuário não deve apenas concluir uma sequência de nós; deve perceber que **enxerga a jornada de forma diferente** — este é o mecanismo que entrega, na prática, a Regra do Momento de Clareza (v7, §2 passo 3): a síntese é onde a revisão de crença projetada no design vira algo que o próprio usuário faz e sente. Estrutura obrigatória do momento (campo `synthesis`, exigido pelo validador em toda jornada de ≥2 nós e em toda trilha — nada publica sem síntese):

1. **Pergunta final** que só pode ser respondida cruzando os nós da jornada (tipo conexão — a primeira pergunta "nível Mestre" que o usuário encontra ali). É o clique ativo: ele *faz* a síntese antes de lê-la.
2. **Reenquadramento**: 1-3 parágrafos que devolvem a pergunta central da jornada respondida, reorganizando o que foi visto numa ideia única e memorável — idealmente ancorada num gesto da vida do usuário.
3. **Mudança de olhar explícita** (campo `shift.before`/`shift.after`): "como você chegou" vs. "como você sai" — a crença inicial riscada, a nova compreensão em destaque. É exatamente o par antes/depois da Regra do Momento de Clareza.

Só depois da síntese vem a celebração da jornada (card, estatísticas, tease da próxima — GDD §9.1). Celebrar antes de compreender inverte a recompensa: a festa é pelo entendimento, não pelo término. *Nota de escopo:* isto é distinto da celebração de **Coleção Completa** (GDD §9.1), que acontece só depois da última jornada de uma coleção — ela agrega estatísticas e revela conexões/Trilhas já mapeadas, mas não é uma segunda síntese com pergunta e reenquadramento próprios; a compreensão profunda é entregue jornada a jornada, não represada para o fim da coleção.

### 2.2 Trilhas: o formato cross-coleção (secundário, deliberado)

> **Decisão do fundador (v6):** o padrão que originalmente definia a "Jornada" pré-pivô — um arco que atravessa várias coleções, como "Atenas → Roma → Iluminismo → 1988" — não desaparece. Vira **Trilha**: um formato secundário, explicitamente rotulado como tal, nunca a porta de entrada padrão (essa é a Coleção, §2 e GDD §4.0). *(v3, refinamento do fundador:)* uma trilha não é apenas uma categoria a mais na prateleira — é preferencialmente uma **experiência de descoberta**: um achado que aparece ao concluir a coleção que a origina ou atravessa, como um documentário montado com cenas que o usuário já viu, sob uma pergunta nova. *(v4: o nome "Jornada" volta a ser usado a partir desta versão — mas para a unidade primária dentro de uma coleção, não para este formato secundário. Trilha continua sendo Trilha; não confundir os dois papéis.)*

- **Quando uma Trilha se justifica.** Só quando a pergunta central **não pode existir dentro de uma única coleção** — "De onde veio a ideia de que o povo pode governar?" exige Grécia *e* Roma *e* Iluminismo *e* Brasil na mesma resposta. Se a pergunta cabe dentro de uma coleção só, ela é uma jornada, não uma trilha (não duplicar por vaidade de formato).
- **Reaproveita nós, não os duplica.** Uma trilha referencia nós que já existem dentro de suas coleções nativas (um nó pode pertencer a uma jornada *e* a uma ou mais trilhas ao mesmo tempo — o schema já suporta nó em múltiplas trilhas/jornadas, ARCHITECTURE §5.1). Escrever um nó uma vez, reaproveitar em quantas trilhas fizer sentido — é montagem editorial (reorganizar cenas já filmadas), não produção de conteúdo novo, o que torna o custo de cada trilha marginal comparado a uma coleção nova.
- **Pipeline:** passos 1 ("pergunta central, nunca tema" — a regra original desta seção, agora exclusiva das trilhas), 3, 6-9 acima se aplicam normalmente; o passo 2 (curadoria de jornadas) não existe — a trilha seleciona nós diretamente através das coleções que atravessa. Síntese própria obrigatória (§2.1).

### 2.3 Estratégia de lançamento: vertical slice antes de padronizar

> **Diretriz do fundador (v4):** "Não escrevam mais conteúdo por enquanto. Escolham uma única coleção. Redesenhem a estrutura dela em torno de jornadas guiadas por pergunta. Façam essas jornadas parecerem um jogo premium. Testem com usuários. Só depois definam esse formato como padrão para todas as outras coleções."

- **Uma coleção por vez, validada antes de crescer.** O catálogo de lançamento não é "um pouco de cada coleção" — é **uma coleção levada a um arco fechado e polido** (~5 jornadas, GDD §4.0), enquanto as demais coleções ficam visivelmente "em preparação" (GDD §4.0) sem receber conteúdo novo. É mais barato descobrir o ritmo e o formato certos com ~15-20 nós do que com centenas.
- **O teste decide o padrão, não o inverso.** Só depois que a coleção-piloto for jogada por uma coorte real (a mesma meta de teste do E0.2 do BACKLOG) é que o formato de jornada (duração, título-pergunta, arco de 5 unidades) vira o padrão oficial para as próximas coleções. Até lá, todo detalhe do formato é hipótese, não regra — no mesmo espírito do regime de calibração do GDD (§5.0, Apêndice A).
- **Gate numérico obrigatório (v6, diretriz do fundador).** Uma coleção só é considerada concluída — liberando a próxima jornada ou coleção — quando o playtest ([`PLAYTEST_E0.2.md`](PLAYTEST_E0.2.md)) atingir **média ≥8/10 em cada um** dos 5 critérios abaixo (não apenas na média geral — os cinco precisam, individualmente, cruzar a régua):
  1. sensação de progresso;
  2. clareza da narrativa;
  3. retenção do mapa mental;
  4. vontade espontânea de continuar;
  5. facilidade de retomar depois de uma pausa.

  Se qualquer critério ficar abaixo de 8, o próximo trabalho não é escrever mais conteúdo — é melhorar a coleção existente. O catálogo cresce só depois que a experiência estiver validada.
- **O que o playtest observa: mapa mental, não fatos decorados.** *(v6.)* A pergunta deixa de ser "você aprendeu?" e passa a ser "você consegue reconstruir a lógica da jornada com suas próprias palavras?" — reconstrução da história sem olhar o app, explicação de cada grande ideia (§2, passo 2), desenho do caminho percorrido, e a pergunta mais importante do roteiro: "se eu apagar todo o texto da jornada e deixar só a ideia principal, qual ideia você acredita que ela queria transmitir?" Se a resposta coincidir com a intenção editorial (§2, passo 2), o conteúdo foi compreendido; se não coincidir, o problema não é falta de conteúdo — é falta de clareza narrativa (§2, passo 3). Roteiro operacional completo em [`PLAYTEST_E0.2.md`](PLAYTEST_E0.2.md).
- **Gate permanente: nenhuma jornada nova sem playtest da coleção atual.** *(v5, endurecido na v6.)* Isso vale mesmo dentro da própria coleção-piloto — as jornadas 4 e 5 (queda, legado) de Império Romano só entram em produção depois que as 3 jornadas já escritas, reorganizadas para que cada uma tenha um eixo temático distinto (nota v5 no topo do documento), atingirem o gate acima. Escrever mais conteúdo antes desse teste — mesmo conteúdo "só mais uma jornada" — repete exatamente o erro que a v4 já corrigiu: produzir mais rápido do que valida. **Ordem de prioridade vigente (v6):** 1) melhorar clareza → 2) melhorar narrativa → 3) melhorar retenção → 4) validar com usuários → 5) só então escrever jornada nova. O crescimento do catálogo é consequência da qualidade, nunca o inverso.
- **Isso não substitui o E0.2 do BACKLOG — é a mesma validação, aplicada à unidade de conteúdo.** O ROADMAP já exigia testar a navegação com usuários reais antes de escalar (regra de passagem R0→R1); esta seção estende a mesma disciplina para a forma do conteúdo em si.
- **Descoberta:** uma trilha nunca é o caminho padrão de ninguém. Ela aparece como Eco dentro de um nó que ela atravessa ("isso ecoa em outras 3 paradas — ver a trilha completa"), como **desbloqueio na celebração de Coleção Completa** (GDD §9.1 — o caso preferencial, mais forte emocionalmente que a prateleira), ou numa prateleira própria da Biblioteca (GDD §4.0) — sempre opt-in, sempre rotulada como uma experiência diferente da coleção que o usuário está visitando.

## 3. Anatomia de uma lição de ~3 minutos

Estrutura padrão (variável em conteúdo, fixa em ritmo):

| Momento | Duração | O que acontece | Regra |
|---|---|---|---|
| **Gancho** | ~15s | Uma pergunta ou decisão *antes* de qualquer explicação ("Você é um cidadão ateniense. Um general perdeu uma batalha. Você pode votar pela execução dele. Vota?") | O usuário sempre age antes de ler. Aprender fazendo (princípio #1). |
| **Narrativa** | ~60-90s | 2-4 story cards que contam o trecho do arco, respondendo ao gancho | Máx. 3 conceitos novos por lição. Texto no tom "amigo erudito". |
| **Interações** | ~60s | 2-4 perguntas de compreensão (taxonomia da seção 7) intercaladas ou ao final | Nunca só reconhecimento; pelo menos 1 pergunta causal. |
| **Consenso** | quando houver | Afirmação disputada exibe o indicador de consenso; toque abre o "quem defende / quem discorda / por quê" | Nunca interrompe o fluxo; é camada opcional de profundidade. |
| **Conexão** | ~15s | "Isso vai te ajudar a entender: ✔ X ✔ Y" | Toda lição termina apontando para fora de si mesma (princípio #5). |
| **Fecho emocional** | ~5s | Reação do companheiro + progressão visível (nó avançando) | Tom calibrado ao conteúdo (seção 8). |

Regras transversais:
- **Uma lição, uma ideia.** Se precisa de duas frases para resumir o que a lição ensina, são duas lições.
- **Erro = melhor momento da lição.** Resposta errada abre a explicação mais rica (por que a alternativa parecia certa, por que não é), sem custo algum, e marca a afirmação para revisão antecipada no SRS. O caminho do erro recebe tanto investimento editorial quanto o do acerto.

## 4. Camadas de profundidade (adaptar o complexo sem mentir)

Todo nó oferece três camadas; só a primeira é obrigatória:

1. **Essência (3 min, obrigatória):** o arco causal mínimo. Técnica de simplificação permitida: **omitir**, nunca **distorcer**. Teste do revisor: "um especialista leria isso e diria 'incompleto, mas correto'?" Se a resposta é "correto, mas enganoso", reescrever.
2. **Aprofundamento (opcional, +5-10 min):** os debates, as nuances, os personagens secundários — desbloqueado ao concluir a essência, apresentado como "explorar esta sala do Arquivo".
3. **Fontes (opcional):** leituras, referências e historiografia por trás das afirmações — serve a persona Rafael (transparência) e Beatriz (profundidade), e materializa a credibilidade prometida no posicionamento.

Quando a simplificação da camada 1 for inevitavelmente redutora, sinalizar dentro do texto ("a história completa é mais complicada — ela está na próxima sala") em vez de fingir completude. A honestidade sobre simplificação é parte da marca.

## 5. De fonte acadêmica a experiência interativa (receita)

Processo repetível para transformar literatura em lição:

1. **Extrair claims:** ler a fonte e decompor em afirmações atômicas (seção 1).
2. **Classificar consenso** de cada claim (pipeline, passo 4).
3. **Achar a tensão:** identificar onde a fonte contraria a intuição do leitor leigo ("a democracia ateniense sorteava cargos — eleição era vista como aristocrática"). A tensão vira o gancho da lição.
4. **Converter claim em decisão:** sempre que possível, colocar o usuário na posição histórica ("você vota?") em vez de perguntar "o que aconteceu?". Compreensão nasce de habitar o dilema, não de memorizar o desfecho.
5. **Escrever o caminho do erro** para cada interação (seção 3).
6. **Citar:** vincular claims às fontes na camada 3.

## 6. O que significa "aprendido" (modelo de domínio)

> **O alvo é o mapa mental, não o fato isolado (v6).** Interações corretas (a tabela abaixo) são o sinal que o produto consegue medir automaticamente — mas o teste real de "aprendido" é o mesmo do playtest ([`PLAYTEST_E0.2.md`](PLAYTEST_E0.2.md)): o usuário consegue explicar a outra pessoa o quê aconteceu, por que aconteceu, e como aquilo levou ao próximo acontecimento? Se ele acerta interações mas não reconstrói essa cadeia, o nível **Compreendido** está inflado — sinal de que a jornada precisa de mais clareza narrativa (§2, passo 3), não de mais interações.

Estados de um nó por usuário — a definição operacional que GDD, North Star e progressão unificada consomem:

| Estado | Critério | O que destrava |
|---|---|---|
| **Visitado** | Abriu lições do nó | Nada de progressão (Princípio Fundamental: presença não é aprendizado) |
| **Compreendido** | Concluiu as lições da essência com acerto nas interações de compreensão (limiar de calibração: ~70% na primeira passada, com recuperação via caminho do erro) | Nó **acende** na timeline; XP; reação do companheiro; conexões reveladas |
| **Dominado** | As afirmações do nó sobreviveram à repetição espaçada: ≥2 revisões corretas com intervalo crescente (parâmetros iniciais: ~3 dias e ~14 dias; ajustáveis pelo agendador) | Conta na **North Star Metric**; artefato no museu; região no Atlas |
| **Mestre** | Acertou perguntas de conexão que cruzam este nó com outros (seção 7, tipo 5) | Colecionável raro; contribui para títulos altos do Arquivo |

Um nó Dominado pode **regredir** silenciosamente se as revisões passarem a falhar — é isso que dispara a "memória se apagando" (missão de revisão com XP em dobro). A regressão nunca é mostrada como perda/punição na interface; só a missão de resgate é visível.

## 7. Perguntas que avaliam compreensão, não memorização

### Taxonomia (todo nó usa pelo menos 3 tipos)

1. **Causal** — "Por que X levou a Y?" / "O que tornou X possível?"
2. **Contrafactual** — "Se X não tivesse acontecido, o que seria mais provável?" (avalia modelo mental, não decoreba)
3. **Aplicação/analogia** — "Qual situação atual se parece com X neste aspecto?"
4. **Ordenação causal** — sequenciar eventos *pela lógica de causa e efeito* (não pela data memorizada)
5. **Conexão** — cruza nós/eras ("O que a democracia ateniense e a Constituição de 1988 têm em comum? E qual a diferença fundamental?") — exclusiva do nível Mestre
6. **Interpretação de fonte** — trecho primário curto + "o que o autor está defendendo?"
7. **Decisão situada** — o usuário no papel histórico, escolhendo entre opções reais da época

### Anti-padrões proibidos (as falhas documentadas do Paladin na Etapa 1)

- ❌ Data isolada como portão de progresso ("Em que ano...?") — datas vivem **apenas** no SRS de revisão, como reforço, nunca bloqueando avanço.
- ❌ Pegadinha (distratores plausíveis só por semelhança verbal, citação fora de contexto).
- ❌ Pergunta respondível sem ter entendido nada (eliminação óbvia de alternativas absurdas).
- ❌ Ambiguidade com "resposta certa" discutível — se historiadores discordariam da resposta, a pergunta não pode ser objetiva; vira exploração de consenso.

### Regra de ouro

> Se a pergunta pode ser acertada copiando uma frase da lição sem entendê-la, ela não avalia compreensão — reescrever.

## 8. Diretrizes editoriais e de sensibilidade

- **Múltiplas perspectivas por padrão.** A timeline não é eurocêntrica: as eras incluem as civilizações em paralelo (Mesopotâmia, Egito, China, Índia, Américas, África), e eventos de conquista/colonização são narrados incluindo a perspectiva dos conquistados, com o registro historiográfico de cada lado.
- **Tragédia não é fase de jogo.** Nós sobre guerras, escravidão, genocídios: sem confete, sem trocadilhos do companheiro, fecho solene ("compreender para não repetir"); colecionáveis associados são memoriais, não troféus. A progressão mecânica (XP, domínio) funciona igual — muda o **tom**, nunca o rigor.
- **Presente como destino, não como palanque.** Conectar ao hoje (regra do arco narrativo) sem tomar partido em disputa política contemporânea; quando o presente é ele próprio disputado, aplicar o mesmo sistema de consenso usado para o passado.
- **Tom "amigo erudito" em tudo** (VISION §19): entusiasmo por entender, nunca condescendência nem ironia à custa do usuário.

## 8.1 Atualização contínua do conteúdo

(EDITORIAL_POLICY, Princípio 6.) O conhecimento evolui e o catálogo acompanha:

- Nova evidência ou mudança de consenso na literatura → o claim é atualizado **pelo mesmo pipeline** (incluindo revisão especializada da mudança), nunca por edição direta.
- Toda revisão registra: o que mudou, por quê (com fontes) e quando — histórico consultável (o versionamento do repositório de conteúdo provê o registro; PRD RF-14 define a exposição ao usuário).
- Reclassificações (ex.: "debate em aberto" → "hipótese aceita") são mudanças editoriais de primeira classe, celebráveis na comunicação ("a ciência avançou") — nunca silenciosas.
- Gatilho de revisão periódica: nós sem revisão há mais de N meses (parâmetro editorial) entram na fila de reverificação por amostragem.

## 9. Papéis editoriais, produção e dificuldade

### 9.1 Quem escreve

| Papel | Responsabilidade | Pode ser acumulado? |
|---|---|---|
| **Editor de coleção** | Dono do recorte: curadoria de jornadas, pergunta central de cada uma, seleção de nós, tom, coerência narrativa | Sim, com Redator |
| **Redator de aprendizagem** | Escreve lições, interações e caminhos do erro conforme as seções 3-5 e 7 | Sim, com Editor |
| **Revisor especialista** | Formação na área: valida precisão, classificação de consenso e legitimidade das simplificações | **Não** — precisa ser independente de quem escreveu |
| **IA assistente de produção** | Extrai claims de fontes, rascunha variações de pergunta e de revisão SRS, sugere conexões | Acelera qualquer papel; **não aprova nada** |

Realidade de time pequeno: no início, duas pessoas bastam (editor+redator numa, revisor na outra) com IA acelerando a produção. O único papel inegociável em qualquer configuração é a **revisão especializada independente** — cortar isso é repetir o erro que definiu a reputação do Paladin.

### 9.2 Quanto tempo dura produzir

Alvo inicial (hipótese a validar): uma **jornada** de 3-8 nós (~10-30 lições) em **2-4 semanas** com uma dupla + IA assistente. A primeira jornada produzida é o **piloto de processo**: medir o tempo real de cada etapa do pipeline (seção 2), descobrir onde a IA realmente acelera e recalibrar a estimativa antes de comprometer qualquer catálogo maior.

> **Alerta de escopo (v2, crítica ao pivô "Biblioteca de Alexandria"; revisto v4):** uma coleção "completa" com 7+ jornadas é **~25-45 nós** — várias vezes o conteúdo do MVP original (2-3 jornadas de 5-12 nós, VISION §16.1). Adotar a estrutura Coleção→Jornada desde já é a decisão certa (fixa a arquitetura de conteúdo antes de escalar autoria); **lançar uma coleção inteira "sem fim visível" não é.** A v4 fecha esse risco de vez: cada coleção mira um arco fechado de ~5 jornadas (§2.3), não uma lista que cresce indefinidamente — "mais 7, depois mais 10, depois mais 20" é exatamente o sintoma que a v4 corrige. O caminho crítico do PRD (§9) e do BACKLOG (E1.3) já tratava a produção de conteúdo como o maior risco de execução do projeto. **Recomendação vigente:** uma única coleção-piloto (Império Romano) redesenhada em ~5 jornadas, testada com usuários antes de generalizar o formato (§2.3) — nada de conteúdo novo em outras coleções até essa validação.

### 9.3 Como medir dificuldade

Dificuldade é **medida, não intuída**:

- Instrumentar cada interação: taxa de erro + tempo de resposta, agregados por lição e por nó.
- Banda alvo de acerto: 60-85% (seção 2, passo 8). Fora da banda → volta para reescrita. Exceção: perguntas de nível Mestre (seção 7, tipo 5) podem ficar abaixo da banda por design.
- Curva dentro da jornada (ou da trilha): os primeiros nós mais acessíveis, dificuldade crescendo com o arco — o próprio percurso ensina o usuário a jogá-lo.
- Monitorar por persona: o que é trivial para Beatriz pode ser opaco para Marina; divergência grande entre personas numa mesma interação é sinal de problema de linguagem, não de conteúdo.

## 10. Checklist de publicação de um nó

Antes de qualquer nó ir ao ar:

- [ ] Pergunta central da jornada (ou da trilha) responde "por que alguém se importaria?" — e é o próprio título, não só a legenda dele
- [ ] A jornada cabe numa única frase — uma grande ideia, não várias (§2, passo 2) — e essa frase é a que a síntese (§2.1) precisa provar que o usuário alcançou
- [ ] Toda transição entre dois acontecimentos importantes responde: existe uma frase que faz o segundo parecer inevitável depois do primeiro? (§2, passo 3 — clareza narrativa antes de densidade)
- [ ] Momento de Clareza identificado *antes* de escrever (§2, passo 3, v7): ideia equivocada de partida, explicação mais sofisticada de chegada, e o ponto exato da jornada onde a mudança acontece — registrado em `synthesis.shift.before`/`after`
- [ ] Claims atômicos extraídos, com banda de consenso **e** classe epistêmica classificadas, fontes vinculadas conforme a hierarquia da EDITORIAL_POLICY (nenhum claim sustentado por material de divulgação)
- [ ] Nenhuma interpretação/debate cobrado como pergunta objetiva; nenhum falso balanceamento (minoritária apresentada como par do consenso)
- [ ] Revisão especializada concluída (precisão + consenso + simplificações legítimas)
- [ ] Cada lição: 1 ideia, ≤3 conceitos novos, gancho antes de explicação
- [ ] ≥3 tipos de pergunta da taxonomia; zero anti-padrões; ≥1 pergunta causal por lição
- [ ] Caminho do erro escrito para toda interação
- [ ] Conexões mapeadas (o que este nó desbloqueia de compreensão)
- [ ] Tom/celebração calibrados ao conteúdo (seção 8)
- [ ] Calibração testada: acerto entre 60-85% por interação
- [ ] (Para a última jornada de uma coleção, e para toda trilha) Momento de síntese completo: pergunta de conexão + reenquadramento + mudança de olhar (seção 2.1) — **sem síntese, a coleção/a trilha não publica**

---

**Próximo passo:** Etapa 3 — Game Design Document (`GAME_DESIGN.md`), que agora pode definir fórmulas de XP, curva do companheiro, economia e ligas **sobre** as definições deste documento (estados de nó, afirmações, agendador SRS), em vez de inventar progressão desacoplada do aprendizado.
