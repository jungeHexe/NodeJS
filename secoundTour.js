const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    let [n, k] = lines[0].split(' ');
    n = parseInt(n);
    k = parseInt(k);
    const arr = lines[1].split(' ');
    let maxB = parseInt(arr[k-1]);
    let res = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= maxB && arr[i] > 0){
                res++;
        }
    }
    console.log(res);
});