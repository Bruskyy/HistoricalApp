# Um homem só, um império inteiro

## Gancho

Você acaba de ser nomeado governador de uma província a três meses de viagem de Roma. Não há telefone, não há e-mail — só cartas que demoram semanas. Você tem legiões sob seu comando, poder de julgar processos e cobrar impostos. O que impede você de simplesmente virar um rei local?

## Narrativa

A resposta de Roma para "como governar um território do tamanho de toda a Europa com a tecnologia da Antiguidade" foi engenhosa e arriscada ao mesmo tempo: delegar poder quase total a um único homem por província — e confiar na lealdade dele.

Havia dois tipos de província. As **senatoriais**, mais pacíficas, eram governadas por um proconsul indicado pelo Senado, geralmente sem legiões relevantes. As **imperiais** — de fronteira, com tropas numerosas — ficavam sob um legado escolhido diretamente pelo imperador, alguém em quem ele confiasse pessoalmente.

Essa divisão não era burocracia por burocracia: era proteção política. Deixar um exército grande sob o comando de alguém fora do controle direto do imperador era, como 69 d.C. provaria, um convite ao golpe.

## Interações

```json
[
  {
    "id": "i1",
    "type": "situated_decision",
    "claimId": "governadores-provinciais",
    "objective": false,
    "prompt": "Você é o imperador. Uma província de fronteira tem três legiões estacionadas. Quem você coloca no comando dela?",
    "options": ["Alguém indicado pelo Senado, sem ligação direta comigo", "Um legado de minha confiança pessoal direta", "Deixo a província se autogovernar"],
    "errorPath": "Legiões numerosas sob comando de alguém fora do seu controle direto eram um risco de golpe demais grande — foi exatamente assim que generais viraram imperadores em 69 d.C. A confiança pessoal, não o protocolo, decidia quem comandava a fronteira."
  },
  {
    "id": "i2",
    "type": "causal",
    "claimId": "governadores-provinciais",
    "objective": true,
    "prompt": "Por que as províncias de fronteira, com legiões estacionadas, eram governadas diretamente por um legado do imperador — e não por um proconsul indicado pelo Senado?",
    "options": [
      "O imperador não podia deixar tropas numerosas sob o comando de alguém fora de seu controle direto — era um risco de golpe demais grande",
      "O Senado se recusava a administrar províncias de fronteira",
      "Não havia diferença real entre os dois tipos de província"
    ],
    "correct": 0,
    "errorPath": "Quem comandava legiões podia tentar virar imperador (como em 69 d.C.). Manter as províncias com mais tropas sob legados de sua confiança direta era a forma do imperador se proteger de generais ambiciosos demais."
  },
  {
    "id": "i3",
    "type": "application",
    "claimId": "tributacao-imperial",
    "objective": true,
    "prompt": "Um camponês numa província romana pagava tributo principalmente sobre…",
    "options": [
      "A terra que cultivava e o simples fato de existir (imposto per capita) — os dois pilares do tributum",
      "Apenas o que vendia nos mercados urbanos",
      "Nada — províncias conquistadas eram isentas de qualquer tributo"
    ],
    "correct": 0,
    "errorPath": "O tributum tinha duas faces: tributo sobre a terra (produção) e tributo per capita (a própria existência da pessoa livre ou não). Impostos sobre comércio existiam, mas eram complemento, não a base do sistema."
  }
]
```

## Conexão

Agora você entende melhor: ✔ por que Roma dividia suas províncias em dois tipos diferentes de governo ✔ como o medo de golpe moldava até a burocracia ✔ de onde vinha o dinheiro que sustentava o império inteiro.
