# GitHub Explorer

Aplicacao client-side em React para buscar usuarios do GitHub, listar repositorios, ordenar por estrelas e consultar detalhes de um repositorio.

O projeto foi estruturado com foco em separacao de responsabilidades, tipagem com TypeScript, tratamento de estados de interface e consumo organizado da API publica do GitHub.

## Funcionalidades

- Busca de usuario pelo login do GitHub.
- Exibicao de dados principais do usuario.
- Listagem de repositorios publicos.
- Ordenacao por quantidade de estrelas.
- Paginacao client-side da lista de repositorios.
- Tela de detalhes do repositorio.
- Link externo para abrir o repositorio no GitHub.
- Estados de carregamento, erro e lista vazia.
- Tratamento especifico para erros comuns da API, como usuario nao encontrado e limite de requisicoes.

## Tecnologias

- React
- TypeScript
- Vite
- React Router
- Axios
- Bootstrap
- Bootstrap Icons

## Como Executar

Instale as dependencias:

```bash
yarn install
```

Execute em modo de desenvolvimento:

```bash
yarn start
```

Acesse:

```text
http://localhost:5173
```

Gere a build de producao:

```bash
yarn build
```

Visualize a build localmente:

```bash
yarn preview
```

## Scripts

- `yarn start`: inicia o servidor de desenvolvimento com Vite.
- `yarn dev`: alias para iniciar o servidor de desenvolvimento.
- `yarn build`: executa a checagem TypeScript e gera a build de producao.
- `yarn preview`: serve localmente a build gerada.

## Estrutura Do Projeto

```text
src/
  components/
    common/        Componentes compartilhados, como Loader, EmptyState, ErrorMessage e Pagination.
    repository/    Componentes relacionados a repositorios.
    user/          Componentes relacionados a busca e exibicao de usuario.
  hooks/           Hooks responsaveis por buscar dados e controlar loading/error/data.
  pages/           Paginas principais da aplicacao.
  routes/          Configuracao das rotas.
  services/        Configuracao do Axios e chamadas para a API do GitHub.
  types/           Tipos compartilhados da aplicacao.
  utils/           Funcoes utilitarias reutilizaveis.
```

## Rotas

- `/`: pagina inicial com busca de usuario e listagem de repositorios.
- `/users/:username/repos/:repoName`: pagina de detalhes do repositorio.

## Decisoes Tecnicas

- As chamadas HTTP foram centralizadas em `src/services` para evitar acoplamento entre componentes e API externa.
- Os hooks encapsulam busca, `loading`, `error` e dados, mantendo as paginas mais declarativas.
- A ordenacao dos repositorios e feita no client com `useMemo`, evitando nova chamada para a API ao alternar a ordem.
- A paginacao atual tambem e client-side, baseada nos repositorios ja carregados.
- As rotas usam parametros para permitir acesso direto a pagina de detalhes de um repositorio.
- O tratamento de erro foi isolado em `getGithubErrorMessage`, permitindo diferenciar erros como `404`, `403` e falha de conexao.
- O projeto usa Vite para um setup mais moderno, rapido e simples que Create React App.

## Limitacoes Conhecidas

- A listagem carrega ate 100 repositorios por usuario usando `per_page=100`.
- Usuarios com mais de 100 repositorios nao terao todos os repositorios exibidos nesta versao.
- A API publica do GitHub possui limite de requisicoes e pode retornar erro `403`.
- A aplicacao nao usa autenticacao com token do GitHub.
- A busca, ordenacao e pagina atual ainda nao sao persistidas na URL.

## Melhorias Futuras

- Implementar paginacao real usando os parametros `page` e `per_page` da API do GitHub.
- Persistir estado de busca na URL com query params, por exemplo `?user=facebook&sort=desc&page=1`.
- Adicionar testes automatizados para componentes, hooks e fluxos principais.
- Adicionar Error Boundary para tratar falhas inesperadas de renderizacao.
- Considerar TanStack Query para cache, retry, deduplicacao de requests e controle mais robusto de estados assincronos.
- Adicionar suporte opcional a token do GitHub para reduzir problemas com rate limit.

## Qualidade E Boas Praticas

- TypeScript com `strict` habilitado.
- Componentes separados por dominio.
- Hooks dedicados para acesso a dados.
- Services tipados com os modelos da API.
- Links externos usam `rel="noopener noreferrer"`.
- Estados de loading, erro e vazio tratados explicitamente.
- Rotas declarativas com React Router.
- UI responsiva baseada em Bootstrap.

## Observacoes Para Avaliacao

Este projeto prioriza clareza de organizacao, tipagem e separacao de responsabilidades. A solucao atual atende ao fluxo principal do desafio, mantendo algumas decisoes simples e documentadas, como paginacao client-side e limite de 100 repositorios por usuario.

Para uma versao mais proxima de producao, os principais proximos passos seriam paginacao real da API, persistencia do estado na URL, testes automatizados e uso de cache para requisicoes.
