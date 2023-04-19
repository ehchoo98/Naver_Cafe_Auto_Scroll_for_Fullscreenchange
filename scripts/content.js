var scrolX = 0;
var scrolY = 0;
let FullScreen = false;

onscroll = () => {
  scrolx = window.scrollX;
  scroly = window.scrollY;
  setTimeout(() => {
    FullScreen = document.fullscreen
  }, 1000);
  alert(`scroll! ${scrolx}, ${scroly}, fullscreen = ${FullScreen}`) 
}

