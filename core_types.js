"use strict";
// core types
//number
//no integers or float
//string
// "" - '' - ``
// boolean
// true - false - no truthy-falsey
/* // core types

the following will break because js treats types as "any" by default
function add(n1, n2) {
    return n1+n2;
}

const number1 = '5';
const number2 = 2.8;

const result = add(number1, number2);

console.log(result); => 52.8 because this is a concatenated string
*/
//REMEMBER: ts is statically typed (set during development), js is dynamic (resolved at runtime)
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5; // using "5" now throws an error
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
var result = add(number1, number2, printResult, resultPhrase);
// objects in js are of type OBJECT => {age:30}
