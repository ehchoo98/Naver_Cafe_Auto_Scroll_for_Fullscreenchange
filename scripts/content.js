var scrolX = 0;
var scrolY = 0;
let FullScreen = false;

onscroll = () => {
  scrolX = window.scrollX;
  scrolY = window.scrollY;
  setTimeout(() => {
    FullScreen = document.fullscreen
  }, 1000);
  alert(`scroll! ${scrolX}, ${scrolY}, fullscreen = ${FullScreen}`) 
}

