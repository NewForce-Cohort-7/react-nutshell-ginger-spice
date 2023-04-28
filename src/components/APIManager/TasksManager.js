

export const GetListOfTasks = () => {
    return fetch(`http://localhost:8088/tasks`)
    .then(response => response.json())
}

export const PostNewTask = (taskToSendToAPI) => {
    return fetch(`http://localhost:8088/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(taskToSendToAPI)
    })
   
            .then(response => response.json())
}


// export const EditChangeOfCheckedTask = (task, thingToSendToAPI) => {
//     return fetch(`http://localhost:8088/tasks/${task.id}`, {
//         method: "PUT",
//         headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(thingToSendToAPI)
// })
// .then(response => response.json())

// }