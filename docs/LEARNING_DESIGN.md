# Learning Design Document (LDD)

> **Por que este documento existe e vem antes do GDD:** o diferencial do produto não é a gamificação — é **como o conteúdo é ensinado**. A gamificação (GDD) recompensa progressão; este documento define o que *é* progressão: como nasce uma jornada, como uma lição é estruturada, o que significa "aprendido" e como se avalia compreensão em vez de memorização. Todas as fórmulas do GDD (XP, evolução do companheiro, North Star) referenciam as definições daqui.
>
> Documento subordinado ao [`VISION.md`](VISION.md) — em especial ao Princípio Fundamental (*recompensar compreensão, nunca apenas tempo; errar ensina, nunca custa*) e aos princípios pedagógicos da seção 11 — e à [`EDITORIAL_POLICY.md`](EDITORIAL_POLICY.md), da qual este documento é a implementação operacional (cadeia: VISION > EDITORIAL_POLICY > LDD > GDD > PRD).

---

## 1. Modelo de conteúdo (domínio-agnóstico)

Hierarquia única para todos os domínios presentes e futuros (História é a primeira instância):

```
Domínio            (História; futuramente Filosofia, Economia...)
 └─ Era/Região     (contexto na timeline: Antiguidade, Idade Média...)
     └─ Jornada    (arco narrativo: "O Nascimento da Democracia")
         └─ Nó     (unidade de domínio: "A democracia ateniense")
             └─ Lição       (sessão de ~3 min; um nó tem 2-5 lições)
                 └─ Interação  (pergunta, decisão, ordenação...)
             └─ Afirmações   (claims atômicos do nó, com nível de
                              consenso e fontes — alimentam o SRS)
```

Definições que o resto da documentação usa:

- **Nó** é a unidade de progresso da timeline e da North Star Metric. Um nó "acende" no Corredor do Tempo quando é **Compreendido** e conta para a North Star quando é **Dominado** (seção 6).
- **Afirmação (claim)** é a menor unidade de conhecimento verificável ("Atenas instituiu o sorteio de cargos públicos", "o consenso sobre a data X é ~72%"). Cada afirmação carrega: texto, nível de consenso, fontes, e as variantes de pergunta que a avaliam. **O SRS agenda afirmações, não lições** — é isso que permite a "memória de Roma se apagando" ser cirúrgica.
- **Conexão** é um vínculo tipado entre nós (causa → consequência, influência, analogia), inclusive entre eras distantes (Grécia → Constituição Brasileira). As conexões alimentam o "conhecimento conectado" e as perguntas de nível Mestre (seção 6).

## 2. Como nasce uma jornada (pipeline editorial)

Toda jornada passa por este funil, nesta ordem:

1. **Pergunta central.** Uma jornada nunca nasce de um tema ("Grécia Antiga"), nasce de uma pergunta que uma pessoa real faria ("De onde veio a ideia de que o povo pode governar?"). Se a pergunta não desperta curiosidade em alguém da persona Marina, a jornada não é aprovada.
2. **Arco narrativo.** A resposta é estruturada como história com forma dramática: contexto → tensão → virada → consequências → legado no presente. Toda jornada termina conectando ao mundo atual do usuário (por que isso importa hoje) — é o que separa "jornada" de "curso".
3. **Seleção de nós.** Escolher os 5-12 nós que contam esse arco. Critério de corte: um nó entra se sua remoção quebra a cadeia causal da narrativa; não entra "porque é importante em geral" (isso é enciclopédia, não jornada).
4. **Mapeamento de afirmações, consenso e classe epistêmica.** Para cada nó, listar as afirmações atômicas e classificá-las em **dois eixos independentes** (EDITORIAL_POLICY, Princípios 1-3):
   - **Banda de consenso:** forte (≥90%), majoritário (70-90%), disputado (40-70%), hipótese minoritária (<40%) — com fontes e os principais lados do debate para as duas últimas faixas. Percentuais são **avaliações editoriais da literatura**, feitas na revisão especializada, e devem ser defensáveis quando o usuário tocar no indicador.
   - **Classe epistêmica:** fato estabelecido · hipótese aceita · interpretação historiográfica · debate em aberto (tabela na EDITORIAL_POLICY, Princípio 3). A classe determina como a afirmação pode ser cobrada: fatos podem ter "resposta certa"; interpretações e debates **nunca** viram pergunta objetiva (regra da seção 7) — viram exploração de perspectivas.
   - **Regra anti-falso-balanceamento:** hipótese minoritária nunca é apresentada com o mesmo peso do consenso (Princípio 1); ela vive nas camadas de aprofundamento, nomeada como minoritária.
   - **Fontes:** cada afirmação referencia fontes conforme a hierarquia da EDITORIAL_POLICY (Princípio 4): obras acadêmicas e artigos revisados por pares sustentam claims; material de divulgação pode inspirar linguagem/ganchos, nunca sustentar conteúdo.
5. **Mapeamento de conexões.** Registrar o que este nó desbloqueia de compreensão em outros nós/jornadas (alimenta o "conhecimento conectado" e o planejamento de jornadas futuras).
6. **Escrita das lições e interações** conforme seções 3-5.
7. **Revisão especializada.** Nenhuma jornada publica sem revisão por pessoa com formação na área (resposta direta à fraqueza fatal do Paladin). O revisor valida: precisão factual, classificação de consenso, e se as simplificações são omissões legítimas ou distorções (seção 4).
8. **Teste de calibração.** Rodar com usuários reais antes do lançamento: taxa de acerto por interação entre 60-85% (abaixo: lição não ensinou ou pergunta mal escrita; acima: pergunta trivial demais para gerar aprendizado).

