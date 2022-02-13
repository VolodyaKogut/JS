// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let s = 'hello world';
// let d = 'lorem ipsum';
// let f = 'javascript is cool';
// let sS = s.toUpperCase();
// let sD = d.toUpperCase();
// let sF = f.toUpperCase();
// console.log(sS, sD, sF);

// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// console.log(s.length);
// console.log(d.length);
// console.log(f.length);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let lowS = sS.toLowerCase();
// let lowD = sD.toLowerCase();
// let lowF = sF.toLowerCase();
// console.log(lowS, lowD, lowF);


// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let newSTR = str.replaceAll(' ', '').replace('y', 'y ');
// console.log(newSTR);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str1 = 'Каждый охотник желает знать';
// let splitStr1 = (str1) => str1.split(' ');
// console.log(splitStr1(str1));


//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, length) => str.substring(0,length);
// console.log(delete_characters(str, 9));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
// let insert_dash = (str) =>{
//     let newSTR = str.replaceAll(' ', '-').toUpperCase();
//     return newSTR;
// }
// console.log(insert_dash(str));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let str = 'всякий мисливецб бажає знати';
// let upFirst = (str) => {
//
//     let newSTR = str[0];
//
//     newSTR = newSTR.toUpperCase()+str.replace(str[0],'');
//
//
// return newSTR;
// }
// console.log(upFirst(str));

///////////////////////////////////////////////////
// let
//     FirstLetter = (str) => {
//         return str.charAt(0).toUpperCase() + str.slice(1);
//     }
//
// console.log(FirstLetter(str));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.


// лажа
// let upFirstAll = (str) => {
// let arr = str.split(' ');
//     let newSTR = [];
//     for (let arrElement of arr) {
//         console.log(arrElement);
//
//     newSTR[i] = arrElement[0].toUpperCase()+str.replace(arr[0],'');
// }
//
//     return newSTR;
// }
// console.log(upFirstAll(str));



