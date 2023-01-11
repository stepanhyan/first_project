
const form = document.getElementById("formsumb")
const article = document.querySelector("article")
const modelName = form.elements[0]
const modelClub = form.elements[1]
const modelPhoto = form.elements[2]
const modelInfo = form.elements[3]
const playSec = document.getElementById("playSec")
let cards =  Array.from(playSec.getElementsByClassName("card")) 
const dltBtn = document.getElementById("remButn") 
const wrap = document.querySelector(".swrapper")
const sliderDots = document.querySelector(".sliderDots")
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
      URL.revokeObjectURL(cards[active].children[1].src) // free memory
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



