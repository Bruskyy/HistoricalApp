# Quem faz um imperador?

## Gancho

O imperador morreu esta manhã, sem deixar herdeiro claro. Você é um senador, um general com três legiões leais, e um sobrinho do imperador estão todos a caminho do palácio ao mesmo tempo. Não existe lei escrita dizendo quem herda o trono. O que decide quem vence?

## Narrativa

Aqui está o segredo incômodo do "império" romano: ele nunca foi, no papel, uma monarquia hereditária como as que vieram depois na Europa. Não havia lei fixando que o trono passava do pai para o filho mais velho, nem um processo formal e vinculante de escolha.

Na prática, três forças competiam: a **preferência do próprio imperador** (que podia indicar ou adotar um sucessor), a **ratificação do Senado** (que formalizava, mas raramente decidia sozinho) e, acima de tudo, a **lealdade do exército**. Um general com legiões dispostas a marchar sobre Roma tinha uma vantagem que nenhum título ou parentesco garantia sozinho.

Esse arranjo instável funcionou bem quando um imperador forte escolhia um sucessor competente — e explodiu em guerra civil quando não escolhia, ou quando morria de repente.

## Interações

```json
[
  {
    "id": "i1",
    "type": "situated_decision",
    "claimId": "sem-lei-de-sucessao",
    "objective": false,
    "prompt": "O imperador morreu sem herdeiro claro. Um sobrinho, um senador e um general com três legiões disputam o trono. Quem tem, na prática, a vantagem decisiva?",
    "options": ["O sobrinho — sangue do imperador sempre vence", "O senador — o Senado é quem legalmente escolhe", "O general — quem tem o exército, tem o trono"],
    "errorPath": "Título e parentesco pesavam, mas não decidiam sozinhos. Na hora da força, era o exército — não a genealogia nem o Senado — quem costumava definir o resultado."
  },
  {
    "id": "i2",
    "type": "causal",
    "claimId": "sem-lei-de-sucessao",
    "objective": true,
    "prompt": "Um imperador romano morre sem deixar instruções claras. O que decide, na prática, quem herda o trono?",
    "options": [
      "Uma disputa real entre herdeiro preferido, aval do Senado e, acima de tudo, quem o exército aclamar",
      "Uma lei escrita de sucessão hereditária direta, do pai para o filho mais velho",
      "Uma eleição popular nas assembleias, como na antiga República"
    ],
    "correct": 0,
    "errorPath": "Diferente de uma monarquia hereditária clássica, Roma nunca fixou uma regra. Na prática, quem tivesse a lealdade das legiões tinha a vantagem decisiva — o Senado geralmente só formalizava depois."
  },
  {
    "id": "i3",
    "type": "source_interpretation",
    "claimId": "fraqueza-estrutural-debate",
    "objective": false,
    "prompt": "Sem uma lei de sucessão fixa, o império viveu séculos de crises de trono — mas também séculos de correção por adoção de herdeiros capazes. Explore por que os historiadores discordam sobre se isso foi defeito ou virtude do sistema.",
    "errorPath": "Debate historiográfico real, sem resposta fechada: o valor está em ver que a mesma ausência de regra que causou guerras civis também permitiu que Roma, às vezes, escolhesse o melhor sucessor disponível — não necessariamente o mais próximo por sangue."
  }
]
```

## Conexão

Agora você entende melhor: ✔ por que a "dinastia" romana era mais frágil do que parecia ✔ o papel real do exército na política imperial ✔ por que a paz de um reinado não garantia paz nenhuma na sucessão seguinte.
