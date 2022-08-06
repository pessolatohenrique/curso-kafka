const { KafkaConfig } = require("../config");

class LogConsumer {
  static initialize = async () => {
    const kafka = KafkaConfig.initialize();

    const consumer = kafka.consumer({ groupId: "log-new-order-group" });

    await consumer.connect();
    await consumer.subscribe({ topic: "NEW_ORDER", fromBeginning: false });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          Consumer: "LogConsumer",
          topic,
          partition,
          value: message.value.toString(),
        });
      },
    });
  };
}

module.exports = LogConsumer;
