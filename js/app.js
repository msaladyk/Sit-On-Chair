// SLIDER
var taskList = document.querySelectorAll('.gallery__picture li');
console.log(taskList);

var prevBtn = document.querySelector('.nav-button.left');

var nextBtn = document.querySelector('.nav-button.right');

var counter = 0;

// NEXT BUTTON
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

// PREVIOUS BUTTON
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
// SLIDER END