let screenElement
try{
    if(window.name=="cafe_main"){
        document.addEventListener("fullscreenchange", () => {
            if(document.fullscreenElement) {
                screenElement = document.fullscreenElement
            }else{
                screenElement.scrollIntoView({block:"center"})
            }
            setTimeout(() => {}, 100)
        }, {passive: true});
    }
}catch(e){}
