const NewOrderConsumer = require("./NewOrderConsumer");
const LogConsumer = require("./LogConsumer");

class ConsumerInit {
  static initialize = async () => {
    await NewOrderConsumer.initialize();
    await LogConsumer.initialize();
  };
}

ConsumerInit.initialize();
