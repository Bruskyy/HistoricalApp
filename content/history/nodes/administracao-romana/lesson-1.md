# As estradas que seguravam o mundo

## Gancho

Uma revolta acabou de estourar na fronteira do Reno, a mais de mil quilômetros de Roma. Uma legião precisa chegar lá em semanas, não meses — ou a fronteira inteira cai. O que Roma constrói primeiro, antes mesmo de qualquer templo ou fórum?

## Narrativa

Foram mais de 80 mil quilômetros de estrada pavimentada — o suficiente para dar duas voltas na Terra. Retas onde dava, com fundação de pedra em camadas, drenagem para não afundar na chuva. A engenharia era, antes de tudo, militar: uma legião que levava meses para cruzar terreno bruto passou a levar semanas numa via romana.

Mas uma estrada não sabe quem a usa. Atrás das legiões vinham os mercadores, os correios do governo, os viajantes — e o comércio que crescia sobre a mesma pedra que a guerra tinha assentado primeiro.

## Interações

```json
[
  {
    "id": "i1",
    "type": "situated_decision",
    "claimId": "malha-de-estradas",
    "objective": false,
    "prompt": "Roma precisa mover legiões rápido por um território do tamanho da Europa inteira. O que ela constrói primeiro?",
    "options": ["Um exército permanente gigante em cada fronteira", "Uma rede de estradas pavimentadas ligando Roma a todas as fronteiras", "Navios de guerra em cada rio e costa"],
    "errorPath": "Manter um exército gigante parado em cada fronteira custaria mais do que Roma podia pagar. A solução foi mover rápido, não ficar parado: estradas que levassem a legião certa ao lugar certo, na hora certa."
  },
  {
    "id": "i2",
    "type": "causal",
    "claimId": "malha-de-estradas",
    "objective": true,
    "prompt": "Por que as estradas romanas foram construídas primeiro para as legiões, e só depois viraram rotas de comércio?",
    "options": [
      "Um império do tamanho de Roma só se defendia se conseguisse mover exércitos rápido até a fronteira certa, a tempo — a prioridade era militar",
      "Os comerciantes pressionaram o Senado a financiar a construção",
      "As estradas surgiram como projeto de urbanização das cidades, sem relação com o exército"
    ],
    "correct": 0,
    "errorPath": "A rede começou como infraestrutura militar — legiões precisavam alcançar qualquer fronteira em semanas, não meses. O comércio se beneficiou depois, andando sobre uma estrada que a guerra construiu primeiro."
  },
  {
    "id": "i3",
    "type": "application",
    "claimId": "direito-unificador",
    "objective": true,
    "prompt": "Um provincial recém-tornado cidadão romano, no auge do império, ganhava com isso…",
    "options": [
      "Proteção legal e direitos antes reservados a quem nascia em Roma — um vínculo formal com o Estado, não só militar",
      "Isenção total de impostos pelo resto da vida",
      "O direito automático de sentar no Senado"
    ],
    "correct": 0,
    "errorPath": "Cidadania romana era, sobretudo, proteção jurídica — o direito de apelar a um tribunal romano, entre outras garantias. Não isentava de impostos nem dava assento automático no Senado; era um vínculo legal, não um prêmio econômico."
  }
]
```

## Conexão

Agora você entende melhor: ✔ por que Roma construía estradas antes de qualquer outra coisa ✔ como uma via militar virou rota de comércio ✔ que a mesma engenharia que conquistava também integrava.
