let login = document.querySelector("#loginbtn")
login.addEventListener("click", checkData)

function checkData(e){
  e.preventDefault()
  let enterName = document.getElementById("username").value;
  let enterPass = document.getElementById("password").value;
  let getName = localStorage.getItem('userName')
  let getPass = localStorage.getItem('userPassword')

  if(enterName == getName)
  {
      if(enterPass == getPass)
      {
        alert('Login Succsess \nWelcome dear' +' '+ getName)
        location.href = "index.html"        
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