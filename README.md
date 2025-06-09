1 - Rodar o projeto: Para rodar o projeto deve-se entrar na pasta do backend e subi-lo com o comando node server.js no terminal e acessar o endereço localhost:3000, se aparecer "Backend is running" no localhost significa que o projeto subiu com sucesso. Para subir o front deve se entrar na pasta de front end e digitar o comando npm start, o que deverá abrir uma nova janela com a tela da votação, o que significa que o frontend subiu com sucesso.

Comando para subir o backend no terminal: node server.js
Comando para subir o frontend no terminal: npm start

2 - Estrutura: O Projeto foi estruturado se dividindo em backend(Node.js) e frontend(React.js), foi usado o SQLITE como banco de dados, e foi usado um mock para substituir a API que não está funcionando, também foi usado o Artillery para testes de performance.

3 - Ao tentar utilizar a API de CPF mostrada no exercício 1, foi retornado com o erro 404 o que não permitiu a continuação ideal do exercício utilizando a API, por isso acabei fazendo um mock dos CPFs para tentar contornar o erro.

4 - Foi utilizado o Artillery para os testes de performance do exercício 3, foi criado um arquivo chamado artillery-config.json que simula uma requisição POST enviada ao localhost:3000 com uma duração de 60 segundos e simulando 100 requisições por segundo, para ver o resultado do teste, basta rodar o comando artillery run artillery-config.json.

Comando para rodar o Artillery: artillery run artillery-config.json

5 - CPFs para utilizar no mock: 
    "12345678901"
    "98765432100"
    "45678912345"
    "32165498700"
    "74185296300"
    "36925814700"
    "85214796300"
    "14785236900"
    "25836914700"
    "15975348600"
