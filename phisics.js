const readline = require('readline');
const { domainToUnicode } = require('url');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    lines = lines.slice(1);
    let sumX = 0, sumY = 0, sumZ = 0;
    for(let i = 0; i < lines.length; i++){
        const [x,y,z] = lines[i].split(' ');
        sumX += parseInt(x);
        sumY += parseInt(y);
        sumZ += parseInt(z);
    }
    if(sumX == 0 && sumY == 0 && sumZ == 0){
        console.log('YES');
    }else{
        console.log('NO');
    }
});