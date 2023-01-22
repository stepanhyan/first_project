let loginbtn = document.getElementById("loginbtn")
// console.log(login)
loginbtn.addEventListener("click", logedin)
function logedin(e){
  e.preventDefault()
  let enterName = document.getElementById("loginuser").value;
  let enterPass = document.getElementById("loginpassword").value;
  let getName = localStorage.getItem('userName')
  let getPass = localStorage.getItem('userPassword')
    if(enterName == getName)
    {
        if(enterPass == getPass){
          playSubmit()
          alert("Logedin Succsess")
          window.location.href = "index.html"        
        }
        else
        {
          alert('wrong password')
        }
    }
    else
    {
      alert('Invalid Details')
    }
  }
  //=====================================================

let losersoundeffect = document.querySelector(".losersoundeffect")
let submitsoundeffect = document.querySelector(".submitsoundeffect")
let regbtn = document.getElementById("regbtn")
let form = document.getElementById("regForm")
let username = document.getElementById("reguser")
let email = document.getElementById("regemail")
let password = document.getElementById("regpassword")
let password2 = document.getElementById("regpassword2")

let formDivs =  Array.from(form.getElementsByClassName("form-control"))

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
        regbtn.removeEventListener("mouseenter", catchButton)
        regbtn.removeEventListener("click", playLoser)
        regbtn.style.transform = 'translateX(0)'
        regbtn.style.transition = 'transform 100ms ease-in-out';
        regbtn.addEventListener("mouseover", over=()=>{
            regbtn.style.transform = 'scale(1.05)'
        })
        regbtn.addEventListener("mouseout", out=()=>{
            regbtn.style.transform = 'scale(1)'
        })
        regbtn.addEventListener("mousedown",  down=()=>{
            regbtn.style.transform = 'scale(0.88)'
        })
        regbtn.addEventListener("mouseup", up=()=>{
            regbtn.style.transform = 'scale(0.99)'
        })
    }else {
        regbtn.addEventListener("mouseenter", catchButton)
        regbtn.addEventListener("click", playLoser)
        regbtn.removeEventListener("mouseover",over)
        regbtn.removeEventListener("mouseout",out)
        regbtn.removeEventListener("mousedown",down)
        regbtn.removeEventListener("mouseup",up)
        regbtn.style.transition = 'transform 220ms ease-in-out';
    }
}

function catchButton(){
    if(regbtn.style.transform != 'translateX(-100%)'){
       regbtn.style.transform = 'translateX(-100%)'
    }
    else {
        regbtn.style.transform = 'translateX(100%)'
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



function playLoser() {
    losersoundeffect.play();
}
function playSubmit() {
    submitsoundeffect.play();
}
regbtn.addEventListener("click", registered)

function registered(e){
  e.preventDefault()
  if(formDivs.every(e => e.classList.contains('success'))){
      // window.location.href = "index.html"
      playSubmit()
      alert("Registered")
  }
}

