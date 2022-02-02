// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = [];
b[0] = Math.floor(Math.random() * 100);
b[1] = Math.floor(Math.random() * 100);
b[2] = Math.floor(Math.random() * 100);
b[3] = Math.floor(Math.random() * 100);
b[4] = Math.floor(Math.random() * 100);
b[5] = Math.floor(Math.random() * 100);
b[6] = Math.floor(Math.random() * 100);
b[7] = Math.floor(Math.random() * 100);
b[8] = Math.floor(Math.random() * 100);
b[9] = Math.floor(Math.random() * 100);

let result = b[0] + b[1] + b[2] + b[3] + b[4] + b[5] + b[6] + b[7] + b[8] + b[9];
console.log(result);


// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book1 = {
        name: `назва`,
        number: 200,
        genre: `comedy`
    }
// console.log(book);
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book2 = {
    name: `назва`,
    number: 200,
    genre: `comedy`,
    author: `Rene`
}

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let arr1 = [book1,book2, book3 = {
    name: `qwer`
}]
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
    let h = 23;
    let w = 10;
    let s = h * w;
    console.log(s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
// V = π R2 h

let heightC = 10;
let dc = 4;
let PI = 3.14;
let v =heightC * PI * (dc / 2) ** 2;
console.log(Math.floor(v));

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3;
let m = 4;
let k = Math.pow (3, 2) + m**2;
let k2 = Math.sqrt(k);
console.log(k2);