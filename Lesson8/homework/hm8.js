// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :


// -- отримує текст з параграфа з id "content"
// console.log(document.getElementById('content'));
// let a = document.getElementById('content')
// console.log(a);

// -- отримує текст з блоку з id "rules"

// let b = document.getElementById('rules')
// console.log(b);


// -- замініть текст параграфа з id 'content' на будь-який інший


// a.innerHTML = '<a>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, praesentium?</a>'



// -- замініть текст параграфа з id 'rules' на будь-який інший

// b.innerHTML = 'Lorem ipsum dolor ';

// -- змініть кожному елементу колір фону на червоний

// let c = document.body.children;
// // console.log(c);
// for (const cElement of c) {
//     cElement.style.background = 'red';
// }

// -- змініть кожному елементу колір тексту на синій

// for (const cElement of c) {
//     cElement.style.color = 'blue';
// }

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

// console.log(b.classList);


// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let d = document.getElementsByClassName('fc_rules');
for (const dElement of d) {
    dElement.style.color = 'red';
}


















































