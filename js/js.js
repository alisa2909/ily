document.addEventListener("DOMContentLoaded", function() {

    let b1 = document.querySelector(".but1");
    let b2 = document.querySelector(".but2");

    let sections = document.querySelectorAll(" .section1 , .section2 ")

    function showS(our){
    sections.forEach(function(sel){
        if(sel.classList.contains(our)){
            sel.classList.add("block");
            sel.classList.remove("none");
        }
        else{
            sel.classList.add("none");
            sel.classList.remove("block");
        }
    })
}

b1.addEventListener("click", function(){
    showS("section2")
})

b2.addEventListener("click", function(){
    showS("section1")
})





});