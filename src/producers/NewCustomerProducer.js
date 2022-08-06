const { KafkaConfig } = require("../config");

class NewCustomerProducer {
  static initialize = async () => {
    const kafka = KafkaConfig.initialize();
    const producer = kafka.producer();

    await producer.connect();
    await producer.send({
      topic: "NEW_CUSTOMER",
      messages: [{ value: "10" }],
    });

    await producer.send({
      topic: "NEW_CUSTOMER",
      messages: [{ value: "20" }],
    });

    await producer.send({
      topic: "NEW_CUSTOMER",
      messages: [{ value: "30" }],
    });

    await producer.send({
      topic: "NEW_CUSTOMER",
      messages: [{ value: "40" }],
    });

    await producer.disconnect();
  };
}

module.exports = NewCustomerProducer;
