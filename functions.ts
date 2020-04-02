function add(n1: number, n2: number) {
  return n1 + n2; //ts knows the arguments are numbers and returns a number
}

console.log(add(3, 6));

function printResult(num: number) {
  console.log("Result: " + num);
}
// the return value here is void
// js does not have void - this function would return undefined
// ts instead allows undefined only if the return is explicitly undefined
// void = no return value

printResult(add(5, 12));

/* let combinedValues; // type = any
combinedValues = add; // this value can be changed to anything, like a number for instance
console.log(combinedValues(8,8)) // and ts won't catch the error, but at runtime it'll fail */

/* let combinedValues: Function; // type is now a function
combinedValues = add; // but it can be any function
console.log(combinedValues(8,8)) // and runtime might throw an error */

let combinedValues: (a: number, b: number) => number; //type is a function with two parameters with type number
combinedValues = add; // but it can be any function
console.log(combinedValues(8, 8)); // and runtime might throw an error

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, result => {
  console.log(result);
});
//this takes two numbers and launches an anonimous function that calls back result
