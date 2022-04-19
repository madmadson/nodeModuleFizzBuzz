#!/usr/bin/env node

import FizzBuzz from "./fizzBuzz.mjs";
import UtilService from './util.mjs'

const unrealArgs = UtilService.parse(process.argv.slice(2));

console.log(unrealArgs);

if (unrealArgs.fizzBuzz) {
  console.table(FizzBuzz.fizzBuzz(unrealArgs.fizzBuzz));
}
