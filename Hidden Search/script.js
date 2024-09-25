let btn = document.querySelector('.search-btn')
let search = document.querySelector('.Search')
let input = document.querySelector('#input')


btn.addEventListener('click',()=>{
    search.classList.toggle("active")
    input.focus()
})