### 2.1 O momento de síntese (regra de prontidão — diretriz do fundador)

> **Toda jornada termina com um momento de síntese. Se a conclusão não provocar o "agora tudo faz sentido", a jornada não está pronta — independentemente das métricas de engajamento.**

O usuário não deve apenas concluir uma sequência de lições; deve perceber que **enxerga um pedaço da História de forma diferente**. Estrutura obrigatória do momento (campo `synthesis` da jornada, exigido pelo validador — jornada sem síntese não publica):

1. **Pergunta final** que só pode ser respondida cruzando os nós da jornada (tipo conexão — a primeira pergunta "nível Mestre" que o usuário encontra). É o clique ativo: ele *faz* a síntese antes de lê-la.
2. **Reenquadramento**: 1-3 parágrafos que devolvem a pergunta central respondida e reorganizam o que foi visto numa ideia única e memorável — idealmente ancorada num gesto da vida do usuário ("da próxima vez que você votar…").
3. **Mudança de olhar explícita**: "como você chegou" vs. "como você sai" — a crença inicial riscada, a nova compreensão em destaque.

Só depois da síntese vem a celebração (card, estatísticas, tease da próxima jornada). Celebrar antes de compreender inverte a recompensa: a festa é pelo entendimento, não pelo término.

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
| **Editor de jornada** | Dono do arco: pergunta central, seleção de nós, tom, coerência narrativa | Sim, com Redator |
| **Redator de aprendizagem** | Escreve lições, interações e caminhos do erro conforme as seções 3-5 e 7 | Sim, com Editor |
| **Revisor especialista** | Formação na área: valida precisão, classificação de consenso e legitimidade das simplificações | **Não** — precisa ser independente de quem escreveu |
| **IA assistente de produção** | Extrai claims de fontes, rascunha variações de pergunta e de revisão SRS, sugere conexões | Acelera qualquer papel; **não aprova nada** |

Realidade de time pequeno: no início, duas pessoas bastam (editor+redator numa, revisor na outra) com IA acelerando a produção. O único papel inegociável em qualquer configuração é a **revisão especializada independente** — cortar isso é repetir o erro que definiu a reputação do Paladin.

### 9.2 Quanto tempo dura produzir

Alvo inicial (hipótese a validar): uma jornada de 6-10 nós (~20-40 lições) em **3-6 semanas** com uma dupla + IA assistente. A primeira jornada produzida é o **piloto de processo**: medir o tempo real de cada etapa do pipeline (seção 2), descobrir onde a IA realmente acelera e recalibrar a estimativa **antes** de planejar o catálogo de lançamento (2-3 jornadas, VISION §16.1). Nenhum plano de conteúdo é confiável antes desse piloto.

### 9.3 Como medir dificuldade

Dificuldade é **medida, não intuída**:

- Instrumentar cada interação: taxa de erro + tempo de resposta, agregados por lição e por nó.
- Banda alvo de acerto: 60-85% (seção 2, passo 8). Fora da banda → volta para reescrita. Exceção: perguntas de nível Mestre (seção 7, tipo 5) podem ficar abaixo da banda por design.
- Curva dentro da jornada: os primeiros nós mais acessíveis, dificuldade crescendo com o arco — a jornada ensina o usuário a jogá-la.
- Monitorar por persona: o que é trivial para Beatriz pode ser opaco para Marina; divergência grande entre personas numa mesma interação é sinal de problema de linguagem, não de conteúdo.

## 10. Checklist de publicação de um nó

Antes de qualquer nó ir ao ar:

- [ ] Pergunta central da jornada responde "por que alguém se importaria?"
- [ ] Claims atômicos extraídos, com banda de consenso **e** classe epistêmica classificadas, fontes vinculadas conforme a hierarquia da EDITORIAL_POLICY (nenhum claim sustentado por material de divulgação)
- [ ] Nenhuma interpretação/debate cobrado como pergunta objetiva; nenhum falso balanceamento (minoritária apresentada como par do consenso)
- [ ] Revisão especializada concluída (precisão + consenso + simplificações legítimas)
- [ ] Cada lição: 1 ideia, ≤3 conceitos novos, gancho antes de explicação
- [ ] ≥3 tipos de pergunta da taxonomia; zero anti-padrões; ≥1 pergunta causal por lição
- [ ] Caminho do erro escrito para toda interação
- [ ] Conexões mapeadas (o que este nó desbloqueia de compreensão)
- [ ] Tom/celebração calibrados ao conteúdo (seção 8)
- [ ] Calibração testada: acerto entre 60-85% por interação
- [ ] (Para jornadas) Momento de síntese completo: pergunta de conexão + reenquadramento + mudança de olhar (seção 2.1) — **sem síntese, a jornada não publica**

---

**Próximo passo:** Etapa 3 — Game Design Document (`GAME_DESIGN.md`), que agora pode definir fórmulas de XP, curva do companheiro, economia e ligas **sobre** as definições deste documento (estados de nó, afirmações, agendador SRS), em vez de inventar progressão desacoplada do aprendizado.
