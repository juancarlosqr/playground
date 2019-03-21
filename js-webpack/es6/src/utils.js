// Using {} allows exporting several objects

export function square (x) {
  return x * x
}

/*
next is equals to

var plusTen = function (x) {
  return x + 10;
}

also this
  export { plusTen }
is equals to
  export const plusTen = (x) =>  x + 10
*/
const plusTen = (x) => x + 10

/*
Not using {} in functions, is for returning the value,
plusTen functions is return 'x + 10'
*/
const logging = (x) => { console.log(`Value is ${x}`) }

const isEven = (x) => x % 2 === 0

export { plusTen, isEven, logging }