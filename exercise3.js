var fs = require('fs');

var buffString = fs.readFileSync(process.argv[2]).toString();

console.log(buffString.split('\n').length - 1);




