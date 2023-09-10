const btn = document.querySelector('.btn');
const search = document.querySelector('.search');
const navbar = document.querySelector('.navbar');
const buttons = document.querySelector('.buttons');
const btnClose = document.createElement('button');

btnClose.textContent = 'x';
btnClose.style.position = 'absolute';
btnClose.style.top = '0px';
btnClose.style.left = '5px';
btnClose.style.fontSize = '30px';
btnClose.style.border = 'none';
btnClose.style.background = 'none';
btnClose.style.display = 'none';

buttons.append(btnClose);

btn.addEventListener('click', () => {
    navbar.style.display = 'block';
    btn.style.display = 'none';
    btnClose.style.display = 'block';
});

search.addEventListener('click', () => {
    search.style.backgroundColor = 'white';
});

btnClose.addEventListener('click', () => {
    navbar.style.display = 'none';
    btn.style.display = 'block';
    btnClose.style.display = 'none';
})