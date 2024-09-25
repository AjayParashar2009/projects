let cards = document.querySelectorAll('.card')


cards.forEach((card)=>{
    card.addEventListener('click',()=>{
        RemoveActiveClass()
        card.classList.add('active')
    })

})

function RemoveActiveClass (){
    cards.forEach((card)=>{
        card.classList.remove('active')
    })
}



// let cards = document.querySelectorAll('.card');

// cards.forEach((card) => {
//     card.addEventListener('click', () => {
//         RemoveActiveClass();
//         card.classList.add('active');
//     });
// });

// function RemoveActiveClass() {
//     cards.forEach((card) => {
//         card.classList.remove('active');
//     });
// }
