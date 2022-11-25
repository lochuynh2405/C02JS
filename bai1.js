let readline = require('readline-sync');
let tuduy = Number(readline.question('nhap diem tuduy: '));
let kynang = Number(readline.question('nhap diem kynang: '));
let dtb = (tuduy + kynang)/2;
if (dtb >= 5){console.log('dau')}
else {console.log('rot')};
