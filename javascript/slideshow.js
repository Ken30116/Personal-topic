let img = document.querySelector('.slideshow_img img');
let span = document.querySelectorAll('.slideshow-selector span');
let left = document.querySelector('.btn_left');
let right = document.querySelector('.btn_right');
let slideshow=document.querySelector('.slideshow');
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
        for(let a = 0; a < span.length; a++){
            if(a==index){
                span[index].style.backgroundColor="#008080";
            }else{
                span[a].style.backgroundColor="#ffffff";
            }
        }      
        index++;
        
    }, 3000);
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
        if (index == 0) {
            index = span.length-1;
        } else {
            index--;
        }
        show();
    }
    right.onclick = function () {
        if (index == span.length - 1) {
            index = 0;
        } else {
            index++;
        }
        show();
    }
}
clickPlay();
function eventList() {
        slideshow.addEventListener('mouseover', function () {
            clearInterval(timer);
        }, false);
        slideshow.addEventListener('mouseout', function () {
            clearInterval(timer);
            autoPlay();
        }, false);
    }
eventList();