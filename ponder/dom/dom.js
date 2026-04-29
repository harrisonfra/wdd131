let title = document.querySelector('h1');
console.log(title);

title.textContent = 'Web Page Components';


document.querySelector("#topics").style.color = 'blue';

const wrapper = document.getElementById('content');
wrapper.style.backgroundColor = 'lightgray';

let list = document.querySelector('.list');
list.style.border = '3px solid black';

let paragraphs = document.querySelector('p');
paragraphs.style.fontSize = '2em';

paragraphs.classList.add('background');

const image = document.querySelector('img');
image.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcyVQhTERdq5cd_nrUZZOi8DbPZocOl7mzwQ&s');

const html = document.querySelector('#html');
const css = document.querySelector('#css');
const js = document.querySelector('#js');

//this was discussed in class on 4/29
let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function () {
    html.style.color = 'blue';
    css.style.color = 'blue';
    js.style.color = 'blue';

    let codeValue = selectElem.value;
    console.log(codeValue);
    document.getElementById(codeValue).style.color = 'red';
})

