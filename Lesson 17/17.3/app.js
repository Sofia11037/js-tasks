// По адресу `https://api.github.com/users/${userName}` можно получить информацию о пользователе github.
// 1.Запросите информацию о себе и оформите страничку с данными:

// - аватар
// - имя пользователя
// - ссылка на страницу на github
// - дата регистрации на github
// - количество репозиториев.

// 2. Измените приложение так, чтобы имя пользователя можно было вводить в поле и после нажатия на кнопку отрисовывалась информация о нем.


const button = document.querySelector('#button');

async function getUserInfo() {
    const userName = document.querySelector('#username').value;
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const userData = await response.json();
    userInfo(userData);
}

function userInfo(userData) {
    const divUserInfo = document.querySelector('#user-info');
    divUserInfo.innerHTML = `
        <img src="${userData.avatar_url}" width="100">
        <h1>${userData.login}</h1>
        <a href="${userData.html_url}" target="_blank">Посетить github</a>
        <p>Дата регистрации: ${userData.created_at}</p>
        <p>Kоличество репозиториев: ${userData.public_repos}</p>
    `;
}

button.addEventListener('click', () => {
    getUserInfo();
});