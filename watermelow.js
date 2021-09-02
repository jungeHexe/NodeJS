var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (inp)=>{
    if((parseInt(inp) % 2 === 0)&&(parseInt(inp) > 2)){
        console.log('YES');
    }else{
        console.log('NO');
    }
    rl.close();
});