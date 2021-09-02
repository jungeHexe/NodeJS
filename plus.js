function plus(str){
    const arr = str.split(' ');
    let a = parseInt(arr[0]);
    let b = parseInt(arr[1]);
    return a+b;
}

console.log(plus("2 3"));