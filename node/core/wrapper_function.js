// var bug =;

/**
 * uncomment line 1 to expose the wrapper function
 * only works if the error is at line 1
 */

/**
 * Module wrapper function
 * 
 * Node wrapps the code with a function to execute the program
 * The function is an IIFE (Immediately Invoked Function Expression)
 * 
 * Function signature:
 * 
 * (function (exports, require, module, __filename, __dirname) {
 *   // YOUR CODE GOES HERE
 * })()
 * 
 * argument "exports" is a reference to module.exports.
 * Therefore, you can use it like this:
 * 
 * export.foo = foo;
 * 
 * but you can't use it like this,
 * 
 * export = foo;
 */

console.log('Hi wrapper function!');
console.log(__filename);
console.log(__dirname);
