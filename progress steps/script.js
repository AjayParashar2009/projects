let Progress = document.getElementById('progress')
let Prev = document.getElementById('Prev')
let Next = document.getElementById('Next')
let Circles = document.querySelectorAll('.circle')



let CurrentActive = 1 

Next.addEventListener('click',(e)=>{
    CurrentActive++;
    if(CurrentActive>Circles.length){
        CurrentActive=Circles.length
    }
    Update()
})



Prev.addEventListener('click',(e)=>{
    CurrentActive--;
    if(CurrentActive<1){
        CurrentActive=Circles.length
    }
    Update()
})

let  Update = (circle,idx) => {
    Circles.forEach((circle,idx)=>{
        if(idx<CurrentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    let active =document.querySelectorAll('.active')
    Progress.style.width = ((active.length-1)/(Circles.length-1)*100 +'%')
    if(CurrentActive === 1){
        Prev.disabled = true
    }else{
        Prev.disabled = false
    }
    
    if(CurrentActive ==  Circles.length){
        Next.disabled = true
        }else{
            Next.disabled = false
        }

}
