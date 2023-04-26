

export const FetchListOfTasks = () => {
    return fetch(`http://localhost:8088/tasks`)
    .then(response => response.json())
}