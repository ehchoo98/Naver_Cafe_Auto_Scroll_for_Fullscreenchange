let mainWin = top.document.querySelector("iframe#cafe_main").contentWindow;
let screenElement;

mainWin.document.addEventListener("fullscreenchange", () => {
    if(mainWin.document.fullscreenElement) {
        screenElement = mainWin.document.fullscreenElement;
    }else{
        screenElement.scrollIntoView({block:"center"});
    }
    setTimeout(() => {}, 100)
}, {passive: true});
