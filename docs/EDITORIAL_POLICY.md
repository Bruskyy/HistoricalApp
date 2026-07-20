# Política Editorial e Credibilidade Científica

> **Pilar permanente da plataforma**, definido por diretriz do fundador. Posição na cadeia de precedência: **VISION > EDITORIAL_POLICY > LDD > GDD > PRD** — nenhum documento abaixo pode contradizer esta política, e o [`LEARNING_DESIGN.md`](LEARNING_DESIGN.md) é sua implementação operacional.
>
> O objetivo do Mneme não é apenas ensinar de forma envolvente — é ser **referência em credibilidade**: o usuário precisa confiar que aprende conteúdo construído com rigor acadêmico, não tendências ideológicas, simplificações ou revisionismos sem respaldo.

---

## O compromisso (texto canônico)

Este é o compromisso público da plataforma — a formulação a ser usada em marketing, lojas de app e na página de metodologia. É deliberadamente um compromisso **com o método, não com "neutralidade absoluta"**:

> **«O Mneme é desenvolvido com base em pesquisa acadêmica, revisão especializada e compromisso com evidências. Quando existir consenso científico, ele será apresentado. Quando houver debates legítimos entre especialistas, eles serão explicados com transparência.»**

### O que nunca prometemos

Promessas que uma plataforma séria não consegue sustentar e que, portanto, são **proibidas** em qualquer comunicação:

- ❌ "Conteúdo neutro"
- ❌ "Sem ideologia"
- ❌ "Verdade absoluta"

O motivo é epistemológico, não de marketing: neutralidade absoluta não existe em historiografia; o que existe — e é defensável — é método transparente, evidência e revisão por especialistas.

---

## Princípio 1 — Prioridade para o consenso acadêmico

Quando existe consenso sólido entre especialistas, **ele é o conteúdo principal** apresentado ao usuário.

- Hipóteses marginais **nunca recebem o mesmo peso** que posições amplamente aceitas pela comunidade acadêmica. Apresentar "os dois lados" quando um lado é consenso e o outro é fringe não é equilíbrio — é distorção (falso balanceamento).
- Operacionalização: bandas de consenso do LDD §2 (passo 4); a camada Essência de cada nó (LDD §4) ensina o consenso; posições minoritárias legítimas vivem nas camadas de aprofundamento, sinalizadas como tais.

## Princípio 2 — Transparência sobre controvérsias

Quando existe controvérsia **legítima** entre historiadores/filósofos, ela é explicitada — nunca escondida atrás de uma "resposta certa" artificial.

- O usuário deve conseguir ver: que existem interpretações diferentes, **quais** são, **qual o grau de aceitação** de cada uma e **quais evidências** as sustentam.
- A plataforma nunca apresenta um debate acadêmico real como se tivesse resposta definitiva — e o inverso também vale: não fabrica "polêmica" onde há consenso (ver Princípio 1).
- Operacionalização: indicador de nível de consenso + painel "quem defende / quem discorda / por quê" (LDD §3, PRD RF-03.4) + botão **"Por que existe debate sobre este assunto?"** (PRD RF-14).

## Princípio 3 — Separação entre fatos e interpretações

Toda afirmação (claim) do catálogo carrega uma **classificação epistêmica** explícita, distinta do percentual de consenso:

| Classe | O que é | Exemplo |
|---|---|---|
| **Fato estabelecido** | Evento/dado com evidência documental robusta e sem disputa relevante | "Roma foi saqueada em 410 d.C." |
| **Hipótese aceita** | Explicação majoritária, sustentada por evidência, ainda tecnicamente revisável | Causas prováveis de um colapso demográfico |
| **Interpretação historiográfica** | Leitura de significado/causa que varia por escola historiográfica | O peso relativo de fatores econômicos vs. políticos na queda do Império |
| **Debate em aberto** | Questão sem posição dominante entre especialistas | Disputas ativas de datação/atribuição |

Essa distinção não é rodapé técnico — é **conteúdo pedagógico**: ensina ao usuário como a própria História é construída, e é parte da USP (rigor sem ser chato).

## Princípio 4 — Fontes de alta qualidade

Hierarquia de fontes para todo o conteúdo, em ordem de preferência:

