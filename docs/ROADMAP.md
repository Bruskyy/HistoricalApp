# Roadmap

> Planejamento de fases e trilhos de trabalho. As *definições* de cada release estão no [`PRD.md`](PRD.md) §8; as fases de produto na [`VISION.md`](VISION.md) §16.2. Este arquivo organiza a sequência e os trilhos paralelos; o detalhamento por item está no [`BACKLOG.md`](BACKLOG.md).

## Fases

```
R0  Protótipo navegável (Figma)      → valida Corredor + escolha de módulo
R1  Piloto fechado (coorte convidada)→ valida o loop (O1-O5 do PRD) + experimentos
R2  MVP público (lojas)              → valida em coorte aberta; naming resolvido
V1  Identidade                       → Museu, Atlas Vivo, colecionáveis, IA explicativa,
                                       desafio da semana, ranking assíncrono
V2  Coletivo                         → Ordens (ligas), eventos temáticos, retrospectiva
V3+ Plataforma                       → quiz mundial, IA persistente, 2º domínio, B2B
```

## Trilhos paralelos (a partir de agora)

| Trilho | Conteúdo | Observação |
|---|---|---|
| **A — Conteúdo** | Jornada-piloto: pipeline editorial completo (LDD §2) + medição de processo (LDD §9.2) | **Caminho crítico do R1** — começa antes do código; exige contratar/parceirizar revisor especialista |
| **B — Produto/Design** | Protótipo R0; identidade visual conceitual; teste de naming (VISION §19) | Naming precisa fechar antes da ficha das lojas (R2) |
| **C — Engenharia** | Fundação (repo, CI/CD, esqueleto app+API) → pacote SRS compartilhado → loop vertical fino → sistemas de suporte | Ordem no BACKLOG.md |
| **D — Validação** | Testes com usuários no R0; instrumentação + experimentos no R1; decisões registradas (XP, títulos) | Nenhuma fase avança sem responder a pergunta da anterior |

## Regras de passagem

- R0 → R1: usuários entendem o Corredor sem explicação e escolhem módulo com interesse genuíno.
- R1 → R2: O1-O2 do PRD atingidos ou recalibrados com justificativa; experimentos decididos; calibração revisada.
- R2 → V1: retenção confirmada em coorte aberta; só então a pergunta "a identidade aprofunda?" é aberta.
