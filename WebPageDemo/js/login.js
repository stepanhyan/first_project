let login = document.getElementById("logIn")

login.addEventListener("click", (e)=>{
  e.preventDefault()
  
  let enterName = document.getElementById("logusername").value;
  let enterPass = document.getElementById("logpassword").value;
  let getName = localStorage.getItem('userName');
  let getPass = localStorage.getItem('userPassword');
    if(enterName == getName)
    {
        if(enterPass == getPass){
          window.location.href = "index.html";      
        }
        else
        {
          alert('wrong password');
        }
    }
    else
    {
      alert('Invalid Details');
    }
  })
