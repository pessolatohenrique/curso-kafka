const { KafkaConfig } = require("../config");

class NewCustomerProducer {
  static initialize = async () => {
    const kafka = KafkaConfig.initialize();
    const producer = kafka.producer();

    await producer.connect();
    await producer.send({
      topic: "NEW_CUSTOMER",
      messages: [
        {
          key: Math.floor(Math.random() * 100000).toString(),
          value: JSON.stringify({
            id: Math.floor(Math.random() * 100000),
            name: "Giovanna",
            age: 35,
            gender: "F",
          }),
        },
        {
          key: Math.floor(Math.random() * 100000).toString(),
          value: JSON.stringify({
            id: Math.floor(Math.random() * 100000),
            name: "Carlos",
            age: 30,
            gender: "M",
          }),
        },
        {
          key: Math.floor(Math.random() * 100000).toString(),
          value: JSON.stringify({
            id: Math.floor(Math.random() * 100000),
            name: "Mariana",
            age: 25,
            gender: "F",
          }),
        },
      ],
    });

    await producer.disconnect();
  };
}

module.exports = NewCustomerProducer;
