
var taskList = document.querySelectorAll('.gallery__picture li');
console.log(taskList);

var prevBtn = document.querySelector('.nav-button.left');

var nextBtn = document.querySelector('.nav-button.right');

var counter = 0;


function nextPicture(ev) {
    ev.preventDefault();

    taskList[counter].classList.remove('visible');

    if(counter === taskList.length - 1) {
        counter = 0;
    } else {
        counter++;
    }

    taskList[counter].classList.add('visible');
}

function prevPicture(ev) {
    ev.preventDefault();

    taskList[counter].classList.remove('visible');

    if(counter === 0) {
        counter = taskList.length - 1;
    } else {
        counter--;
    }

    taskList[counter].classList.add('visible');
}

taskList[counter].classList.add('visible');
nextBtn.addEventListener('click', nextPicture);
prevBtn.addEventListener('click', prevPicture);


//
// // 1. lapanie zmiennych
//
// var listElements = document.querySelectorAll('li');
// var nextBtn = document.querySelector('#nextPicture');
// var prevBtn = document.querySelector('#prevPicture')
// var counter = 0;
//
// // 2. funkcje
//
// function nextPicture(ev) {
//     ev.preventDefault();
//
//     listElements[counter].classList.remove('visible');
//
//     if(counter === listElements.length - 1) {
//         counter = 0;
//     } else {
//         counter++;
//     }
//
//     listElements[counter].classList.add('visible');
// }
//
// function prevPicture(ev) {
//     ev.preventDefault();
//
//     listElements[counter].classList.remove('visible');
//
//     if(counter === 0) {
//         counter = listElements.length - 1;
//     } else {
//         counter--;
//     }
//
//     listElements[counter].classList.add('visible');
// }
//
// //3. Przebieg programu
// listElements[counter].classList.add('visible');
// nextBtn.addEventListener('click', nextPicture);
// prevBtn.addEventListener('click', prevPicture);