const { KafkaConfig } = require("../config");

class ConsumerWrapper {
  static initialize = async ({ name, groupId, topics, fromBeginning }) => {
    const kafka = KafkaConfig.initialize();

    const consumer = kafka.consumer({ groupId });

    await consumer.connect();
    await consumer.subscribe({
      topics,
      fromBeginning,
    });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          Consumer: name,
          topic,
          partition,
          value: JSON.parse(message.value.toString()),
        });
      },
    });
  };
}

module.exports = ConsumerWrapper;
