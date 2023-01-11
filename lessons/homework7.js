const input = document.createElement('input')
input.placeholder = 'enter text'
input.setAttribute('autofocus', 'autofocus');

const buttonAdd = document.createElement('button')
buttonAdd.innerText = 'Add'
buttonAdd.addEventListener('click', addItem)

const buttonClearAll = document.createElement('button')
buttonClearAll.innerText = 'Clear All'
buttonClearAll.addEventListener('click', function(){
    list.remove()
})

const list = document.createElement('ul')

const toDoList = document.getElementById('todolist')
toDoList.append(input)
toDoList.append(buttonAdd)
toDoList.append(buttonClearAll)
toDoList.append(list)


function addItem(){
    if(isValid(input.value)){
    const task = document.createElement('li')

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.addEventListener('click', function(){
       if(checkbox.checked==true){
        task.classList.add('style')
        buttonEdit.hidden=true
       } else{
        task.classList.remove('style')
        buttonEdit.hidden=false
       }
        
    })
    task.append(checkbox)

    const span = document.createElement('span')
    span.innerText = input.value
    task.append(span)

    const buttonEdit = document.createElement('button')
    buttonEdit.innerText = 'Edit'
    buttonEdit.addEventListener('click', function(){
        const newEditableTask = createEditableTask()
        task.replaceWith(newEditableTask)
        return newEditableTask
    })
    task.append(buttonEdit)

    const buttonRemove = document.createElement('button')
    buttonRemove.innerText = 'Remove'
    buttonRemove.addEventListener('click', function(){
        task.remove()
    })
    task.append(buttonRemove)

    input.value=''

    list.append(task)
   
    return task  

    function createEditableTask(){
        const taskEditable = document.createElement('li')
    
        const inputEditable = document.createElement('input')
        inputEditable.placeholder = 'enter text'
        inputEditable.setAttribute('autofocus', 'autofocus');

        taskEditable.append(inputEditable)
    
        const buttonSave = document.createElement('button')
        buttonSave.innerText = 'Save'
        buttonSave.addEventListener('click', function(){
            if(isValid(inputEditable.value)){
                span.innerText=inputEditable.value
                taskEditable.replaceWith(task)
                return task
            }
            
        })
        taskEditable.append(buttonSave)
    
        const buttonCancel = document.createElement('button')
        buttonCancel.innerText = 'Cancel'
        buttonCancel.addEventListener('click', function(){
            taskEditable.replaceWith(task)
            return task
        })
        taskEditable.append(buttonCancel)

        list.append(taskEditable)
        return taskEditable
    }
}
}

function isValid(item){
    if(item==''){
        alert('Empty inpur or incorrect symbols! Try again!')
    }
    return item
}