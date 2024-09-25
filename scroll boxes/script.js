let boxes = document.querySelectorAll('.box')

window.addEventListener('scroll',down)

down()

function down(){
    let triggerpoint = window.innerHeight/5*4
    boxes.forEach(box=>{
            let boxtop = box.getBoundingClientRect().top
    
            if(boxtop<triggerpoint){
                box.classList.add('show')
            }else{
                box.classList.remove('show')
            }
    })
    
        
    }

