const steps = ['one', 'two', 'three'];

// steps.forEach(function(item) {
//     console.log(item);
// });

steps.forEach(showSteps);

function showSteps(item) {
    console.log(item);
};

//.map

let myList = document.querySelector('#myList');

const stepsHtml = steps.map(listTemplate);

function listTemplate(item) {
    return `<li>${item}</li>`;
}

myList.innerHTML = stepsHtml.join('');

let grades = ['A', 'B', 'C'];

