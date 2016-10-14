'use strict'

const range = function * (from, until) {
  for (let n = from; n < until; n++) {
    yield n
  }
}

const config = {
  from: 1,
  until: 50,
  factors: [
    [3, 'fizz'],
    [5, 'buzz'],
    [6, '-baha']
  ]
}
// function view
function fizzbuzzFunctional (config) {
  const { from, until, factors } = config
  const numbers = [...range(from, until)]
  numbers
    .filter(function (n) {
      return factors
      .some(arr => n % arr[0] === 0)
    })
    .map(factors.reduce(
      function (prior, current) {
        return function (n) {
          if (n % current[0] === 0) {
            return prior(n) + current[1]
          } else {
            return prior(n)
          }
        }
      },
      function (n) {
        return n + `: `
      }
  ))
  .forEach(msg => console.log(msg))
}

function fizzbuzz (config) {
  const { from, until, factors } = config // sets constants for the config const
  const numbers = [...range(from, until)] // sets constant for numbers from and until
  numbers // filter the array into an array of numbers that can only be factored by 3 and or 5
    .filter(n => factors.some(arr => n % arr[0] === 0)) // checks to see if any elements in the array can be factored by 3 or 5
    .map(factors.reduce( //  creates a function that take one parameter - we want to turn an int into a string
      (previous, next) => // prior, current
        item => //
          item % next[0] === 0 // check to see if current number is div by 3 or 5
            ? `${previous(item)}${next[1]}` // ? if true, 'then return' something
            : previous(item), // : else 'then return' something else
    item => `${item}: ` // brakes down to printing a string ie. 3:
  ))
  .forEach(msg => console.log(msg))
}

// test
fizzbuzz(config)
