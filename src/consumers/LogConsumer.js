const { ConsumerWrapper } = require("../utils");

class LogConsumer {
  static initialize = async () => {
    await ConsumerWrapper.initialize({
      name: "LogConsumer",
      groupId: "log-new-order-group",
      topics: ["NEW_ORDER", "NEW_CUSTOMER"],
      fromBeginning: false,
    });
  };
}

module.exports = LogConsumer;
