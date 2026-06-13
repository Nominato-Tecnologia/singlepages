# singlepages

Projeto de páginas estáticas públicas, de uso geral da organização e de seus clientes.

Este repositório tem como objetivo centralizar páginas simples, estáticas e independentes, que possam ser publicadas no GitHub Pages e acessadas por meio de URLs públicas.

A proposta é manter um único projeto para hospedar diferentes single pages, landing pages, páginas institucionais simples, políticas de privacidade, páginas de divulgação, páginas acessadas por QR Code e outros conteúdos estáticos de baixa complexidade.

## Objetivo do projeto

O projeto `singlepages` foi criado para facilitar a publicação rápida de páginas HTML estáticas, sem necessidade de backend, banco de dados ou infraestrutura dedicada.

Cada página pode atender a uma necessidade específica da organização ou de um cliente, mantendo sua própria pasta, seus próprios arquivos e sua própria identidade visual quando necessário.

## Estrutura sugerida

```text
singlepages/
├── README.md
├── index.html
├── pages/
│   └── albano-fusca-1975/
│       ├── index.html
│       └── assets/
│           ├── css/
│           │   └── style.css
│           ├── js/
│           │   └── script.js
│           └── img/
└── shared/
    ├── css/
    ├── js/
    └── img/
```

## Organização das páginas

Cada cliente, campanha ou página específica deverá ficar dentro da pasta `pages/`.

Exemplo:

```text
pages/albano-fusca-1975/
```

Dessa forma, o projeto continua sendo único e genérico, mas cada página permanece isolada e organizada.

## Cliente: Albano Centro Automotivo

A primeira página deste repositório será criada para o cliente **Albano Centro Automotivo**.

O objetivo da página é divulgar um veículo à venda por meio de uma URL pública, que será usada para gerar um QR Code impresso.

Esse QR Code poderá ser colocado no próprio veículo, em cartazes, panfletos ou outros materiais de divulgação. Ao escanear o código, o interessado será direcionado para a página estática com as principais informações do carro e o contato para negociação.

### Página: Fusca 1975

A página inicial do cliente Albano será um anúncio digital para o seguinte veículo:

**Fusca ano 1975 motor 1300**

Informações do anúncio:

- Documento 🆗
- Ar-condicionado gelado 🥶 🔝
- Roda 🛞 aro 17
- Pneu 🛞 novo
- Estofado tudo 💯
- Valor: R$ 40.000,00
- Contato: Albano — 61 98654-5934

## Publicação

O projeto será publicado usando GitHub Pages.

Após a publicação, cada página poderá ser acessada por uma URL pública baseada no caminho da pasta.

Exemplo de URL esperada:

```text
https://usuario-ou-organizacao.github.io/singlepages/pages/albano-fusca-1975/
```

Essa URL será utilizada para gerar o QR Code do anúncio.
