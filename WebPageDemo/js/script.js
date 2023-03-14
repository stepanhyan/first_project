const form = document.getElementById("formsumb")
const article = document.querySelector("article")
const modelName = form.elements[0]
const modelClub = form.elements[1]
const modelPhoto = form.elements[2]
const modelInfo = form.elements[3]
const playSec = document.getElementById("playSec")
const dltBtn = document.getElementById("remButn") 
const wrap = document.querySelector(".swrapper")
const sliderDots = document.querySelector(".sliderDots")
let cards =  Array.from(playSec.getElementsByClassName("card")) 
//==================================================================================================================//

const area = document.getElementById("area")
const resultWrapper = document.getElementById("result-wrapper")
const btnClose = document.getElementById("btn-close")
const overlay = document.getElementById("overlay")

//==================================XO==============================================================================//

let move = 0;
let result = ""

area.addEventListener("click", functional)

function functional(e){
  if(e.target.classList.contains("blokbox")){
    if(e.target.textContent == ""){
      move % 2 === 0 ? e.target.innerText = "X" : e.target.innerText="O"
      move++
      if(move>=9){
        result="TIE"
        winRes(result)
      }
      check()
    }
  }
}

function check(){
  const boxes = document.getElementsByClassName("blokbox") 
  const arr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  for(i = 0; i < arr.length; i++){
    if(
      boxes[arr[i][0]].innerText == "X" &&
      boxes[arr[i][1]].innerText == "X" &&
      boxes[arr[i][2]].innerText == "X" 

    ){
      result = "WINS X"
      winRes(result)

    }else if(
    boxes[arr[i][0]].innerText == "O" &&
    boxes[arr[i][1]].innerText == "O" &&
    boxes[arr[i][2]].innerText == "O"
    ){
      result = "WINS O"
      winRes(result)
    }
  }
}

function winRes(winner){
  content.innerText = ` ${winner}!`;
  resultWrapper.style.display = 'flex';
  area.removeEventListener('click', functional)
}

function closeGame(){
  resultWrapper.style.display = 'none';
  location.reload();
}

overlay.addEventListener("click", closeGame)
btnClose.addEventListener("click", closeGame)

//=========================XO=END====================================================================================//

//=========================SLIDER====================================================================================//

const dots = document.createElement("div")
dots.id = "dots";
let active = 0;

const imageIcon = document.querySelector(".imageIcon")
const fileinput = document.querySelector(".fileinput")

imageIcon.addEventListener('click', ()=>{
  fileinput.click()
})

// modelName.addEventListener("change", ()=>{
//   cards[active].children[0].textContent = modelName.value
// })

// modelPhoto.addEventListener("change", function(){
//   cards[active].children[1].src = `public/images/${""}` + modelPhoto.files[0].name
// })
// modelClub.addEventListener("change", ()=>{
//   cards[active].children[3].innerText = modelClub.value
// })

// modelInfo.addEventListener("change", function(){
//  cards[active].children[5].innerText = modelInfo.value
// })


function loadFile(event){
  cards[active].children[1].src = URL.createObjectURL(event.target.files[0]);
  cards[active].children[1].onload = function() {
      URL.revokeObjectURL(cards[active].children[1].src)
  }
};

modelPhoto.addEventListener("change", loadFile)

const submit = document.getElementById('formsumb')
submit.addEventListener('submit', (event)=>{
  event.preventDefault()
  cards[active].children[0].textContent = modelName.value
  cards[active].children[3].textContent = modelClub.value
  cards[active].children[5].firstChild.textContent = modelInfo.value
  // modelPhoto.addEventListener("change", loadFile)
  // cards[active].children[1].src = `public/images/${""}` + modelPhoto.files[0].name
})

function setSlider(){
  for(let i of cards){
    i.style.transform = `translateX(${-active*100}%)`
  }
  
  if(!active || active){
    for(let i of dots.children){
      i.classList.remove("selected")
      if(i.dataset.id == active) i.classList.add("selected")
    }
  }
  
};

