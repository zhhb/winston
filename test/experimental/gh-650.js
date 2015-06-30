var winston = require('./');

function formatter(args) {
  return "some formatting: ";
}

var weirdLogger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      json: false,
      formatter: formatter
    }),
    new (winston.transports.File)({
      filename: "weirdLogger.csv",
      json: false,
      formatter: formatter
    })
  ]
});

var workingLogger = new (winston.Logger)({
  transports: [
        new (winston.transports.Console)({
          json: false
        }),
        new (winston.transports.File)({
          filename: "workingLogger.csv",
          json: false
        })
    ]
});

function weirdLogTest() {
  weirdLogger.info("test1");
  workingLogger.info("test2");
};

function expectedBehaviorLogTest() {
  weirdLogger.info("test1: " + new Date().getTime());
  workingLogger.info("test2: " + new Date().getTime());
};

setInterval(weirdLogTest, 1000);
//setInterval(expectedBehaviorLogTest, 5000);
