let bg = document.querySelector('.bg')
let count = document.querySelector('.count')


let value = 0


let  intervalId = setInterval(blurry,30)

function  blurry() {
    value++
    if(value>99){
        clearInterval(intervalId)
    }
        count.innerText =`${value}%`
        count.style.opacity = scale(value,0,100,1,0)
        bg.style.filter = `blur(${scale(value,0,100,30,0)}px)`
    }


    const scale = (num, in_min, in_max, out_min, out_max) => {
        return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
      }