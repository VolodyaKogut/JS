//- Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

// let c = prompt()
// c > 0 ? console.log('+') :
//     c < 0 ? console.log('-') : console.log('0')



// - Перепишіть конструкцію if з використанням умовного оператора '?':

// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
//
// let a = prompt('a')
// let c = prompt('b')
// a + c < 4 ? console.log('мало') : console.log('Багато')


//     - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між
// двома іншими.

// let a = +prompt('number 1');//
// let b = +prompt('number 2');//
// let c = +prompt('number 3');//
// (a > b && a < c) || (a > c && a < b) ? console.log(a) :
//     (b > a && b < c) || (b > c && b < a) ? console.log(b) :
//         (c > a && c < b) || (c < a && c > b) ? console.log(c) : console.log('hz')

// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// friends.length >= 3 ? console.log('великий масив') : console.log('малий масив')