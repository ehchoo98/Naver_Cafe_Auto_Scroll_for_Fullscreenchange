var scrolX = 0;
var scrolY = 0;
let wasFullScreen = false;

onscroll = () => {
  if(document.fullscreen){
    wasFullScreen = true;
    window.scrollTo(scrolX, scrolY)
  }else{
    scrolX = window.scrollX;
    scrolY = window.scrollY;
  }
  setTimeout(() => {
    FullScreen = document.fullscreen
  }, 1000);
  //alert(`scroll! ${scrolX}, ${scrolY}, fullscreen = ${FullScreen}`) 
}

