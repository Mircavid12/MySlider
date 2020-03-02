var prevBtn = document.querySelector(".slider .action .prev");
var nextBtn = document.querySelector(".slider .action .next");
var parentItem =document.querySelector(".slider .items");

nextBtn.addEventListener("click",function(){
var myitems = document.querySelector(".active");

    if(myitems.nextElementSibling !== null){
        myitems.nextElementSibling.classList.add("active");
    }
    else{
        parentItem.firstElementChild.classList.add("active")
    }
    myitems.classList.remove("active"); 
})

prevBtn.addEventListener("click",function(){
var myitems = document.querySelector(".active");

    if(myitems.previousElementSibling !== null){
        myitems.previousElementSibling.classList.add("active");
    }
    else{
        parentItem.lastElementChild.classList.add("active");
    }
    myitems.classList.remove("active"); 
})