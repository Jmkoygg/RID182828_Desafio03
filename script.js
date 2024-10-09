document.getElementById("task-form").addEventListener("submit", function(event) {
    event.preventDefault()
});

const TaskNameIN=document.getElementById("task-name")
const TaskTagIN=document.getElementById("task-tag")
const TaskList = document.querySelector(".task-list")
const addButton = document.querySelector(".add-button")
const completedInfo = document.querySelector(".completed-info")
let completedCount = 0

const newtask = () =>{

    const TaskName = TaskNameIN.value
    const TaskTag = TaskTagIN.value


    if (TaskName.trim() === "") {
        alert("Por favor, insira uma tarefa.")
        return
    }

    const taskItem = document.createElement('li')
    taskItem.classList.add('task')
    taskItem.innerHTML = `
       <div class="task-info">
        <p class="task-title">${TaskName}</p>
        <div class="task-tags">
        <span class="label">${TaskTag}</span>
        <span class="date">Criado em: ${new Date().toLocaleDateString()}</span>
        </div>
        </div>
        <button class="complete-button" onclick="completeTask(this)">Concluir</button>`

    TaskList.appendChild(taskItem)

    TaskNameIN.value = ""
    TaskTagIN.value = ""
}

const updateCompletedInfo = () => {completedInfo.textContent=`${completedCount} tarefas concluídas`}

const completeTask = (button) => {
    const taskItem = button.closest('.task')
    taskItem.classList.toggle('completed')

    if (taskItem.classList.contains('completed')) {
        button.innerHTML = '✔'
        completedCount++
    } else {
        button.innerHTML = 'Concluir'
        completedCount--
    }
    updateCompletedInfo();
};