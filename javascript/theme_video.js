"use strict";var video=document.querySelector(".video"),juice=document.querySelector(".green-juice"),btn=document.getElementById("play-pause");function togglePlayPause(){video.paused?(btn.className="pause",video.play()):(btn.className="play",video.pause())}btn.onclick=function(){togglePlayPause()},video.addEventListener("timeupdate",function(){var e=video.currentTime/video.duration;juice.style.width=100*e+"%",1==e&&(btn.className="play",video.pause())});