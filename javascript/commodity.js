"use strict";var comimg=document.querySelector(".commodity_img img"),comspan=document.querySelectorAll(".commodity-selector span");function comshow1(){for(var o=0;o<comspan.length;o++)!function(o){comspan[o].onmouseover=function(){comspan[o].style.backgroundColor="#00c234",comspan[o].style.color="#ffffff",comspan[o].style.opacity="1"},comspan[o].onmouseout=function(){comspan[o].style.backgroundColor="#ffffff",comspan[o].style.color="#008080",comspan[o].style.opacity="0.5"}}(o)}function comshow(){comimg.src="img/home/commodity/commodity".concat(index1,".jpg");for(var o=0;o<comspan.length;o++)!function(o){o==index1?(comspan[index1].style.backgroundColor="#008080",comspan[index1].style.color="#ffffff",comspan[index1].style.opacity="1",comspan[index1].onmouseout=function(){comspan[index1].style.backgroundColor="#008080",comspan[index1].style.color="#ffffff",comspan[index1].style.opacity="1"}):(comspan[o].style.backgroundColor="#ffffff",comspan[o].style.color="#008080",comspan[o].style.opacity="0.5",comspan[o].onmouseover=function(){comspan[o].style.backgroundColor="#00c234",comspan[o].style.color="#ffffff",comspan[o].style.opacity="1"},comspan[o].onmouseout=function(){comspan[o].style.backgroundColor="#ffffff",comspan[o].style.color="#008080",comspan[o].style.opacity="0.5"})}(o)}function ctrlnum(){for(var o=0;o<comspan.length;o++)!function(o){comspan[o].onclick=function(){index1=o,comshow()}}(o)}comspan[0].style.backgroundColor="#008080",comspan[0].style.color="#ffffff",comspan[0].style.opacity="1",comshow1(),ctrlnum();