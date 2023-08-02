// Задание 1

// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.

const input = document.querySelector('input');
const ul = document.querySelector('ul');

input.addEventListener('keyup', (event) => {
    const li = document.createElement('li');
    li.innerText = event.key;
    ul.append(li);
});

// Задание 2

// Вставить в html тег input (просто предусмотреть в разметке).

// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value


input.addEventListener('keyup', () => {
    console.log(input.value);
});

//Задание 3

// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const li = document.createElement('li');
    li.innerText = input.value;
    ul.append(li);
    input.value = '';
});


//Задание 5

// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.

const button = document.querySelector('button');

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = `rgb(${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)})`;
});


button.addEventListener('mouseleave', () => {
    button.style.transform = `rotate(${getRandomInteger(-180, 180)}deg)`;
});