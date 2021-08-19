function validateEmail(email) 
    {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

function validateWebsite(website) 
    {
        var re = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/;
        return re.test(website);
    }

function validatePassword(password) 
    {
        var upperCount=0;
        var len=password.length;
        if(len<8) return false;
        var lowerCount=0;
        var numCount=0;
        for(var i=0;i<len;i++) {
          if(/[A-Z]/.test(password.charAt(i))) upperCount++;
          if(/[a-z]/.test(password.charAt(i))) lowerCount++;
          if(/[0-9]/.test(password.charAt(i))) numCount++;
        }
        if(upperCount>0 && lowerCount>0 && numCount>0) return true;
        else return false;
    }

function validatePhone(phone) 
    {
        var re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
        return re.test(phone);
    }

const email = document.getElementById("email");
var emailValue = document.getElementById("email").value;
const nameInput = document.getElementById("name");
var nameValue = document.getElementById("name").value;
const website = document.getElementById("website");
var websiteValue = document.getElementById("website").value;
const password = document.getElementById("password");
var passwordValue = document.getElementById("password").value;
const password2 = document.getElementById("password2");
var password2Value = document.getElementById("password2").value;
const phone = document.getElementById("phone");
var phoneValue = document.getElementById("phone").value;
const button = document.getElementById("submitButton");
var emailValid=false;
var nameValid=false;
var phoneValid=false;
var passwordValid=false;
var password2Valid=false;
var websiteValid=false;

function allValid(){
    if(emailValid==true && nameValid==true && phoneValid==true && passwordValid==true && websiteValid==true &&password2Valid==true)
        return true;
    else return false;
}

function emailCheck() {
    emailValue = document.getElementById("email").value;
    if(validateEmail(emailValue)) {
        document.getElementById("email").style.borderColor = "green";
        emailValid=true;
    }
    else{
        document.getElementById("email").style.borderColor = "red";
        emailValid=false;
    }
    if(allValid()){
        //submitButton.removeAttribute("disabled");
        submitButton.style.background = "green";
    }
    else{
        submitButton.style.background = "blue";
        //submitButton.setAttribute("disabled","disabled");
    }
}

function nameCheck() {
    nameValue = document.getElementById("name").value;
    if(nameValue.length > 2) {
        document.getElementById("name").style.borderColor = "green";
        nameValid=true;
    }
    else{
        document.getElementById("name").style.borderColor = "red";
        nameValid=false;
    }
    if(allValid()){
        //submitButton.removeAttribute("disabled");
        submitButton.style.background = "green";
    }
    else{
        submitButton.style.background = "blue";
        //submitButton.setAttribute("disabled","disabled");
    }
}

function websiteCheck() {
    websiteValue = document.getElementById("website").value;
    if(validateWebsite(websiteValue)) {
        document.getElementById("website").style.borderColor = "green";
        websiteValid=true;
    }
    else{
        document.getElementById("website").style.borderColor = "red";
        websiteValid=false;
    }
    if(allValid()){
        //submitButton.removeAttribute("disabled");
        submitButton.style.background = "green";
    }
    else{
        submitButton.style.background = "blue";
        //submitButton.setAttribute("disabled","disabled");
    }
}

function passwordCheck() {
    passwordValue = document.getElementById("password").value;
    if(validatePassword(passwordValue)) {
        document.getElementById("password").style.borderColor = "green";
        passwordValid=true;
    }
    else{
        document.getElementById("password").style.borderColor = "red";
        passwordValid=false;
    }
    if(allValid()){
        //submitButton.removeAttribute("disabled");
        submitButton.style.background = "green";
    }
    else{
        submitButton.style.background = "blue";
        //submitButton.setAttribute("disabled","disabled");
    }
}

function password2Check() {
    password2Value = document.getElementById("password2").value;
    passwordValue = document.getElementById("password").value;
    if(validatePassword(passwordValue) && password2Value==passwordValue) {
        document.getElementById("password2").style.borderColor = "green";
        password2Valid=true;
    }
    else{
        document.getElementById("password2").style.borderColor = "red";
        password2valid=false;
    }
    if(allValid()){
        //submitButton.removeAttribute("disabled");
        submitButton.style.background = "green";
    }
    else{
        submitButton.style.background = "blue";
        //submitButton.setAttribute("disabled","disabled");
    }
}

function phoneCheck() {
    phoneValue = document.getElementById("phone").value;
    if(validatePhone(phoneValue)) {
        document.getElementById("phone").style.borderColor = "green";
        phoneValid=true;
    }
    else{
        document.getElementById("phone").style.borderColor = "red";
        phoneValid=false;
    }
    if(allValid()){
        //submitButton.removeAttribute("disabled");
        submitButton.style.background = "green";
    }
    else{
        submitButton.style.background = "blue";
        //submitButton.setAttribute("disabled","disabled");
    }
}

email.addEventListener("input", function(event){
    emailCheck();
});

nameInput.addEventListener("input", function (event) {
    nameCheck();
});

website.addEventListener("input", function (event) {
   websiteCheck();
});


password.addEventListener("input", function (event) {
    passwordCheck();
});

password2.addEventListener("input", function (event) {
    password2Check();
});

phone.addEventListener("input", function (event) {
   phoneCheck();
});

function checkAll(){
    emailCheck();
    nameCheck();
    websiteCheck();
    passwordCheck();
    password2Check();
    phoneCheck();
}

submitButton.addEventListener("click", function (event){
    if(allValid()==false){
        const errormsgs = document.getElementById("errors");
        var errors="<ul>";
        if(!nameValid){
            errors+="<li>Name must have atleast three characters</li>"
        }
        if(!phoneValid){
            errors+="<li>Phone number must be formatted XXX-XXX-XXXX</li>"
        }
        if(!passwordValid){
            errors+="<li>Password must have at least 1 uppercase character, 1 lowercase character, and 1 number</li>"
        }
        if(!emailValid){
            errors+="<li>Please enter a valid email address</li>"
        }
        if(!websiteValid){
            errors+="<li>Your URL is not valid</li>"
        }
        if(!password2Valid){
            errors+="<li>Your confirmation password does not match</li>"
        }
        errormsgs.innerHTML=errors;
    }
    else{
        submitButton.setAttribute("type","submit");
        submitButton.click();
    }
});