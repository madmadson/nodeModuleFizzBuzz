const parse = (args) => {
  return args
    .map((arg) => arg.split("="))
    .reduce((returnArgs, values) => {
      returnArgs[values[0]] = values[1];
      return returnArgs;
    }, {});
};

module.exports = {
  parse,
};
