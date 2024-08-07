// Задание 1. Youtube Viewer

// Разработать youtube-виджет, как в примере ЗДЕСЬ.
// ПОРЯДОК РАБОТЫ
// 1. Подготовьте верстку:
// - форма с инпутом и кнопкой
// - блок для плеера
// - блок для превьюшек
// 2. JS
// Использовать следующее API:
// https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB5nX8yZf5VQi0g7V7FWwpJ6YSrOTK8b10&q=ИСКОМАЯ_ФРАЗА&type=video 
// где "ИСКОМАЯ_ФРАЗА" должна заменяться на текст из инпута, который заполняет пользователь.
// В адресе есть API-ключ (выделен жирным), у него есть квоты на использование. Если ключ не будет работать, используйте другой (AIzaSyBtpCmb4WHmKy3I10fzVprfjfW172m8ZnQ) или получите свой по инструкции.
// - Изучить ответ, там будет 5 элементов, описывающих видеоролики. Взять первый и для него создать разметку.
// Код для видеоплеера будет таким:
// тег iframe width="560" height="315" src="https://www.youtube.com/embed/ВИДЕО_ID" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>`
// где "ВИДЕО_ID" - это videoId, который вы должны увидеть к ответе от API.
// - Сделать так, чтобы плееры не множились при повторном поиске, а заменялись друг на друга.
// - Сделать дополнительную отрисовку пяти элементов из ответа в виде превью (картинок) под видео (не плееров, а картинок!). При нажатии на превью плеер подменяется на выбранный ролик.





const textField = document.querySelector('.nav__input');
const header = document.querySelector('.header');
const main = document.querySelector('.main')
const form = document.querySelector('.form');


const renderVideo = (id) => {
    const template = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>`;
    header.innerHTML = '';
    header.insertAdjacentHTML('beforeEnd', template);

}

const renderImg = (src) => {
    const template = `<img src="${src}">`
    main.insertAdjacentHTML('beforeEnd', template);

    const imges = document.querySelectorAll('img');
    imges.forEach(img => {
        img.addEventListener('click', event => {
            const src = img.getAttribute('src');
            const array = src.split('/');
            const id = array[array.length - 2]

            renderVideo(id);
        })
    });
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB5nX8yZf5VQi0g7V7FWwpJ6YSrOTK8b10&q=${textField.value}&type=video`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const id = data.items[0].id.videoId;
            renderVideo(id);

            data.items.forEach(element => {
                const imgUrl = element.snippet.thumbnails.default.url;
                renderImg(imgUrl);
            });
        });
});