// Задание 2
// В файле html есть разметка:
// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>
// Вывести в консоль каждое из имен (содержимое каждого li).

// ПОДСКАЗКИ
// 1) C помощью метода document.querySelectorAll найдите на странице все пункты списка (li) и запишите в переменную. У вас получится html-коллекция (массив). 
// 2) Обойдите коллекцию с помощью forEach и для каждого li вывкдите в консоль текстовое содержимое (innerText)

const liItem = document.querySelectorAll('li');

liItem.forEach(item => {
    console.log(item.innerText);
});



// Задание 3
// Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)

liItem.forEach((item, i) => {
    item.innerText = i;
});


// Задание 4

// Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.

const paragraph = document.createElement('p');
paragraph.style.fontSize = '36px';
paragraph.style.fontWeight = 'bold';
paragraph.textContent = 'Абзац';

document.body.append(paragraph);

// Задание 6

// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.

function addElement(tag, color, content) {
    const addItem = document.createElement(tag);
    addItem.style.color = color;
    addItem.textContent = content;
    document.body.append(addItem);
}

addElement('p', 'green', 'Hello');
addElement('h5', 'blue', 'Hi');
addElement('p', 'red', 'lalalala');

// Задание 9

// Есть массив ссылок:
// let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")

// ПОДСКАЗКА. Для создания атрибута используется js метод setAttribute:
// element.setAttribute(name, value) - где element - сам элемент, которому назначаем атрибут, name - атрибут, который нужно добавить, value - его значение. Также для стандартных атрибутов существуют свойства, и их можно добавлять напрямую: напр. img.src = ''
// Вкладывать ссылки в див нужно с помощью метода appendChild или append.
// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY

let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

const addDiv = document.createElement('div');
addDiv.style.backgroundColor = 'yellow';
addDiv.style.padding = '20px';

document.body.append(addDiv);

for (let link of linksArr) {
    const addLink = document.createElement('a');
    addLink.href = link;
    addLink.setAttribute('target', '_blank');
    addLink.textContent = 'click me'
    addDiv.append(addLink);
}


// Задание 12

// Есть верстка: https://teenscool1.notion.site...

// С помощью JavaScript:
// 1) Найти в коде список ul и добавить ему класс “list”.
// 2) На li через один (начиная с самого первого) установить класс “item”
// 3) На все ссылки в примере установить класс “custom-link”


const ulItem = document.querySelector('ul');
ulItem.classList.add('list');

const liItems = document.querySelectorAll('li');

for (let i = 0; i < liItems.length; i += 2) {
    liItems[i].classList.add('item');
};

const linksItem = document.querySelectorAll('a');

linksItem.forEach(item => {
    item.classList.add('custom-link');
})