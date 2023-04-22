let elem = top.document.querySelector("iframe#cafe_main");
let screenElement;

try{
    elem.contentWindow.document.addEventListener("fullscreenchange", () => {
        if(elem.contentWindow.document.fullscreenElement) {
            screenElement = elem.contentWindow.document.fullscreenElement;
        }else{
            screenElement.scrollIntoView({block:"center"});
        }
        setTimeout(() => {}, 100)
    }, {passive: true});
}catch(e){
    
}
