const { ConsumerWrapper } = require("../utils");

class NewOrderConsumer {
  static initialize = async () => {
    await ConsumerWrapper.initialize({
      name: "NewOrderConsumer",
      groupId: "new-order-group",
      topics: ["NEW_ORDER"],
      fromBeginning: false,
      customFunction: function ({ topic, partition, message }) {
        console.log("custom function!", topic, message.value.toString());
      },
    });
  };
}

module.exports = NewOrderConsumer;
