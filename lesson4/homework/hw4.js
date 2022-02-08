// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function square(a, b) {
//     return a * b;
// }
// console.log(square(5, 6));


// - створити функцію яка обчислює та повертає площу кола з радіусом

// function squaerKolo(r) {
//     let PI = 3.14
//     let s = PI * (r ** 2);
//     return s;
// }
// console.log(squaerKolo(5));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function squarC(h, r) {
//     let PI = 3.14;
//     let r2 = r ** 2;
//     let s = PI * r2 * h;
//     return s;
// }
//
// console.log(squarC(10, 20));


// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = [1, 2, 3, 4, 5, 6, 7];
//
// function arrMas(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//         document.write(arr[i]);
//     }
// }
// arrMas(arr);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент


// function paragrafT(text) {
//     document.write(`<a>${text}</a>`);
// }
// paragrafT('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, id?'  );


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


// function list(a) {
//     document.write('<ul>');
//
//     document.write(`<li>${a}</li>`);
//     document.write(`<li>${a}</li>`);
//     document.write(`<li>${a}</li>`);
//     document.write('</ul>');
// }
// list('krjakozabr');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


// function list(a, n) {
//     document.write('<ul>');
//     for (let i = 1; i <= n; i++) {
//         document.write(`<li>${a}</li>`);
//     }
//     document.write('</ul>');
// }
//
// list('krjakozabr',3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


// let arr = [1, 2, 3, 4, 5, 6, 7, true, 'yes'];
//
// function arrMaslist (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//         document.write(`<li>${arr[i]}</li>`);
//     }
// }
// arrMaslist(arr);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.



let arr = [{id: 1, name: 'Ivan', age:45}, {id: 2, name: 'Olya', age:21}, {id: 3, name: 'Ira', age: 22}, {id: 4, name: 'Inha', age:28}];

function arrMaslist (arr) {
    for (const arrElement of arr) {

        document.write(`<div>${arrElement.id}- ${arrElement.name}- ${arrElement.age}</div>`);
    }
}
arrMaslist(arr);









































