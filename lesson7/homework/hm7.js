// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)


function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}


let user1 = new User(3, 'Olka', 'lypara', 'o.LYra@gmail.com', '0632548678');
let user2 = new User(8, 'Olenka', 'Zmija', 'o.ZM@gmail.com', '0987590497');
let user3 = new User(5, 'Ostap', 'Struk', 'o.ST@gmail.com', '0671584762');
let user4 = new User(4, 'Stepko', 'Pryt', 's.PR@gmail.com', '0635634568');
let user5 = new User(1, 'Vasja', 'Plish', 'v.PL@gmail.com', '0981885665');
let user6 = new User(6, 'Ira', 'Shyra', 'i.SH@gmail.com', '0981468507');
let user7 = new User(9, 'Olenka', 'Zmija', 'o.ZM@gmail.com', '0987590497');
let user8 = new User(10, 'Petja', 'Orel', 'p.OR@gmail.com', '0970564586');
let user9 = new User(7, 'Orusya', 'Shyra', 'o.SH@gmail.com', '0981468497');
let user10 = new User(2, 'Olya', 'lypa', 'o.LY@gmail.com', '0632548694');
let arrUsers = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];

// console.log(arrUsers);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)


// let arr = arrUsers.filter((a) => {
//     if (a.id % 2 === 0) {
//         return a;
//     }
// })
// console.log(arr);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// console.log(arrUsers.sort(function (a, b) {
//     return a.id - b.id;
// }));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}



let client1 = new Client(3, 'Olka', 'lypara', 'o.LYra@gmail.com', '0632548678',['wer',5,4,5,7,4,]);
let client2 = new Client(8, 'Olenka', 'Zmija', 'o.ZM@gmail.com', '0987590497',['sdfg',5,6,8,9,9,67,6,67]);
let client3 = new Client(5, 'Ostap', 'Struk', 'o.ST@gmail.com', '0671584762',[3,,6,7,8,0,0,86,7,5645665,6,365346,,653,6]);
let client4 = new Client(4, 'Stepko', 'Pryt', 's.PR@gmail.com', '0635634568',[24,56,546,54,6,345,634,563,2,25,67357,3]);
let client5 = new Client(1, 'Vasja', 'Plish', 'v.PL@gmail.com', '0981885665',[35645,456,3,2,6,52,65,65,4,44,65,54,5,62,4634,6]);
let client6 = new Client(6, 'Ira', 'Shyra', 'i.SH@gmail.com', '0981468507',[5,4645,]);
let client7 = new Client(9, 'Olenka', 'Zmija', 'o.ZM@gmail.com', '0987590497',[6,54,3,3,5,67,47,3,546,435,6,54,2,2]);
let client8 = new Client(10, 'Petja', 'Orel', 'p.OR@gmail.com', '0970564586',65);
let client9 = new Client(7, 'Orusya', 'Shyra', 'o.SH@gmail.com', '0981468497','kavkfkvle');
let client10 = new Client(2, 'Olya', 'lypa', 'o.LY@gmail.com', '0632548694','wfgwfbwsa');

let arrClient = [client1,client2,client3,client4,client5,client6,client7,client8,client9,client10];
console.log(arrClient);



// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)





console.log(arrClient.sort(function (a, b) {
    return a.order.length - b.order.length;
}));






