let task = document.getElementById("task")
let btn = document.getElementById("btn")
let list = document.getElementById("list")
let count = document.getElementById("count")

// Enable button when input is not empty
task.addEventListener("input", () => {
    btn.disabled = task.value.trim() === ""
})

// Add task function
function addTask() {
    if (task.value.trim() !== "") {
        let li = document.createElement("li")
        let span = document.createElement("span")
        span.textContent = task.value

        // Complete button
        let complete = document.createElement("button")
        complete.textContent = "Done"

        complete.addEventListener("click", () => {
            span.classList.toggle("completed")
        })

        // Delete button
        let del = document.createElement("button")
        del.textContent = "Delete"

        del.addEventListener("click", () => {
            li.remove()
            updateCount()
        })

        li.appendChild(span)
        li.appendChild(complete)
        li.appendChild(del)

        list.appendChild(li)

        task.value = ""
        btn.disabled = true

        updateCount()
    }
}

// Add button click
btn.addEventListener("click", addTask)

// Add task using Enter key
task.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !btn.disabled) {
        addTask()
    }
})

// Update task count
function updateCount() {
    count.textContent = list.children.length
}