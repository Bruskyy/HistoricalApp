# O sorteio que escandalizaria hoje

## Gancho

Você é um cidadão de Atenas, 450 a.C. Amanhã a cidade escolhe quem vai administrar o tesouro público. Como você prefere escolher?

## Narrativa

Se você respondeu "votando no melhor candidato", os atenienses discordariam de você — com veemência.

Para a democracia ateniense, **eleição era coisa de aristocrata**: quem vence eleições é quem tem nome, dinheiro e boa oratória. O método verdadeiramente democrático, para eles, era o **sorteio**. Qualquer cidadão podia ser sorteado para a maioria dos cargos públicos — do conselho que preparava as leis aos tribunais populares.

A lógica: se todo cidadão é capaz de participar do governo, o acaso é mais justo que a fama. Eleições existiam, mas eram reservadas às poucas funções que exigiam técnica comprovada — como generais.

## Interações

```json
[
  {
    "id": "i1",
    "type": "situated_decision",
    "claimId": "sorteio-magistrados",
    "objective": false,
    "prompt": "Como você escolheria o administrador do tesouro?",
    "options": ["Eleição com candidatos", "Sorteio entre os cidadãos", "Indicação pelos mais ricos"],
    "errorPath": "Não há resposta errada aqui — mas a escolha ateniense vai te surpreender."
  },
  {
    "id": "i2",
    "type": "causal",
    "claimId": "sorteio-magistrados",
    "objective": true,
    "prompt": "Por que os atenienses viam o sorteio como MAIS democrático que a eleição?",
    "options": [
      "Porque a eleição favorece quem tem fama, dinheiro e oratória",
      "Porque o sorteio era mais rápido de organizar",
      "Porque os deuses escolhiam os sorteados"
    ],
    "correct": 0,
    "errorPath": "A rapidez não era o ponto — o argumento era de igualdade: a eleição premia vantagens que nem todo cidadão tem (nome, riqueza, retórica); o sorteio trata todos os cidadãos como igualmente capazes de governar."
  },
  {
    "id": "i3",
    "type": "source_interpretation",
    "claimId": "motivacao-reformas",
    "objective": false,
    "prompt": "Historiadores debatem: a democracia nasceu da ação popular ou da disputa entre elites? Explore as duas leituras.",
    "errorPath": "Este é um debate historiográfico real — não existe resposta fechada; o valor está em conhecer as posições e suas evidências."
  }
]
```

## Conexão

Agora você entende melhor: ✔ por que "democracia representativa" teria soado estranho em Atenas ✔ o debate moderno sobre sorteio em conselhos cidadãos ✔ o que Roma decidiu fazer diferente.
