var input1 = document.getElementById("name");
var sp1 = document.getElementById("sp1");
var input2 = document.getElementById("email");
var sp2 = document.getElementById("sp2");
var input3 = document.getElementById("phone");
var sp3 = document.getElementById("sp3");
var input4 = document.getElementById("message");
var send = document.getElementById("send");

input1.addEventListener("input", function () {
    if (input1.value.length===0){
        sp1.innerHTML = "-Name is required"
        // console.log(sp1.innerHTML);
    }else {
        sp1.innerHTML = ""
        // removeEventListener
    }
})    
input2.addEventListener("input", function () {
    if (!/^[\w.-]+@[a-zA-Z]+.com$/.test(input2.value)){
        sp2.innerHTML = "-Email is not valid"
    }else {
        sp2.innerHTML = ""
    }
})    
input3.addEventListener("input", function () {
    if (input3.value.length!==11||isNaN(input3.value)){
        sp3.innerHTML = "-Phone No. is not valid"
    }else {
        sp3.innerHTML = ""
    }
})

send.addEventListener("click", function (e) {
    if ((input1.value.length!==0) && (/^[\w.-]+@[a-zA-Z]+.com$/.test(input2.value)) && (input3.value.length===11) && !isNaN(input3.value)){
        document.cookie= "Name="+input1.value+"";
        document.cookie= "Email="+input2.value+"";
        document.cookie= "Phone="+input3.value+"";
        document.cookie= "message="+input4.value+"";
        // open("http://127.0.0.1:5500/JavaScript/JS%20Project1/Main.html", "_self", "width=400,height=300");
    }
    // console.log(input4.value);
    // e.target.preventDefault();
})
