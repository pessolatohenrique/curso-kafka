const { ConsumerWrapper } = require("../utils");

class NewOrderConsumer {
  static initialize = async () => {
    await ConsumerWrapper.initialize({
      name: "NewOrderConsumer",
      groupId: "new-order-group",
      topics: ["NEW_ORDER"],
      fromBeginning: false,
    });
  };
}

module.exports = NewOrderConsumer;
