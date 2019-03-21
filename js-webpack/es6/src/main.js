//https://github.com/webpack/css-loader
import "./style.css"

/*
 * Articles about ES6
 * Modules
 * https://24ways.org/2014/javascript-modules-the-es6-way/
 * http://www.2ality.com/2014/09/es6-modules-final.html
 * Arrow functions
 * https://strongloop.com/strongblog/an-introduction-to-javascript-es6-arrow-functions/
 */

// Modules
import { zip, map } from 'lodash'

// Default export
// Default export is a named export using the 'default' name, so next is valid
// import { default as Person } from './Person'
import Person from './Person'

// Named export
import { square, plusTen, isEven, logging } from './utils'
import * as math from './math'

// Class
var myperson = new Person('Jhon Doe')
var main = document.getElementById('main')
var oneToThree = [1, 2, 3, 5, 10]

// Template strings
main.textContent = `${myperson.get()}!`

console.log('zip', zip(oneToThree, ['a', 'b', 'c']))
console.log('logging the array', map(oneToThree, n => n))
console.log('logging the values')
map(oneToThree, n =>  logging(n))
console.log('by 3', map(oneToThree, n => n * 3))
console.log('square', map(oneToThree, n => square(n)))
console.log('plusTen', map(oneToThree, n => plusTen(n)))
console.log('isEven', map(oneToThree, n => isEven(n)))
console.log('math.sum', math.sum(oneToThree))
console.log('math.mean', math.mean(oneToThree))
console.log('math.median', math.median(oneToThree))
console.log('math.median of [1,2,3,4] is', math.median([1,2,3,4]))
console.log('math.median of [1,3,5,7,9] is', math.median([1,3,5,7,9]))