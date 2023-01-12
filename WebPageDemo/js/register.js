
let loginbtn = document.querySelector("#loginbtn")
let losersoundeffect = document.getElementById("losersoundeffect")
let submitsoundeffect = document.getElementById("submitsoundeffect")
let form = document.getElementById("form")
let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let password2 = document.getElementById("password2")

const formDivs =  Array.from(form.getElementsByClassName("form-control"))

form.addEventListener('change', (e)=>{
    checkInputs()
    checkFilled()
})


function addData(){
    let usName = username.value
    let usEmail = email.value
    let usPass = password.value

    localStorage.setItem('userName', usName);
    localStorage.setItem('userEmail', usEmail);
    localStorage.setItem('userPassword', usPass);
}

function checkInputs(){
    const usernameValue =  username.value.trim();
    const emailValue =  email.value.trim();
    const passwordValue =  password.value.trim();
    const password2Value =  password2.value.trim();

    if(usernameValue === ''){
        setErrorFor(username, 'Username cannot be blank')
    }else{
        setSuccessFor(username)
    }
    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank')
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid')
    }else{
        setSuccessFor(email)
    }
    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank');
    }else{
        setSuccessFor(password)
    }
    if(password2Value === ''){
        setErrorFor(password2, 'Password check cannot be blank');
    }else if(password2Value !== passwordValue){
        setErrorFor(password2, 'Passwords doesnt match')
    }else{
        setSuccessFor(password2)
    }
}

function checkFilled(){
    if((formDivs.every(e => e.classList.contains('success'))))
    {
        loginbtn.removeEventListener("mouseenter", catchButton)
        loginbtn.removeEventListener("click", playLoser)
        loginbtn.addEventListener("click", playSubmit)
        loginbtn.style.transform = 'translateX(0)'
        loginbtn.style.transition = 'transform 100ms ease-in-out';
        loginbtn.addEventListener("mouseover", over=()=>{
            loginbtn.style.transform = 'scale(1.05)'
        })
        loginbtn.addEventListener("mouseout", out=()=>{
            loginbtn.style.transform = 'scale(1)'
        })
        loginbtn.addEventListener("mousedown",  down=()=>{
            loginbtn.style.transform = 'scale(0.88)'
        })
        loginbtn.addEventListener("mouseup", up=()=>{
            loginbtn.style.transform = 'scale(0.99)'
        })
    }else {
        loginbtn.addEventListener("mouseenter", catchButton)
        loginbtn.addEventListener("click", playLoser)
        loginbtn.removeEventListener("mouseover",over)
        loginbtn.removeEventListener("mouseout",out)
        loginbtn.removeEventListener("mousedown",down)
        loginbtn.removeEventListener("mouseup",up)
        loginbtn.removeEventListener("click", playSubmit)
        loginbtn.style.transition = 'transform 220ms ease-in-out';
    }
}

function catchButton(){
    if(loginbtn.style.transform != 'translateX(-100%)'){
       loginbtn.style.transform = 'translateX(-100%)'
    }
    else {
        loginbtn.style.transform = 'translateX(100%)'
    }
}

function isEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = "form-control error"; 
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success"; 
}

loginbtn.addEventListener("click", (e)=>{
    e.preventDefault()
    if(formDivs.every(e => e.classList.contains('success'))){
        window.location.href = "login.html"
        playSubmit()
    }
})

function playLoser() {
    losersoundeffect.play();
}
function playSubmit() {
    submitsoundeffect.play();
}
