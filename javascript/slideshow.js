let img = document.querySelector('.slideshow_img img');
let span = document.querySelectorAll('.slideshow-selector span');
let left = document.querySelector('.btn_left');
let right = document.querySelector('.btn_right');
let index = 0;
let timer;
function show() {
    img.src = `img/home/slideshow/slideshow${index}.jpg`;
}

function autoPlay() {
    timer = setInterval(function () {
        if (index == span.length) {
            index = 0;
        }
        show();
        index++;
    }, 5000);
}
autoPlay();

function ctrlPlay() {
    for (let i = 0; i < span.length; i++) {
        span[i].onclick = function () {
            index = i;
            show();
        }
    }
}
ctrlPlay();
function clickPlay() {
    left.onclick = function () {
        if (index <= 0) {
            index = span.length - 1;
        } else {
            index--;
        }
        show();
    }
    right.onclick = function () {
        if (index >= span.length - 1) {
            index = 0;
        } else {
            index++;
        }
        show();
    }
}
clickPlay();
function eventList() {
    for (let i = 0; i < span.length; i++) {
        span[i].addEventListener('mouseenter', function () {
            clearInterval(timer);
            index = i;
            show();
        }, false);
        span[i].addEventListener('mousemove', function () {
            clearInterval(timer);
            autoPlay();
        }, false);

    }
}
eventList();