playSec.addEventListener("click", function(e){
  if(e.target.classList.contains ("rightbutton")) {   
    active++
    if(active >=cards.length) active = 0
    setSlider()
  }
  if(e.target.classList.contains ("leftbutton")){
    active--
    if( active <= -1) active = cards.length -1
    setSlider()
  }
});

dltBtn.addEventListener("click", ()=>{
  cards[active].remove()
  cards.splice(active, 1)
  if(!active <= 0) active--
  dots.innerHTML = ""
  setSlider()
  setDots()
  }
)

function setDots(){
  for(let i=0; i < cards.length; i++){
   const dot = document.createElement("div");
    dot.classList.add("dot")
    dot.dataset.id = i;
    dots.appendChild(dot);
  }      
};
    
dots.addEventListener("click", function(e){
  
  if(!e.target.classList.contains("dot")) return
  active = +e.target.dataset.id
  setSlider()
  }
)

const btnBlock = article.querySelector(".btnBlock")
const addPlayer = document.createElement("button")
addPlayer.type = "button"
addPlayer.className = "addedPlayer"
    
addPlayer.addEventListener("click", ()=>{
  if(dots.children.length >=15) return
  const newCard = document.createElement("div")
  newCard.classList.add("card")
  const name = document.createElement("b")
  const img = document.createElement("img")
  const hr = document.createElement("hr")
  const club = document.createElement("p")
  const hr2 = document.createElement("hr")
  newCard.appendChild(name)
  newCard.appendChild(img)
  newCard.appendChild(hr)
  newCard.appendChild(club)
  newCard.appendChild(hr2)
  const infoContainer = document.createElement("div")
  infoContainer.classList.add('containerForP')
  newCard.appendChild(infoContainer)
  const info = document.createElement("p")
  infoContainer.appendChild(info)
  document.querySelector(".swrapper").appendChild(newCard)
  cards.push(newCard)
  const dot = document.createElement("div");
  dot.classList.add("dot")
  dot.dataset.id = cards.length -1 ;
  dots.appendChild(dot);
  active = cards.length - 1
  console.log(newCard)
  setSlider()
});

btnBlock.append(addPlayer)
sliderDots.appendChild(dots)
addPlayer.innerHTML = '<i class="fa-solid fa-circle-plus"></i>' 
setSlider()
setDots()
//=========================SLIDER=END=============================//
let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2') 
let img3 = document.getElementById('img3')
let img4 = document.getElementById('img4')
let defimg = document.getElementById('defimg')
let parallax = document.querySelectorAll('.parallax')


defimg.addEventListener('click',()=>{
  parallax.forEach(elem => {
    elem.style.backgroundImage = "url('https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"
  })
})

img1.addEventListener('click',()=>{
  parallax.forEach(elem => {
    elem.style.backgroundImage = "url('https://images.pexels.com/photos/5652974/pexels-photo-5652974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
  })
})

img2.addEventListener('click',()=>{
  parallax.forEach(elem => {
    elem.style.backgroundImage = "url('https://images.pexels.com/photos/5653005/pexels-photo-5653005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
  })
})

img3.addEventListener('click',()=>{
  parallax.forEach(elem => {
    elem.style.backgroundImage = "url('https://images.pexels.com/photos/5652998/pexels-photo-5652998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
  })
})

img4.addEventListener('click',()=>{
  parallax.forEach(elem => {
    elem.style.backgroundImage = "url('https://images.pexels.com/photos/5652972/pexels-photo-5652972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
    // elem.style.backgroundSize = 'cover';
  })
})

//==================================================//
let userLoged = document.getElementById('userLoged')

if(localStorage.getItem('userName') != null){
  userLoged.innerText = "Welcome dear " + localStorage.getItem('userName') 
}

//==============================================================//

const animatedSection = document.querySelector(".animatedSection");
const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD = 15;

function handleHover(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
  const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

  animatedSection.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles(e) {
  animatedSection.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia.matches) {
  animatedSection.addEventListener("mousemove", handleHover);
  animatedSection.addEventListener("mouseleave", resetStyles);
}
