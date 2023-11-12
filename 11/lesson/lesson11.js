// const button = document.querySelector('button');
// const wrapper = document.querySelector('.wrapper');


// button.addEventListener('click', (event) => {
//     console.log('Button click');
//     console.log(event.target);
//     event.stopPropagation();
// }, true);

// wrapper.addEventListener('click', (event) => {
//     console.log('Wrapper click');
//     console.log(event.target);

// }, true);


/////////////////////////////////

// const paragraphs = document.querySelectorAll('p');
// const lis = document.querySelectorAll('li');



// paragraphs.forEach(item => {
//     item.addEventListener('click', () => {
//         item.style.background = 'yellow';
//     })
// });

// lis.forEach(item => {
//     item.addEventListener('click', () => {
//         item.style.color = 'red';
//     })
// });


const firstSection = document.getElementById('first');

firstSection.addEventListener('click', (event) => {
    console.log(event.target);

    // if (event.target.tagName.toLowerCase() === 'p') {
    //     event.target.style.color = 'blue';
    // }

    if (event.target.classList.contains('red')) {
        event.target.style.color = 'red';
    }
})