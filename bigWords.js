const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
let lines = [];
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    const arr = lines.slice(1);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]. length > 10){
            arr[i] = arr[i][0] + (arr[i].length - 2) + arr[i][arr[i].length - 1];
        }
        console.log(arr[i]);
    }
});