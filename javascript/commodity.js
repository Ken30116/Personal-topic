let comimg = document.querySelector(".commodity_img img");
let comspan = document.querySelectorAll(".commodity-selector span");
function comshow() {
    comimg.src = `img/home/commodity/commodity${index}.jpg`;
    for(let i = 0; i < comspan.length; i++){
        if(i==index){
            comspan[index].style.backgroundColor="#008080";
            comspan[index].style.color="#ffffff";
        }else{
            comspan[i].style.backgroundColor="#ffffff";
            comspan[i].style.color="#008080";
        }
    }
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