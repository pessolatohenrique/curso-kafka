const NewOrderConsumer = require("./NewOrderConsumer");

class ConsumerInit {
  static initialize = async () => {
    await NewOrderConsumer.initialize();
  };
}

ConsumerInit.initialize();
