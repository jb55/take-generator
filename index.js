'use strict';

let isGeneratorFunction = require('is-generator-function');

module.exports = takeGenerator;

function* takeGenerator(gen, n) {
  let i = 0;
  gen = isGeneratorFunction(gen)? gen() : gen;
  for (let x of gen) {
    yield x;
    if (++i === n) break;
  }
}
