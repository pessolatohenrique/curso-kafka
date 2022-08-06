const { KafkaConfig } = require("../config");

class NewOrderProducer {
  static initialize = async () => {
    const kafka = KafkaConfig.initialize();
    const producer = kafka.producer();

    await producer.connect();
    await producer.send({
      topic: "NEW_ORDER",
      messages: [
        { key: Math.floor(Math.random() * 100000).toString(), value: "12345" },
      ],
    });

    await producer.send({
      topic: "NEW_ORDER",
      messages: [
        { key: Math.floor(Math.random() * 100000).toString(), value: "78901" },
      ],
    });

    await producer.send({
      topic: "NEW_ORDER",
      messages: [
        { key: Math.floor(Math.random() * 100000).toString(), value: "991" },
      ],
    });

    await producer.disconnect();
  };
}

module.exports = NewOrderProducer;
