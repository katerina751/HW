// Домашнее задание 4

// задание 1

let i = 1;

let n = 2;

while (i <= n) {
    alert('Привет');
    i++;
}

// задание 2

let j = 1;

while (j < 6) {
    console.log(j);
    j++;
}

// задание 3

let s = 7;

while (s < 23 && s > 6) {
    console.log(s);
    s++;
}

// задание 4

const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
}

for (let worker in obj) {
    console.log(`${worker} - зарплата ${obj[worker]} долларов`);
}

// задание 5

let n5 = 1000;
const min = 50;
let num = 0;

while (n5 > min) {
    num++;
    n5 = n5 / 2;
}

console.log(n5, num)

// задание 6

let firstFriday = 2;

for (let day = firstFriday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчёт.`)

};
