let btn = document.querySelector('button')
let input = document.getElementById('input')
let list = document.getElementById('list')



function addTask() {
    if (input.value === '') {
        alert('Please enter a task')
    } else {
        let li = document.createElement("li")
        li.innerHTML = input.value


        input.value = ''

        let deleteBtn = document.createElement('span');
        deleteBtn.classList.add('delete');
        li.appendChild(deleteBtn);


        list.appendChild(li)
    }
}
btn.addEventListener('click', () => {
    addTask()
})
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask()
    }
})


list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        console.log(e.target)
    }
})


list.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
    }
})