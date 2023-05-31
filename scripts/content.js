let docs = top.document.querySelector("iframe#cafe_main").contentWindow.document
let screenElement

try{
    docs.addEventListener("fullscreenchange", () => {
        if(docs.fullscreenElement) {
            screenElement = docs.fullscreenElement
            console.log(screenElement)
        }else{
            screenElement.scrollIntoView({block:"center"})
        }
        setTimeout(() => {}, 100)
    }, {passive: true});
}catch(e){
    
}
