var prompt = require('prompt-sync')();

const name = prompt('Your name: ');

const arr = prompt('Array: ').split(" ");

console.log(name);
console.log(arr.length);
for(let i=0; i < arr.length; i++){
    console.log(arr[i]);
};