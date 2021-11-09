//Image Array
$("#captcha").removeAttr("src")
    var imgArray = ["../IMG/Contact_Us/cap1.jpg", "../IMG/Contact_Us/cap2.jpg", "../IMG/Contact_Us/cap3.jpg", "../IMG/Contact_Us/cap4.jpg", "../IMG/Contact_Us/cap5.jpg"]

var size = imgArray.length

var num = Math.floor(Math.random()*size)
var tre = imgArray[num]
$(document).ready(function(){
$("#captcha").attr("src", tre)
})

//Captcha
function Validate(){
    event.preventDefault()
    var Fname = document.getElementById("name").value
    var comp = document.getElementById("company").value
    var phone = document.getElementById("tel").value
    var email = document.getElementById("email").value
    var str = document.getElementById("str").value
    var city = document.getElementById("city").value
    var state = document.getElementById("state").value
    var post = document.getElementById("post").value
    var details = document.querySelectorAll("#demo p")
    var code = document.getElementById("code").value
    var comments = document.getElementById("faq")
    if (num == 0){
        if(code == "A8kY"){
            alert("Once confirmed, We will get back to you")
        }
        else{
            alert("Wrong Access Code")
        }
    }
    if (num == 1){
        if(code == "A8RE"){
            alert("Once confirmed, We will get back to you")
        }
        else{
            alert("Wrong Access Code")
        }
    }
    if (num == 2){
        if(code == "T8R4"){
            alert("Once confirmed, We will get back to you")
        }
        else{
            alert("Wrong Access Code")
        }
    }
    if (num == 3){
        if(code == "2834"){
            alert("Once confirmed, We will get back to you")
        }
        else{
            alert("Wrong Access Code")
        }
    }
    if (num == 4){
        if(code == "2H3U"){
            alert("Once confirmed, We will get back to you")
        }
        else{
            alert("Wrong Access Code")
        }
    }

    
    //Personal Information
    details[0].innerHTML = "Full_Name: " + Fname
    details[1].innerHTML = "Phone No.: " + phone
    details[2].innerHTML = "Email: " + email
    details[3].innerHTML = "Company: " + comp
    details[4].innerHTML = "Address: P.O.B " + post + ", " + str + ", " + city + " " + state
    console.log("Your Comments: " + comments.value)
}