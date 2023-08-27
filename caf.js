const hamburger = document.querySelector(".hamburger");
const menuitems = document.querySelector(".menuitems");
let teleconfirm = document.querySelector(".tele-confirm");
let makecall = document.querySelector(".tele-call");
let makeemail = document.querySelector(".tele-email");
let yesbtn = document.querySelector("#yes");
let nobtn = document.querySelector("#no");
let form1 = document.querySelector("#form1");
let username = document.querySelector("#username");
let phone = document.querySelector("#phonenumber");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let checkbox = document.querySelector("#checkbox");
let form2 = document.querySelector("#form2");
let email2 = document.querySelector("#email2");
let password2 =document.querySelector("#password2"); 
form2.addEventListener("submit",(f)=>{
    if(!validateform2()){
        f.preventDefault();
    }
    else{
        validateform2();
    }
})

form1.addEventListener("submit",(e)=>{
    if(!validateform()){
        e.preventDefault();
    }
    else{
        validateform();
    }
})
function validateform2(){
    const emailval2 = email2.value.trim();
    const passwordval2 = password2.value.trim();

    if(emailval2===""){
        error(email2,"please enter your registerd email")
    }
    else if(!emailvalidate(emailval2)){
        error(email2,"please enter valid email format")
    }
    else{
        success(email2)
    }
    if(passwordval2===""){
        error(password2,"please enter your password")
    }
    else if(passwordval2.length<8){
        error(password2,"Should be morethan 9 characters");
    }
    else{
        success(password2);
    }
}
function validateform(){
    const usernameval = username.value.trim();
    const phoneval = phone.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();

    if(usernameval===""){
        error(username,"please enter username")
    }
    else{
        success(usernameval)
    }
    if(phoneval===""){
        error(phone,"please enter you number")
    }
    else if(isNaN(phoneval)){
        error(phone,"please enter valid number")
    }
    else if(phoneval.length<10){
        error(phone,"please enter valid number")
    }
    else if(phoneval.length>12){
        error(phone,"please enter valid number")
    }
    else{
        success(phone);
    }
    if(emailval===""){
        error(email,"please enter your email id");
    }
    else if(!emailvalidate(emailval)){
        error(email,"please enter valid mail format")
    }
    else{
        success(email);
    }
    if(passwordval===""){
        error(password,"please enter password")
    }
    else if(passwordval.length<8){
        error(password,"Should be morethan 8 characters")
    }
    else{
        success(password)
    }
    if(!(checkbox.checked)){
        error(checkbox,"confirm")
    }
    else{
        success(checkbox)
    }

 
}
function error(element,message){
    const input = element.parentElement;
    const errorelement =input.querySelector(".error")
    errorelement.innerText=message;
    input.classList.add("error");
    input.classList.remove("success")
}
function success(element){
    const input = element.parentElement;
    const errorelement =input.querySelector(".error")
    errorelement.innerText="";
    input.classList.add("success");
    input.classList.remove("error")
}
const emailvalidate =(email)=>{
    return String(email)
    .toLowerCase()
    .match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
}


hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    menuitems.classList.toggle("active");
})

makecall.addEventListener("click",()=>{
    confirmtele();
    teleconfirm.classList.add("active")
})
makeemail.addEventListener("click",()=>{
confirmtele();
})

function confirmtele(){
    const callval = makecall;
    const emailval = makeemail;
    const yesval = yesbtn;
    const noval = nobtn;
    if(yesval.checked){
        callval = true;
        emailval = true;
    }
    else if(noval.checked){
        callval=false;
        emailval=false;
    }
}

