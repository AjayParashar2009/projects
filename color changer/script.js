const Color = document.querySelectorAll(".button");

const body = document.querySelector("body")


Color.forEach((button)=>{
    // console.log(button);

    button.addEventListener('click',(e)=>{
        // console.log(e);
        // console.log(e.target);
        if (e.target.id === "grey"){
            body.style.backgroundColor = "grey"

        }
         else if (e.target.id === "blue"){
            body.style.backgroundColor = "blue"

        }
         else if (e.target.id === "red"){
            body.style.backgroundColor = "red"

        }
         else if (e.target.id === "yellow"){
            body.style.backgroundColor = "yellow"

        }
    })
})

