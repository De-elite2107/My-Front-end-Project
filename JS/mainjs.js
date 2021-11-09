var contact = document.querySelector("footer .contact")
var i = 0;
function contactus(){
    if(i == 0){
        contact.style.display = "block"
        contact.style.width = "50.7%";
        i = 1;
    }
    else{
        contact.style.width = "0%"
        contact.style.display = "none"
        i = 0;
    }
}

var contactPage = document.querySelector(".b");
var imgCont = document.querySelector(".c");
// var nav = document.getElementById("nav");
var x = 0;
function contactBar(){
    if(x == 0){
        contactPage.style.width = "20%"
        contactPage.style.backgroundImage = "url(../IMG/Index/BG-Darkchecker.jpg)"
        contactPage.style.backgroundColor = "none"
        contactPage.style.color = "wheat"
        $(".a i").attr("class", "fas fa-times")
        imgCont.style.width = "79%"
        x = 1
    }
    else{
        contactPage.style.width = "0%"
        contactPage.style.backgroundImage = "none"
        contactPage.style.backgroundColor = "rgb(58, 58, 58)"
        contactPage.style.color = "black"
        $(".a i").attr("class", "fa fa-bars")
        imgCont.style.width = "99%"
        x = 0
    }
}