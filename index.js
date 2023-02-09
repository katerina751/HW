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

// Домашняя работа 5

// задание 1

function less(a, b) {
    if (a <= b) {
        return (a);
    } else {
        return (b)
    }
}

less(12, -17);

// задание 2

function parity(n2) {
    if (n2 % 2 == 0) {
        return ('Число четное');
    } else {
        return ('Число нечетное')
    }
}
parity(122);

// задание 3

function square(z) {
    console.log(z ** 2)
}

square(7);

function square1(z) {
    return z ** 2;
}

square1(5);

// задание 4

let userAnswer = prompt("Сколько Вам лет?");

if (userAnswer < 0) {
    function printMessage() {
        alert("Вы ввели неправильное значение");
    };

} else if (userAnswer >= 0 && userAnswer < 12) {
    function printMessage() {
        alert("Привет, друг!");
    };
} else if (userAnswer >= 13) {
    function printMessage() {
        alert("Добро пожаловать!");
    }
};

printMessage();

// задание 5

let anuNumeric = (p, o) => {
    if (isNaN(p)) return `Одно или оба значения не являются числом`;
    else if (isNaN(o)) return `Одно или оба значения не являются числом`;
    else return (p * o);
}

anuNumeric('fhchgch', 8);

// задание 6

let numericUser = (a) => {
    if (isNaN(a)) return `Переданный параметр не является числом`;
    else return `${a} в кубе равняется ${a ** 3}`;
}

numericUser(Number(prompt('Введите число')));

// задание 7

let monthNumber = (xx) => {
    if (xx === 12 || xx === 1 || xx === 2) console.log('Зима');
    else if (xx === 3 || xx === 4 || xx === 5) console.log('Весна');
    else if (xx === 6 || xx === 7 || xx === 8) console.log('Лето');
    else if (xx === 9 || xx === 10 || xx === 11) console.log('Осень');
    else console.log('Переданный параметр не является номером месяца');
}

monthNumber(Number(prompt('Введите номер месяца')));

