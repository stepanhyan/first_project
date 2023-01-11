const dots =  Array.from(document.querySelectorAll(".dots")) 

dots.forEach(elem => {
    for (let i = 0; i < 5; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot')
        elem.appendChild(dot)    
    }
})

document.querySelector(".motivation").addEventListener('click', ()=> location.href = "letter.html" );


document.querySelector(".trnback").addEventListener('click', ()=> location.href = "index.html" );