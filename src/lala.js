#!/usr/bin/env node

import FizzBuzz from "./fizzBuzz.mjs";
const UtilService = require("./util.cjs");

const unrealArgs = UtilService.parse(process.argv.slice(2));

console.log(unrealArgs);

if (unrealArgs.fizzBuzz) {
  console.table(FizzBuzz.fizzBuzz(unrealArgs.fizzBuzz));
}
