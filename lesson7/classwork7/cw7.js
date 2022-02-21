// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//
// function Car(model, produser, year, maxspeed, engine,) {
//     this.model = model;
//     this.produser = produser;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.engine = engine;
//
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     this.drive = function () {
//
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//
//     this.info = function () {
//         for (const argument in this) {
//             if (typeof this[argument] !== 'function')
//                 console.log(`${argument} - ${this[argument]}`)
//         }
//     }
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     this.newMaxspeed = function (newSpeed) {
//         this.newMaxspeed = this.maxspeed + newSpeed;
//         console.log(this.newMaxspeed);
//     }
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
//     this.newYear = function (newValue) {
//         this.newYear = newValue;
//         console.log(`${newValue} рік`);
//     }
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//     this.addDriver = function (driver) {
//         this.addDriver = driver;
//         console.log(`Vadila - ${driver}`);
//     }
//
// }
//
//
//
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// let objcar = new Car('Renault', 'France', 2001, 240, 1.9,);
// objcar.drive();
// objcar.info();
// objcar.newMaxspeed(50);
// objcar.newYear(2021);
// objcar.addDriver('krjakozavr')


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//


class Car {

    constructor(model, produser, year, maxspeed, engine) {
        this.model = model;
        this.produser = produser;
        this.year = year;
        this.maxspeed = maxspeed;
        this.engine = engine;
    }

    drive() {

        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
    }

    info() {
        for (const argument in this) {
            if (typeof this[argument] !== 'function')
            console.log(`${argument} - ${this[argument]}`)
        }
    }

    newMaxspeed(newSpeed) {
        this.newMaxspeed = this.maxspeed + newSpeed;
        console.log(this.newMaxspeed);
    }

    newYear (newValue) {
        this.newYear = newValue;
        console.log(`${newValue} рік`);
    }
    addDriver(driver) {
        this.addDriver = driver;
        console.log(`Vadila - ${driver}`);
    }

}

let car = new Car('Renault', 'France', 2001, 240, 1.9,);
console.log(car);
car.drive();
car.info();
car.newMaxspeed(30);
car.newYear(2032);
car.addDriver('sjoma');





// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбек

class Cinderella {


    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }



}

let cinderella1 = new Cinderella('Olja', 18,31);
let cinderella2 = new Cinderella('Ira', 19,32);
let cinderella3 = new Cinderella('Yulia', 20,33);
let cinderella4 = new Cinderella('Oksana', 21,34);
let cinderella5 = new Cinderella('Tamara', 21,35);
let cinderella6 = new Cinderella('Orusya', 22,36);
let cinderella7 = new Cinderella('lilya', 20,37);
let cinderella8 = new Cinderella('Sofa', 16,38);
let cinderella9 = new Cinderella('Mira', 17,35);
let cinderella10 = new Cinderella('Olja', 25,42);

let cinderellas = [cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7,cinderella8,cinderella9,cinderella10];

class Princ{


    constructor(name, age, shoehefound) {
        this.name = name;
        this.age = age;
        this.shoehefound = shoehefound;
    }
}

let princ = new Princ('Taras',33,36);





let princFind = (cinderellas,Princ) => {
    for (const cinderella of cinderellas) {
        if (cinderella.footsize === princ.shoehefound) {
            return `${cinderella.name}`
        }
    }

}
console.log(princFind(cinderellas, Princ));