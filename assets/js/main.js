var header = document.querySelector("header")
window.addEventListener("scroll",function(){
    if (window.scrollY>0) {
        header.style.position = "sticky";
        header.style.top=0;
    }
})