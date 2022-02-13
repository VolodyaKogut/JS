// - Дано натуральное число n. Выведите все числа от 1 до n.


let prostNumb = (n) => {
    for (let i = 2; i <= n; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j === 0);
        }return i;
    }
}
console.log(prostNumb(10));


































