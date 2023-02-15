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
