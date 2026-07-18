# Não, obrigado, Atenas

## Gancho

Ano 509 a.C. Roma acaba de expulsar seu último rei — e jurou nunca mais ter outro. A cidade precisa decidir o que fazer com o poder que sobrou. O que você faria com ele?

## Narrativa

Roma escolheu algo que nenhum rei aprovaria: **fatiou o poder e colocou prazo de validade nele**. No lugar do rei, dois cônsules — eleitos, por um ano, cada um com poder de **vetar** o outro. Ninguém seguraria o poder por tempo suficiente para virar tirano.

E o sorteio ateniense, que tratava qualquer cidadão como capaz de governar? Roma conhecia a ideia — e recusou. Cargos públicos eram conquistados por **eleição**, subindo degrau por degrau uma escada obrigatória de carreira, o *cursus honorum*. Antes de mandar, era preciso ter servido.

Mas havia um detalhe que os romanos não gostavam de anunciar: quem de fato dava o tom era o **Senado** — um conselho de ex-magistrados, aristocrático, vitalício, que ninguém elegia diretamente.

## Interações

```json
[
  {
    "id": "i1",
    "type": "situated_decision",
    "claimId": "poder-fatiado",
    "objective": false,
    "prompt": "O rei caiu. O poder está nas suas mãos. O que você faz com ele?",
    "options": ["Entrego ao povo, com sorteio, como Atenas fará", "Divido entre dois chefes eleitos, com mandato de um ano", "Escolho um rei melhor, com conselheiros"],
    "errorPath": "Não há resposta errada — mas repare no que Roma escolheu: dividir, encurtar e vigiar o poder. O medo de Roma não era só de reis; era de qualquer pessoa com poder demais."
  },
  {
    "id": "i2",
    "type": "causal",
    "claimId": "recusa-sorteio",
    "objective": true,
    "prompt": "Por que Roma recusou o sorteio ateniense para seus cargos principais?",
    "options": [
      "Desconfiava do cidadão comum no comando: preferia eleição, hierarquia e experiência comprovada (cursus honorum)",
      "Copiou o modelo espartano de reis duplos, que não usava sorteio",
      "O sorteio exigia registros escritos que Roma ainda não tinha"
    ],
    "correct": 0,
    "errorPath": "A comparação com Esparta é tentadora (dois cônsules, dois reis…), mas o motivo registrado é outro: para a elite romana, governar exigia mérito demonstrado em serviço — cada degrau do cursus honorum era um teste. O sorteio tratava todos como iguais; Roma achava isso perigoso."
  },
  {
    "id": "i3",
    "type": "source_interpretation",
    "claimId": "quao-democratica",
    "objective": false,
    "prompt": "As assembleias romanas votavam leis e elegiam cônsules. Então… era uma democracia? Historiadores discordam — explore o debate.",
    "errorPath": "Debate historiográfico real, sem resposta fechada: o valor está em entender por que eleger não é o mesmo que governar."
  }
]
```

## Conexão

Agora você entende melhor: ✔ por que "república" e "democracia" não são sinônimos ✔ de onde vem a palavra veto ✔ por que mandatos têm prazo ✔ o que Atenas e Roma discordavam sobre você.
