//
// 1- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write

    let q = 'hello';
    console.log(q);
    document.write(`<div>${q}</div>`)
    alert(q);
    let w = 'owu';
    console.log(w);
    document.write(`<div>${w}</div>`)
    alert(w);
    let e = 'com';
    console.log(e);
    document.write(`<div>${e}</div>`)
    alert(e);
    let r = 'ua';
    console.log(r);
    document.write(`<div>${r}</div>`)
    alert(r);
    let t = 1;
    console.log(t);
    document.write(`<div>${t}</div>`)
    alert(t);
    let y = 10;
    console.log(y);
    document.write(`<div>${y}</div>`)
    alert(y);
    let u = -999;
    console.log(u);
    document.write(`<div>${u}</div>`)
    alert(u);
    let i = 123;
    console.log(i);
    document.write(`<div>${i}</div>`)
    alert(i);
    let o = 3.14;
    console.log(o);
    document.write(`<div>${o}</div>`)
    alert(o);
    let p = 2.7;
    console.log(p);
    document.write(`<div>${p}</div>`)
    alert(p);
    let a = 16;
    console.log(a);
    document.write(`<div>${a}</div>`)
    alert(a);
    let s = true;
    console.log(s);
    document.write(`<div>${s}</div>`)
    alert(s);
    let d = false;
    console.log(d);
    document.write(`<div>${d}</div>`)
    alert(d);
//
// 2- Переприсвоїти кожній змінній з завдання значення на довільне.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write

q = 'I';
console.log(q);
document.write(`<div>${q}</div>`)
alert(q);
w = 'am';
console.log(w);
document.write(`<div>${w}</div>`)
alert(w);
e = 'a';
console.log(e);
document.write(`<div>${e}</div>`)
alert(e);
r = 'you';
console.log(r);
document.write(`<div>${r}</div>`)
alert(r);
t = 'are';
console.log(t);
document.write(`<div>${t}</div>`)
alert(t);
y = 'we';
console.log(y);
document.write(`<div>${y}</div>`)
alert(y);
u = 'uytr';
console.log(u);
document.write(`<div>${u}</div>`)
alert(u);
i = 743;
console.log(i);
document.write(`<div>${i}</div>`)
alert(i);
o = 47;
console.log(o);
document.write(`<div>${o}</div>`)
alert(o);
p = 'jkfyuk';
console.log(p);
document.write(`<div>${p}</div>`)
alert(p);
a = 'Oleh';
console.log(a);
document.write(`<div>${a}</div>`)
alert(a);
s = 'Orest';
console.log(s);
document.write(`<div>${s}</div>`)
alert(s);
d = 'Orysya';
console.log(d);
document.write(`<div>${d}</div>`)
alert(d);

// 3- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

let firstName = 'Володимир';
let lastName = 'Когут';
let middleName = 'Андрійович';
let person = (`${firstName}  ${middleName} ${lastName}`)
console.log(person);

// 4- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let name = prompt('Володимир');
let sorname = prompt('Андрійович');
let age = prompt(`54`);

alert(`Вітаю ${name} ${sorname}. Тобі ${age} років`);

// 5- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let aa = 100;
console.log(typeof aa);

let b = '100'
console.log(typeof b);

let c = true
console.log(typeof c);

// 6- Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!

let qw = 5 < 6;
console.log(qw);

let qw1 = 5 > 6;
console.log(qw1);

let qw2 = 5 === 6;
console.log(qw2);

let qw3 = 5 >= 6;
console.log(qw3);

let ten = 10 === 10;
console.log(ten);

let ten1 = 10 >= 10;
console.log(ten1);

let ten2 = 10 > 10;
console.log(ten2);

let ten3 = 10 < 10;
console.log(ten3);

let ten4 = 10 !== 10;
console.log(ten4);

let ott = 123 !== 123;
console.log(ott);

let ott1 = 123 === 123;
console.log(ott1);

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); // виведе 205 додасть до стрінга 5 і отримаєм 205
// document.write(str - a + "<br/>");  // порахує і отримаєм 15
// document.write(str * "2" + "<br/>"); // виконає множення і отримаємо 40
// document.write(str / 2 + "<br/>"); // поділить і отримаєм 10