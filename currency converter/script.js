// let amount = document.querySelector(".Amount input")

// let From = document.querySelectorAll('.from select , .to select')

// for (let select of From) {

//     for (CurrCode in countryList) {

//         let NewOption = document.createElement('option')
//         NewOption.innerHTML = CurrCode
//         NewOption.value = CurrCode
//         select.appended(NewOption)
//     }

// }





let amount = document.querySelector(".Amount input");

let selects = document.querySelectorAll('.from select, .to select');

selects.forEach(select => {
    for (let currCode in countryList) {
        let newOption = document.createElement('option');
        newOption.value = currCode;
        newOption.textContent = `${currCode} - ${countryList[currCode]}`;
        select.appendChild(newOption);
    }
});

