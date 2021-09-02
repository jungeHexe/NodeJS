/*пример с сайта node.js*/
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (inp)=>{
    let arr = inp.split(' ');
    let a = parseInt(arr[0]);
    let b = parseInt(arr[1]);
    console.log(a + b);
    rl.close();
});

/*rl.question("What do you think of node.js? ", function(answer) {
  // TODO: Log the answer in a database
  console.log("Thank you for your valuable feedback:", answer);

  
});*/
