let readline = require('readline-sync');
let word = readline.question('Nhap 1 ky tu: ');
const regexNumber = /[1-9]/g;
const regexUpperCase = /[A-Z]/g;
const regexLowerCase = /[a-z]/g;
if (word.match(regexNumber)){
    console.log('So')
}
else if (word.match(regexUpperCase)){
    console.log('Hoa')
}
else if (word.match(regexLowerCase)){
    console.log('Thuong')
}
else {
    console.log('DB')
}



