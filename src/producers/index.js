const NewOrderProducer = require("./NewOrderProducer");
const NewCustomerProducer = require("./NewCustomerProducer");

class ProducerInit {
  static initialize = async () => {
    await NewOrderProducer.initialize();
    await NewCustomerProducer.initialize();
  };
}

ProducerInit.initialize();
