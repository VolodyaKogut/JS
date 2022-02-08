// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function numb(a,b,c) {
//     if (a<b && a<c){
//         console.log(a);
//     }else if (b<a && b<c) {
//         console.log(b);
//     }else if (c<a && c<b){
//         console.log(c);
//     }else {
//         console.log('not one min numb');
//     }
//
// }
// numb(3,2,3);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function numb(a,b,c) {
//     if (a>b && a>c){
//         console.log(a);
//     }else if (b>a && b>c) {
//         console.log(b);
//     }else if (c>a && c>b){
//         console.log(c);
//     }else {
//         console.log('not one max numb');
//     }
//
// }
// numb(3,4,4);


// - створити функцію яка повертає найбільше число з масиву
//
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// function maxNumb(ara) {
//     let maxel = ara[0];
//     for (const arrElement of ara) {
//
//         if (arrElement > maxel) {
//             maxel = arrElement;
//         }
//     }
//     return maxel;
// }
//
// document.write(`${maxNumb(arr)}`);
//


// - створити функцію яка повертає найменьше число з масиву


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// function maxNumb(ara) {
//     let maxel = ara[0];
//     for (const arrElement of ara) {
//
//         if (arrElement < maxel) {
//             maxel = arrElement;
//         }
//     }
//     return maxel;
// }
//
// document.write(` мінімальне значення   ${maxNumb(arr)}`);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// function sumArrey(x) {
//     let sum = 0;
//     for (const x1 of x) {
//         sum = sum + x1;
//     }
//     return sum;
// }
//
// document.write(`${sumArrey(array)}`)


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function sumArrey(x) {
//     let sum = 0;
//     for (const x1 of x) {
//         sum = sum + x1;
//         y = sum / x.length;
//     }
//     return y;
// }
//
// document.write(`${sumArrey(array)}`)


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


// function numbOf(...qwe) {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const qweElement of qwe) {
//         if (qweElement > max) {
//             max = qweElement;
//         }
//
//         if (qweElement < min) {
//             min = qweElement;
//         }
//     }
//     console.log(max);
//     return min;
// }
//
// numbOf(1, 2, 3, 4, 456, 5, 6, 7, 8, 9);



// - створити функцію яка заповнює масив рандомними числами

// function randNumb(x) {
//     let array = [];
//     for (let i = 0; i < x; i++) {
//         array.push(Math.round(Math.random()*100));
//
//     }
//     console.log(array);
//     return array;
// }
//
// randNumb(6);


// створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function randNumb(length, limit) {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.round(Math.random()*limit));
//
//     }
//     console.log(array);
//     return array;
// }
//
// randNumb(13,100);





























































