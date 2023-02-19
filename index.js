// Игра 1. (ДЗ №5 Задание 7)

let monthNumber = (xx) => {
    if (xx === 12 || xx === 1 || xx === 2) console.log('Зима');
    else if (xx === 3 || xx === 4 || xx === 5) console.log('Весна');
    else if (xx === 6 || xx === 7 || xx === 8) console.log('Лето');
    else if (xx === 9 || xx === 10 || xx === 11) console.log('Осень');
    else console.log('Переданный параметр не является номером месяца');
}

monthNumber(Number(prompt('Введите номер месяца')));

// Игра 2. (ДЗ №7 Задание 11)

let arrayElem = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
arrayElem = arrayElem.sort(() => Math.random() - 0.5);
alert("Запомните порядок всех элементов: " + arrayElem);
// arrayElem = arrayElem.join('');

let answerUser = (firstElem, lastElem) => {
    if (firstElem.toLowerCase() === arrayElem[0].toLowerCase() && lastElem.toLowerCase() === arrayElem[6].toLowerCase()) alert('Поздравляю, Вы угадали оба элемента!');
    else if (firstElem.toLowerCase() === arrayElem[0].toLowerCase() || lastElem.toLowerCase() === arrayElem[6].toLowerCase()) alert('Вы были близки к победе!');
    else alert('Вы ответили неверно');
};

answerUser(prompt('Чему равнялся первый элемент массива?'), prompt('Чему равнялся последний элемент массива?'));