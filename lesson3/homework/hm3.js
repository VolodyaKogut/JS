// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let a = [1, 2, 3, 4, 5];
// let b = ['orel', 'reno', 'fly', 'afdgadf', 'afgdfdr'];
// let c = ['ostap', 4, 7, false, 98];
// console.log(a);
// console.log(b);
// console.log(c);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[3] = 5;
// arr[4] = 9;
// console.log(arr);


// --- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// let arrr = ['один', 'два', 'три', 'чотири', 'пять', 'шість', 'сім', 'вісім', 'девять', 'десять'];
//
// for (let string of arrr) {
//     document.write(`<div>${string}</div>`);
// }
// document.write('<ol>');
// for (let i = 0; i <= 9; i++) {
//     document.write(`<div><li> Довільний текст</li></div>`);
// }
//
// document.write('</ol>');

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// document.write('<ol>');
// for (let i = 1; i < 11; i++) {
//     document.write(`<div><li> Довільний ${i} текст</li></div>`);
// }
//
// document.write('</ol>');


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<div><h1>Довільний текст</h1></div>`);
//     i++;
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


// let i = 0;
// while (i < 20) {
//     document.write(`<div><h1>Довільний ${i} текст</h1></div>`);
//     i++;
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.


// let arr = [12, 432, 543, 234, 5423, 4567, 543252, 5433, 23452345, 98797];
// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = ['dog', 'пес', 'cat', 'car', 'bus', 'rol', 'pol', 'gan', 'now', 'shut'];
//
// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.


// let arr = ['cat', 'car', 'bus', 543, 234, 4567, 7, false, 98, true];
// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr = ['cat', 'car', 'bus', 543, 234, 4567, 7, false, 98, true];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "boolean") {
//         console.log(arr[i]);
//     }
//     }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи


// let arr = ['cat', 'car', 'bus', 543, 234, 4567, 7, false, 98, true];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//         console.log(arr[i]);
//     }
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arr = ['cat', 'car', 'bus', 543, 234, 4567, 7, false, 98, true];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//         console.log(arr[i]);
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.


// let arr = [];
// arr[0] = 'zero';
// arr[1] = 'zoro';
// arr[2] = 56;
// arr[3] = true;
// arr[4] = 44;
// arr[5] = false;
// arr[6] = 678;
// arr[7] = 'noa';
// arr[8] = 393;
// arr[9] = 672;
//
// for (i = 0; i < arr.length; i++) {
//      console.log(arr[i]);
//  }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

//
// document.write('<ol>');
// for (let i = 1; i <= 10; i++) {
//     document.write(`<div><li> ${i} </li></div>`);
//     console.log(i);
// }
//
// document.write('</ol>');


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


//
// for (let i = 1; i <= 100; i++) {
//     document.write(` ${i} <br/>`);
//     console.log(i);
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write


// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         document.write(` ${i} <br/>`);
//         console.log(i);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         document.write(` ${i} <br/>`);
//         console.log(i);
//     }
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 100; i+=2) {
//
//         document.write(` ${i} <br/>`);
//         console.log(i);
//
// }




































