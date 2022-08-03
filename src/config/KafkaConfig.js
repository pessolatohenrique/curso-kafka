const { Kafka } = require("kafkajs");

class KafkaConfig {
  static initialize = () => {
    const kafka = new Kafka({
      clientId: "curso-kafka",
      brokers: ["localhost:9092"],
    });

    return kafka;
  };
}

module.exports = KafkaConfig;
