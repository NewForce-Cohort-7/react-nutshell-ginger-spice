import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"


export const TaskEdit = () => {
    // TODO: This state object should not be blank
    const [task, assignTask] = useState({
        name: "",
        finishDate: ""

    })
    // TODO: What is the variable in which you stored the route parameter?
    const { tasksId } = useParams()
    
    // TODO: Get the ticket state from the API.
    useEffect(
        () => {
            fetch(`http://localhost:8088/tasks/${tasksId}`)
                .then(response => response.json())
                .then((tasksArray) => {
                    assignTask(tasksArray)
})
        },
        [tasksId]
    )

    const inputOnChange = (event) => {
       
        const copy = {...task}
        copy[`${event.target.name}`] = event.target.value
        assignTask(copy)
    
    }


        // TODO: Write the fetch for the PUT request to replace the object being edited
        const handleSaveButtonClick = (event) => {
            event.preventDefault()
    
            return fetch(`http://localhost:8088/tasks/${task.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            })
                .then(response => response.json())
                .then(() => {
    
    
        })
    }

    return (
        <form className="taskForm"
        onSubmit={handleSaveButtonClick}>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description"
                        value={task.name}
                        onChange={inputOnChange}
                         />
                </div>
            </fieldset>
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="finish-date">Complete by: </label>
                    <input
                    name="finish-date"
                        required autoFocus
                        type="date"
                        className="form-control"
                        value={task.finishDate}
                         onChange={inputOnChange
                         } 
                        />
                </div>
            </fieldset>
            
            <button 
                className="btn btn-primary">
                Submit task
            </button>

        </form>
    )
}