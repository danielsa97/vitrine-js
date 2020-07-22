# Vitrine JS

 Biblioteca(embed code) Vitrine para exibição de LIVROS a partir de API. \
 Acesse a [DEMO ONLINE](https://danieldesa.com/project/vitrine-js) para visualizar o funcionamento.

 ## Dependências
 A biblioteca busca ser independente, com isso, ao final do processo de build 
 não será necessário adicionar bibliotecas adicionais(jQuery, Bootstrap, etc...)
 para correto funcionamento.
 
 É recomendado utilizar uma versão atual de navegador de internet,
 a biblioteca utiliza recursos do Javascript que podem não estar disponíveis em versões mais antigas.
 
 Estas são as bibliotecas utilizadas no desenvolvimento do VitrineJS.
 - VueJS
 
## Requisitos dos sistema
 - Git
 - NodeJs: ^10.15.0
 - NPM: última versão estável

## Configurando o projeto
Siga os passos abaixo para testar, alterar ou gerar novas versões da biblioteca.
 - Faça o clone do projeto 
```
git clone https://github.com/danielsa97/vitrine-js.git
```
 - Acesse a pasta do projeto e instale os módulos necessários

```
npm install
```

#### Compilar e testar (DESENVOLVIMENTO)

```
npm run serve
```
Este comando executa a aplicação em modo de desenvolvimento.\
Toda alteração realizada no código será automaticamente renderizado na tela.

Por padrão, será gerado o acesso em: http://localhost:8080


#### Gerando o código final (BUILD)

```
npm run build
```
Este comando gera o código final(de produção) da biblioteca, será criado uma pasta `dist`
na raiz do projeto com os seguintes arquivos:
- vitrine.min.js
- vitrine.min.js.map
- vitrine.min.css
- index.html

Você pode testar a apresentação final da biblioteca em seu navegador de internet,
para isso acesse a pasta `dist` e abra o arquivo `index.html` em seu navegador de internet.


### Incorporando a biblioteca em um site
Após gerar o código final(de produção) da biblioteca,
copie os arquivos da pasta `dist` para seu site(para este exemplo vamos considerar que os arquivos serão inseridos na raiz da pasta publica do site).

Na sessão `<head>` do site inclua o arquivo CSS da biblioteca.
```html
    <link href="vitrine.min.css" rel="stylesheet" type="text/css">
```

Na sessão `<body>` inclua uma `div` com id chamada `vitrine`.

```html
    <div id="vitrine"></div>
```

Antes de finalizar a sessão `<body>` inclua os scripts abaixo para inicializar a biblioteca.

```html

<script src=vitrine.min.js></script>
<script>
    VitrineJS('https://blackbox-v1-submarino.b2w.io/defer/produto/1708602357?pfm_carac=livro');
</script>

```
Veja um exemplo de implementação.
```html

<!DOCTYPE html>
<html lang=pt-br>
<head>
    <meta charset=utf-8>
    <meta http-equiv=X-UA-Compatible content="IE=edge">
    <meta name=viewport content="width=device-width,initial-scale=1">
    <title>VitrineJS</title>
    <link href="vitrine.min.css" rel="stylesheet">
</head>
<body>
<noscript><strong>Seu navegador não suporta aplicações Javascript.</strong></noscript>
<br>
<div id="vitrine"></div>
<script src=vitrine.min.js></script>
<script>
    VitrineJS('https://blackbox-v1-submarino.b2w.io/defer/produto/1708602357?pfm_carac=livro');
</script>
</body>
</html>

```
É possível adicionar várias vitrines ao site, contudo é preciso gerar novas 
div's com id's diferentes para não gerar conflitos, para isso, ao iniciar uma nova vitrine passe como argumento em um segundo parametro o `id` da nova vitrine(por padrão o id é `vitrine` e não precisa ser informado).

```html

<div id="vitrine"></div>
<div id="vitrine2"></div>

<script src=vitrine.min.js></script>
<script>
    VitrineJS('https://blackbox-v1-submarino.b2w.io/defer/produto/1708602357?pfm_carac=livro');
    VitrineJS('https://blackbox-v1-submarino.b2w.io/defer/produto/1708602357?pfm_carac=livro',{
        id:'vitrine2'
    });
</script>


```

### Configurações
É possível modificar  alguns parametros de estilização e configuração da biblioteca a fim de adapta-la
ao design do site.
```javascript

 VitrineJS('https://blackbox-v1-submarino.b2w.io/defer/produto/1708602357?pfm_carac=livro', {
        id: 'vitrine', //Altera a div de inicialização da biblioteca
        bgCard: '#f8f9fa', //Altera a cor de fundo dos cards de produto. EX: rgba(0, 0, 0, 0.5), #ffffff, rgb(152, 115, 250)
        bgModal: 'rgba(0, 0, 0, 0.9)', //Altera a cor de fundo do modal de detalhes do produto. EX: #ffffff, rgb(152, 115, 250)
        colorTextModal: '#fff', //Altera a cor de texto do modal de detalhes do produto. EX: #ffffff, rgb(152, 115, 250)
        mainColor: '#007bff', //Altera a cor padrão do sistema. EX: #ffffff, rgb(152, 115, 250)
    });
```

É possível consumir outra API da dados desde que a mesma siga a estrutura definida na 
API padrão(https://blackbox-v1-submarino.b2w.io/defer/produto/1708602357?pfm_carac=livro).


**Daniel de Sá** \
[contato@danieldesa.com](contato@danieldesa.com)\
https://danieldesa.com
