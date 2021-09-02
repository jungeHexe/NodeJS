const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    let arr = lines.slice(1);
    let results = 0;
    for(let i=0; i < arr.length; i++){
        let count = arr[i].match(/1/g);
        if(count !== null && count.length > 1){
            results++;
        }
    }
    console.log(results);
});