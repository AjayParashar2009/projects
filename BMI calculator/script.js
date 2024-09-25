const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const height = parseInt(document.querySelector("#Height").value)
    const weight = parseInt(document.querySelector("#Weight").value)
    const result = document.querySelector("#result")
    if (isNaN(height) || height <= 0) {
        result.innerHTML = `please give a valid height ${height}`

    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = `please give a valid weight ${weight}`
    }else{
        // const BMI = Math.round(weight/(((height)/100)**2))
        const BMI = (weight/((height*height)/10000)).toFixed(2)

        if(BMI > 24.9){
            result.innerHTML=`${BMI} you are over weight`

        }else if(BMI < 18.6){
            result.innerHTML=`${BMI} you are under weight`

        }else{
            result.innerHTML = `<span>${BMI} your bmi is normal</span>`
         }
    }

       


})