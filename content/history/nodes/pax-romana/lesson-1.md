# Um acordo, duzentos anos

## Gancho

Você acabou de vencer a última guerra civil romana. Seu rival está morto, as legiões são suas, o Senado não tem exército próprio para te deter. Júlio César, seu pai adotivo, teve exatamente esse poder — e foi esfaqueado 23 vezes por parecer querer ser rei. O que você faz com o poder que sobrou?

## Narrativa

Foi exatamente esse o dilema de Augusto — e ele resolveu com um truque. Manteve o Senado, os cônsules, as eleições: a maquinaria inteira da República continuou funcionando, ano após ano, como se nada tivesse mudado. Mas por trás da fachada, era ele quem controlava as legiões, o tesouro e, cada vez mais, quem seria eleito para o quê.

O resultado foi chamado depois de **Principado**: Augusto era formalmente "o primeiro cidadão" (*princeps*), não um rei — mas ninguém em Roma tinha dúvida sobre quem mandava.

E funcionou. Depois de quase um século de guerras civis — César contra Pompeu, depois Otaviano contra Marco Antônio — o acordo de Augusto abriu duzentos anos sem que romano matasse romano por causa do trono.

## Interações

```json
[
  {
    "id": "i1",
    "type": "situated_decision",
    "claimId": "fim-guerras-civis",
    "objective": false,
    "prompt": "O poder é seu. Como você o segura sem repetir o erro de César?",
    "options": ["Me coroo rei — o poder já é meu de qualquer jeito", "Mantenho Senado e cônsules de fachada, e seguro o poder real por trás deles", "Devolvo o poder ao Senado e me aposento"],
    "errorPath": "Roma jurou nunca mais ter um rei desde 509 a.C. — o título matou César. Augusto (como Otaviano passou a se chamar) escolheu a segunda opção: todo o poder, nenhum dos títulos que o custariam a vida."
  },
  {
    "id": "i2",
    "type": "causal",
    "claimId": "fim-guerras-civis",
    "objective": true,
    "prompt": "Por que Augusto manteve Senado e cônsules em vez de simplesmente se coroar rei?",
    "options": [
      "Roma jurou nunca mais ter um rei — poder real sem o título evitava o destino de César",
      "A lei romana proibia formalmente o título de rei em qualquer circunstância",
      "O Senado ainda tinha exército próprio suficiente para impedi-lo"
    ],
    "correct": 0,
    "errorPath": "O Senado já não tinha exército — Augusto controlava as legiões sozinho. A escolha foi de tato político: César morreu por parecer querer ser rei; Augusto vestiu o mesmo poder com roupas republicanas."
  },
  {
    "id": "i3",
    "type": "application",
    "claimId": "paz-romana-fato",
    "objective": true,
    "prompt": "Uma cidade provincial no auge da Pax Romana provavelmente via…",
    "options": [
      "Mais estradas, mais comércio e menos exércitos romanos brigando entre si do que em décadas de guerra civil",
      "O mesmo nível de guerra de sempre, só que agora com um vencedor definido",
      "Isolamento total do resto do império, sem nenhuma troca"
    ],
    "correct": 0,
    "errorPath": "\"Paz\" aqui não é silêncio total — é a ausência da guerra civil que sangrou Roma por um século. Menos legiões brigando entre si significou mais estrada livre para o mercador, não um mundo sem exército nenhum."
  }
]
```

## Conexão

Agora você entende melhor: ✔ por que Roma trocou república por império sem parecer que trocou ✔ o que significa "Pax Romana" de verdade ✔ por que o título de rei era mais perigoso que o poder de rei.
