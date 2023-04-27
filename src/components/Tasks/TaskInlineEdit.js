import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { GetListOfTasks } from "../APIManager/TasksManager"


export const InlineEdit = ({taskProp, updateTasks, setShowEdit}) => {
    const [task, setTask] = useState({
        userId: taskProp.userId,
        name: taskProp.name,
        completed: taskProp.completed,
        finishDate: taskProp.finishDate,

    })
    const { tasksId } = useParams()

        const handleSaveButtonClick = (event) => {
            event.preventDefault()

            const newTask ={
                userId: task.userId,
                name: task.name,
                completed: task.completed,
                finishDate: task.finishDate
            }
    
            fetch(`http://localhost:8088/tasks/${taskProp.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            })
            .then(() => fetch(`http://localhost:8088/tasks`))
            .then(response => response.json())
            .then(returnedTasks => updateTasks(returnedTasks))
            .then(()=> setShowEdit(false) )
    
    }

    return (
        <form className="ticketForm"
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
                        onChange={
                            (evt) => {
                                const copy = {...task}
                                copy.name = evt.target.value
                                setTask(copy)
                            }
                        }
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
                         onChange={
                            (evt) => {
                                const copy = {...task}
                                copy.finishDate = evt.target.value
                                setTask(copy)
                            }
                         } 
                        />
                </div>
            </fieldset>
            
            <button 
                className="btn btn-primary">
                Save Edits
            </button>

        </form>
    )
}