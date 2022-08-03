const { KafkaConfig } = require("../config");

class NewOrderProducer {
  static initialize = async () => {
    const kafka = KafkaConfig.initialize();
    const producer = kafka.producer();

    await producer.connect();
    await producer.send({
      topic: "NEW_ORDER",
      messages: [{ value: "12345" }],
    });

    await producer.send({
      topic: "NEW_ORDER",
      messages: [{ value: "78901" }],
    });

    await producer.send({
      topic: "NEW_ORDER",
      messages: [{ value: "991" }],
    });

    await producer.disconnect();
  };
}

module.exports = NewOrderProducer;
