# Curso de Kafka

### Sobre

Projeto com o objetivo de compreender e aplicar os conceitos de Kafka, com base no curso [Kafka: Produtores, Consumidores e streams](https://www.alura.com.br/curso-online-kafka-introducao-a-streams-em-microservicos) da plataforma Alura

### Tecnologias

- Kafka
- Node 14.0.0

### Instalação do projeto

Realizar o clone do projeto

    git clone https://github.com/USER/curso-kafka.git

Acesse a pasta do projeto e rode o comando para instalar as dependências npm:

    npm install

É essencial que uma instância do Kafka esteja em execução. Exemplo:

    ./bin/zookeeper-server-start.sh config/zookeeper.properties
    ./bin/kafka-server-start.sh config/server.properties

Para executar o produtor, execute:

    npm run producer

Para compilar os consumidores, execute:

    npm run consumer
