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

function fizzbuzz (config) {
  const { from, until, factors } = config
  const numbers = [...range(from, until)]
  numbers
    .filter(n => factors.some(arr => n % arr[0] === 0))
    .map(factors.reduce(
      (previous, next) =>
        item =>
          item % next[0] === 0
            ? `${previous(item)}${next[1]}`
            : previous(item),
    item => `${item}: `
  ))
  .forEach(msg => console.log(msg))
}



// function fizzbuzzBroken (config) {

//   let data = [...range(config.from, config.until)].map((item) => {}) {

//     if (n % 5 === 0 && index % 3 === 0) return 'FizzBuzz'
//     if (n % 5 === 0) return 'Buzz'
//     if (n % 3 === 0) return 'Fizz'
//     return n
//   })
//     .map(function (config) {
//     console.log
//   })
// }

// test
fizzbuzz(config)
