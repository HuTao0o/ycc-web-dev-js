let myBtn = document.getElementById('add-btn')
myBtn.addEventListener('click', addItem)

let countTask = 0

function addItem(data) {
    let myInput = document.getElementById('do-it')
    let myList = document.getElementById('todo-list')

    if (myInput.value !== '') {
        let newItem = document.createElement('li')
        newItem.classList.add('list-group-item')
        countTask = countTask + 1;
        let newBlock =
            `<div class="form-check">
                <input onclick="finishTask(${countTask})" class="form-check-input" type = "checkbox" value = "">
                 <label id="taskName-${countTask}" class="form-check-label" for="ch2">
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
function finishTask(id) {
    let taskName = document.getElementById(`taskName-${id}`);
    if(taskName.classList.contains(`completed-item`)) {
        taskName.classList.remove(`completed-item`);
    } else {
        taskName.classList.add(`completed-item`);
    }
}