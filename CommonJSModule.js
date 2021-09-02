exports.plus = (str) => {
        let arr = str.split(' ');
        let a = parseInt(arr[0]);
        let b = parseInt(arr[1]);
        return a+b;
};

var math = require('./CommonJSModule.js');
math.plus();