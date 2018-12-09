// SLIDER
var taskList = document.querySelectorAll('.gallery__picture li');

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
// previous end

var drop_down_list = document.querySelectorAll('div .drop_down_list');

var panel_left = document.querySelector('.panel_left');
var panel_right = document.querySelector('.panel_right');
var sum = document.querySelector('.sum strong');

var titleValue = 0;
var colorValue = 0;
var patternValue = 0;
var transportValue = 0;

// list_panel_visible
for(var i = 0; i < drop_down_list.length; i++) {
    drop_down_list[i].addEventListener('click', function () {
        this.lastElementChild.classList.toggle('list_panel_visible');
    });
}
// previous end


// CHOOSE PRODUCT => ADD TO SUMMARY

for(var i = 0; i < drop_down_list.length; i++) {
    if (i === 0) {
        for (var j = 0; j < drop_down_list[i].lastElementChild.children.length; j++) {
            drop_down_list[i].lastElementChild.children[j].addEventListener('click', function () {

                this.parentElement.parentElement.firstElementChild.innerText = this.innerText;
                panel_left.children[0].innerText = this.innerText;
                panel_right.children[0].innerText = this.dataset.value;
                titleValue = 0;
                titleValue += parseInt(this.dataset.value);

                sum.innerText = titleValue + colorValue + patternValue + transportValue;

            });
        }
    } else if (i === 1) {
        for (var j = 0; j < drop_down_list[i].lastElementChild.children.length; j++) {
            drop_down_list[i].lastElementChild.children[j].addEventListener('click', function () {

                this.parentElement.parentElement.firstElementChild.innerText = this.innerText;
                panel_left.children[1].innerText = this.innerText;
                panel_right.children[1].innerText = this.dataset.value;

                colorValue = 0;
                colorValue += parseInt(this.dataset.value);

                sum.innerText = titleValue + colorValue + patternValue + transportValue;

            });
        }
    } else {
        for (var j = 0; j < drop_down_list[i].lastElementChild.children.length; j++) {
            drop_down_list[i].lastElementChild.children[j].addEventListener('click', function () {

                this.parentElement.parentElement.firstElementChild.innerText = this.innerText;
                panel_left.children[2].innerText = this.innerText;
                panel_right.children[2].innerText = this.dataset.value;

                patternValue = 0;
                patternValue += parseInt(this.dataset.value);

                sum.innerText = titleValue + colorValue + patternValue + transportValue;

            });
        }
    }
}
// previous end

//CHECKBOX ==> TRANSPORT VALUE TO SUMMARY

var checkbox = document.querySelector('div.checkbox');
var checkboxInput = document.querySelector('input[type=checkbox]');
var transport = document.querySelector('span.transport');
var transportPrice = document.querySelector('span.transport.value');

checkbox.addEventListener('click', function() {
    if (checkboxInput.checked) {
        transport.innerText = 'Shipping';
        transportPrice.innerText = parseInt(checkboxInput.dataset.value);

        transportValue = 0;
        transportValue += parseInt(checkboxInput.dataset.value);
        sum.innerText = titleValue + colorValue + patternValue + transportValue;
    } else {
        transport.innerText = '';
        transportPrice.innerText = '';

        transportValue = 0;
        sum.innerText = titleValue + colorValue + patternValue + transportValue;
    }
});