1. Livros acadêmicos reconhecidos e obras de referência;
2. Artigos revisados por pares e revisões sistemáticas;
3. Pesquisas de universidades e centros de pesquisa;
4. Fontes primárias, quando apropriado (com a mediação interpretativa devida);
5. **Evitar como fonte principal:** materiais de divulgação, opinião, blogs e conteúdo sem revisão especializada — podem inspirar ganchos e linguagem, nunca sustentar claims.

Todo claim referencia suas fontes (camada 3 do LDD §4); a validação de conteúdo em CI (PRD RF-12) rejeita claim sem fonte classificada.

## Princípio 5 — Revisão especializada obrigatória

**Nenhuma jornada é publicada sem revisão de especialista da área.** Isso já era regra do LDD (§2 passo 7, §9.1 — papel inegociável); esta política a eleva a compromisso institucional:

- O processo editorial é **parte da arquitetura do produto** (ARCHITECTURE §7: revisão = aprovação de PR de conteúdo; publicação bloqueada sem ela), não uma etapa opcional ou "boa prática".
- Sem revisor disponível, o conteúdo espera. Prazo nunca vence rigor (é a falha que definiu a reputação do Paladin — Etapa 1).

## Princípio 6 — Atualização contínua

O conhecimento evolui; a plataforma trata isso como característica, não como constrangimento.

- Novas evidências ou novos consensos → conteúdo atualizado pelo mesmo pipeline (com revisão especializada da mudança).
- **Histórico claro de revisões:** toda alteração de claim/nó fica registrada e consultável (o versionamento Git do conteúdo — ARCHITECTURE §7 — já provê isso; o PRD RF-14 expõe ao usuário quando um conteúdo foi revisado e por quê, em linguagem acessível).
- Correção pública sem drama: errar e corrigir com transparência **aumenta** credibilidade; esconder revisão a destrói.

## Princípio 7 — Curadoria é edição, não enciclopédia

*(Adicionado v6, pivô "Biblioteca de Alexandria" — VISION §3.)* O Mneme não promete cobertura exaustiva de uma coleção — promete que **tudo que está presente é indispensável para a compreensão**, e o que falta ainda não foi escrito, nunca omitido por engano.

- **Critério de corte é sempre pedagógico, nunca de completude.** Uma jornada ou nó entra porque sua ausência quebra a compreensão da pergunta; não entra "porque é importante em geral" — isso é enciclopédia, não curadoria (operacionalização já existente: LDD §2, passo de seleção de nós, agora aplicado a dois níveis — jornadas dentro de uma coleção, nós dentro de uma jornada).
- **Curadoria não é o mesmo que viés.** Recortar não é distorcer: a régua de corte é "o que é indispensável para responder à pergunta da jornada", auditável e reproduzível — não preferência pessoal do redator. Jornadas e nós que ficaram de fora ficam registrados no plano editorial, não escondidos.
- **A promessa pública é diferente da promessa de uma enciclopédia.** Onde a Wikipédia promete "tudo sobre X", o Mneme promete "o que você precisa para entender X de verdade" — essa diferença é compromisso editorial, não limitação de conteúdo a esconder (VISION §7).

---

## Na interface (compromissos de produto)

A credibilidade deve ser **visível**, não apenas interna:

1. **Indicador de nível de consenso** nas afirmações relevantes (já especificado: GDD §12, PRD RF-03.4).
2. **Sinalização de interpretações concorrentes** quando existirem (Princípios 2-3).
3. **Botão "Por que existe debate sobre este assunto?"** — abre a explicação das posições, seus defensores e evidências (PRD RF-14).
4. **Página de metodologia editorial** pública e acessível de dentro do app: como o conteúdo é produzido, revisado e atualizado — com o texto canônico do compromisso (PRD RF-14).
5. **Histórico de revisões** visível quando um conteúdo foi atualizado (Princípio 6).

## Governança

- Esta política só muda por decisão explícita do fundador, com registro de versão neste arquivo.
- Conflitos editoriais (ex.: redator vs. revisor sobre classificação de um claim) são resolvidos **a favor da posição mais conservadora** (a que reivindica menos certeza) até resolução.
- Pressões externas (engajamento, tendências, reclamações ideológicas de qualquer direção) não alteram classificação de conteúdo — só evidência e literatura acadêmica alteram.
