let readline = require('readline-sync');
let n = Number(readline.question('nhap n: '));
if (n % 400 == 0 || n % 4 == 0 & n % 100 != 0){console.log('nam nhuan')}
else {console.log('nam khong nhuan')}

