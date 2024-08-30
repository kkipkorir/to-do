//buttons
const createTaskBtn = document.getElementById('add-task');
const taskCreationPage = document.getElementById('third-section');
const saveBtn = document.getElementById('save-changes-btn')
//task creation inputs
const titleInput = document.getElementById('task-title-input')
const descriptionInput = document.getElementById('description-input')
const categoryInput = document.getElementById("category-selection")
const dueDateSelection = document.getElementById('due-Date')
const prioritySelection =document.getElementById('priority-selection')
const subTaskBtn = document.getElementById('add-sub-tasks')
//changes
const titleOutput = document.getElementById('task-title')


let taskData = {
    title:'',
    description:'',
    category:'',
    dueDate:'',
    priority:'',
    subTask:{}
}

createTaskBtn.addEventListener('click',event=>{
taskCreationPage.style.display = "flex";
})

const save = ()=>{
    taskData.title = titleInput.value;
    taskData.description = descriptionInput.value;
    taskData.category = categoryInput.value;
    taskData.dueDate = dueDateSelection.value;
    taskData.priority = prioritySelection.value;
    console.log(taskData);
    render();
    }
    
const render=()=>{
titleOutput.innerHTML = `<span>${taskData.title}</span>`
}

saveBtn.addEventListener('click',save)


