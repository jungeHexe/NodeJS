const readline = require('readline');
const { pathToFileURL } = require('url');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let line;
let array1 = ['a', 'e', 'i', 'o', 'u', 'y' ];

rl.on('line', inp => {
    line = inp;
}).on('close', () => {
    let ans = [];
    for(let i = 0; i < line.length; i++){
        if(array1.includes(line[i].toLowerCase()) === false){
            ans.push('.');
            ans.push(line[i].toLowerCase());
        }
    }

    console.log(ans.join(''));
});