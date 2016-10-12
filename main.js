'use strict'

const range = function * (from, until) {
  for (let n = from; n < until; n++) {
    yield n
  }
}

const config = {
  from: 1,
  until: 115,
  factors: [
    [3, 'fizz'],
    [5, 'buzz']
  ]
}

function fizzbuzz(config) {
  // todo
}

// test
fizzbuzz(config)
