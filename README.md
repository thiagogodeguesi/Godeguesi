# Godeguesi
Site [Godeguesi](www.goseguesi.com.br)

## Criacao do site
Prentendendo criar varias solucoes, conforme o tempo tambem colocarei esperiencias e casos ja trabalhados e possivelmente com modelos.
Irei trazer espectativa (Historia do cliente), solucao aplicada (solucao aplicada com pros e contras, juntamente possiveis solucoes que encontramos), desefios do desenvolvimento (desafio encontrado ao se desenvolver, como bugs, erros e acertos e solucoes encontradas para atender).

Toda e qualquer dica, reclamacao ou sugestao, estou disponivel no email. thiago@godeguesi.com.br

## **Indice**

1. **Roteiro**
2. **Desenvolvimento**
3. **Solucões Utilizadas**

## **Roteiros**
Não nescessariamente sera criado na sequencia que esta na nossa lista, mas o que esta na lista esta criado, e/ou desenvolvimento, ou em planejamento.

1. **Criação do site.**
   A ideia é que deixe na nossa pagina principal um pouco do nosso curriculo, com exemplos de teste e aplicacoes utilizadas. 

2. **Criação do formulario.**
   Sera criado um formulario que sera utilizado para modelos de dados, apesar de ter poucos informacoes sera utilizados para proporcionar testes.

3. **API Visitantes.**
   Api para cadastrar os dados dos visitantes do site ja esta e, desenvolvimento em python + Swagger.
   A API de visitantes nao estara disponivel para consulmo, mas sera criado algumas que estara para o cunsumo. 
   

   ## POST
   O post sera aonde sera gravado as informacoes do formulario dos visitantes. 

   ## GET
   O get podera ser buscado `as informacoes dos visitantes. (obs1)
   
   ## GET {ID} - *No momento nao disponivel.*
   Seu funcionamento e muito parecido com o funcionamento do *GET*, mas ao inves de retornar todos os dados, retornara apenas o dado selecionado pelo *ID*.

   ## PUT - *Não disponivel*
   Na API de visitante nao interessa a alteracao dos dados. 

   ## DELETE - *Não disponivel*
   Na API de visitantes nao existe o interesse de excluir esses dados.


# Desenvolvimento
O site no momento dessa escrita tinha apenas um "Hello World".
Mas com o tempo sera criado uma forma que possa gerar interacoes entre os visitantes e o criador deste site.

## Site 
O site nao temos nada definido sobre qual tecnologia que sera utilizado, penso que sera uma juncao de varias tecnologias, não sei como sera e como ira funcionar, mas sera assim.

* **Pagina Home** - Possivelmente tera algumas informacoes de projetos que estamos tocando e mesmo o que ja fizemos.

* **Pagina Visitantes** - Teremos uma pagina aonde os visitantes poderao informar dados para podermos usar em nossos teste. 
Essa pagina tem um relacionamento com o POST de nossa API de visitantes. 
A ideia é utilizar os dados para futuros testes como, nome mais cadastrado, sobrenome mais utilizado, quantos utilizam provedor XYZ, cidades e estados.
Nao sendo obrigatorio nenhuma informacao.
Essa pagina estou pensando em criar em PHP, mas nao planejado, devo analizar tambem a utilizacao de HTML com Bootstrap. 



***DEIXO CLARAMENTE EXPLICADO QUE OS DADOS UTILIZADOS PODERAO SER UTILIZADOS EM TESTES, MAS NAO ESTARA DISPONIVEL O DADO DO 'EMAIL'. NÃO A INTENSAO DE VENDER OU UTILIZAR OS DADOS PARA MARKETING NO MOMENTO DESTE, CASO HAJA QUALQUER QUER INTENSAO DESTA A MESMA SERA INFORMADA NO EMAIL CADASTRADO.***

## API Visitantes
Nesta API queria utilizar o swagger para ter uma integracao inicial. 
A principio a mesma utiliza Python + Flask. E para auxiliar nas documentacoes futuras tentei fazer uma forma de utilizar o Swagger. Nao irei mentir mas sofri um pouco por conta das versoes do Flask, mas no final esta dando certo. 

   

# Soluções utilizadas

O site pretendo utilizar PHP. ?

A API dos Visitantes esta criada em Python + Flask + Swagger.