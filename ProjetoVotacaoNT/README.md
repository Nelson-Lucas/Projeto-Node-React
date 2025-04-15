<<<<<<<<<<<<<<<<<<---------------Instruções sobre o projeto------------------>>>>>>>>>>>>>>>>>>>>>>
1 - Escolha da linguagem: Decidi fazer o projeto em React/Node pois tenho maior proeficiência nas tecnologias do que em Java, como o prazo era curto e o projeto é de tamanho médio, decidi escolher as tecnologias no qual tenho mais afinidade.

2 - Rodar o projeto: Para rodar o projeto deve-se entrar na pasta do backend e subi-lo com o comando node server.js no terminal e acessar o endereço localhost:3000, se aparecer "Backend is running" no localhost significa que o projeto subiu com sucesso. Para subir o front deve se entrar na pasta de front end e digitar o comando npm start, o que deverá abrir uma nova janela com a tela da votação, o que significa que o frontend subiu com sucesso.

Comando para subir o backend no terminal: node server.js
Comando para subir o frontend no terminal: npm start

3 - Estrutura: O Projeto foi estruturado se dividindo em backend(Node.js) e frontend(React.js), foi usado o SQLITE como banco de dados, e foi usado um mock para substituir a API que não está funcionando, também foi usado o Artillery para testes de performance.

4 - Ao tentar utilizar a API de CPF mostrada no exercício 1, foi retornado com o erro 404 o que não permitiu a continuação ideal do exercício utilizando a API, por isso acabei fazendo um mock dos CPFs para tentar contornar o erro.

5 - Foi utilizado o Artillery para os testes de performance do exercício 3, foi criado um arquivo chamado artillery-config.json que simula uma requisição POST enviada ao localhost:3000 com uma duração de 60 segundos e simulando 100 requisições por segundo, para ver o resultado do teste, basta rodar o comando artillery run artillery-config.json.

Comando para rodar o Artillery: artillery run artillery-config.json

6 - Não utilizei serviços de mensageria pois achei que adicionaria uma complexidade maior a um projeto que não está 100% finalizado e que tinha um prazo curto, até tentei usar o Redis e o RabbitMQ mas acabei desistindo da ideia.

7 - Resposta da pergunta 4: Para versionar minha aplicação, pensaria em um versionamento de forma semântica utilizando v1 para uma versão inicial do projeto(ainda não finalizada) e v2 para uma versão futura no projeto já com novas features e tendo uma performance melhor, e ir progredindo conforme a aplicação escale. Também faria uma documentação dessas versões explicando ao cliente as novas features de cada nova versão e documentando para tirar eventuais dúvidas.

Exemplo: Projeto Votação NT 1.0 - Versão Inicial
Projeto Votação NT 2.0 - Versão final com novas features e melhoria em performance
Projeto Votação NT 2.1 - Pequenas melhorias.

8 - O Projeto não foi finalizado e ao tentar rodar o projeto poderá se deparar com um bug ao cadastrar o cpf no campo de votação usando qualquer cpf do mock, o motivo se dá pois não tive tempo de finalizar o projeto visto que me deram o prazo de 3 dias úteis e acabei trabalhando no período restando apenas o período da noite para me dedicar ao teste, ainda assim espero que os desenvolvedores possam analisar o projeto e entender um pouco da lógica e estrutura usadas para construir o projeto para a avaliação.

9 - CPFs para utilizar no mock: 
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