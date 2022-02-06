// // 1- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).

// let a = 'перша чверть';
// let w = 'друга чверть';
// let e = 'третя чверть';
// let r = 'четверта чверть';
// let time = +prompt('enter time');
// if (time >= 1 && time <= 15) {
//     console.log(a);
// } else if (time >= 16 && time <= 30) {
//     console.log(w);
// } else if (time >= 31 && time <= 45) {
//     console.log(e);
// } else if (time >= 46 && time <= 59) {
//     console.log(r);
// } else {
//     console.log('krjakozavr');
// }
//
//
// // 2- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
//
// let fDay = 'перша половина місяця';
// let sDay = 'друга половина місяця';
// let day = +prompt('enter date');
//
// if (day >= 1 && day <= 15) {
//     console.log(fDay);
// } else if (day >= 16 && day <= 31) {
//     console.log(sDay);
// }else  {
//     console.log('krjakozavr');
// }
//
// // 3 - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// //     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
//
//
// let test;
// if (confirm(' ')) {
//     test = 'Неправильно';
// } else {
//     test = 'Вірно';
// }
// console.log(test);
//
// let test1 = confirm('??') ? 'Неправильно' : 'Вірно';
// console.log(test1);
//
// // - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let aa = prompt('значення');
// if (aa === '0') {
//     console.log('НЕВІРНО');
// } else {
//     console.log('Вірно');
// }
//
//
// // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// //     відображається інфа що заплановано на цей день.
//
// let numberDay = prompt('number of the day');
// switch (numberDay) {
//     case '1':
//         alert('lesson 1');
//         break;
//     case '2':
//         alert('classswork 1');
//         break;
//     case '3':
//         alert('lesson 2');
//         break;
//     case '4':
//         alert('classwork 2');
//         break;
//     case '5':
//         alert('lesson 3');
//         break;
//     case '6':
//         alert('englesh classes');
//         break;
//     case '7':
//         alert('sleep');
//         break;
//     default:
//         alert('ПОНЕДІЛОК!!!!!');
//  }
//
// // http://bigbird.space:30823
//
// // - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
//
// let y = 4;
// let x = 2020;
// if (x % y === 0) {
//     console.log('visocosnuy');
// }else {
//     console.log('nevisokosnuy');
// }
//
//
// // - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// // Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
//
// let p = prompt('Яка «офіційна» назва JavaScript?');
// if (p === 'ECMAScript') {
//     alert('Правильно!');
// } else {
//     alert('Не знаєте? ECMAScript!');
// }
//
