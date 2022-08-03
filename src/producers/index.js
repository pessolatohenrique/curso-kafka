const NewOrderProducer = require("./NewOrderProducer");

class ProducerInit {
  static initialize = async () => {
    await NewOrderProducer.initialize();
  };
}

ProducerInit.initialize();
