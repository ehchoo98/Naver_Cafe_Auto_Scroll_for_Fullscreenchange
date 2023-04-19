var scrolX = 0;
var scrolY = 0;
let wasFullScreen = false;

onscroll = () => {
  if(!document.fullscreen && wasFullScreen){
    window.scrollTo(scrolX, scrolY)
  }
  setTimeout(() => {
    scrolX = window.scrollX;
    scrolY = window.scrollY;
  }, 100);
  //alert(`scroll! ${scrolX}, ${scrolY}, fullscreen = ${FullScreen}`) 
}

