// let boxes = document.getElementsByClassName("box")

let boxes = document.querySelector(".container").children

let Changecolor = ()=>{
    val1 = Math.ceil(Math.random()* (255-0+1)+0)
    val2 = Math.ceil(Math.random()* (255-0+1)+0)
    val3 = Math.ceil(Math.random()* (255-0+1)+0)

   return `rgb(${val1},${val2},${val3})`
}


let continuously=()=>{
    Array.from(boxes).forEach((e)=>{
    
        e.style.backgroundColor = Changecolor()
         e.style.color = Changecolor()
         
     })
}

setInterval(continuously,500)
