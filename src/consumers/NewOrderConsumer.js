const { KafkaConfig } = require("../config");

class NewOrderConsumer {
  static initialize = async () => {
    const kafka = KafkaConfig.initialize();

    const consumer = kafka.consumer({ groupId: "new-order-group" });

    await consumer.connect();
    await consumer.subscribe({ topic: "NEW_ORDER", fromBeginning: false });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          topic,
          partition,
          value: message.value.toString(),
        });
      },
    });
  };
}

module.exports = NewOrderConsumer;
