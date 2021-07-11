let comimg = document.querySelector(".commodity_img img");
let comspan = document.querySelectorAll(".commodity-selector span");
function comshow() {
    comimg.src = `img/home/commodity/commodity${index}.jpg`;
}

function ctrlnum() {
    for (let i = 0; i < comspan.length; i++) {
        comspan[i].onclick = function () {
            index = i;
            comshow();
        }
    }
}
ctrlnum();