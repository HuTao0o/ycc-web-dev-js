let myBtn = document.getElementById('add-btn')
myBtn.addEventListener('click', addItem)

function addItem(data) {
    let myInput = document.getElementById('do-it')
    let myList = document.getElementById('todo-list')

    if (myInput.value !== '') {
        let newItem = document.createElement('li')
        newItem.classList.add('list-group-item')

        let newBlock =
            `<div class="form-check">
                <input class="form-check-input" type = "checkbox" value = "">
                 <label class="form-check-label" for="ch2">
                    ${myInput.value}
                    </label> 
        </div >`
        newItem.innerHTML = newBlock
        myList.appendChild(newItem)
        myInput.value = '';
    }
}
document.addEventListener('keydown', keycap)
function keycap(data) {
    if (data.keyCode == 13) {
        addItem()
    }
}