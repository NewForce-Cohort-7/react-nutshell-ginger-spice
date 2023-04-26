import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const TaskForm = () => {

    const [task, update] = useState({
        name: "",
        finishDate: ""

    })

    const navigate = useNavigate()

    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()


    const taskToSendToAPI = {
        userId: nutshellUserObject.id,
        name: task.name,
        completed: false,
        finishDate: new Date().toISOString().split('T')[0],

    }
        return fetch(`http://localhost:8088/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(taskToSendToAPI)
    })
   
            .then(response => response.json())
            .then(() => {
                navigate("/tasks")
            })
    }



    return (
        <form className="ticketForm">

            <h2 className="ticketForm__title">New Task</h2>
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
                            (event) => {
                                const copy = {...task}
                                copy.name = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="startDate">start date: </label>
                    <input
                    name="startDate"
                        required autoFocus
                        type="date"
                        className="form-control"
                        value={task.finishDate}
                         onChange={
                            (event) => {
                                const copy = {...task}
                                copy.finishDate = event.target.value
                                update(copy)
                            }
                         } 
                        />
                </div>
            </fieldset>
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                        value={task.emergency}
                        onChange={
                            (event) => {
                                const copy = {...task}
                                copy.emergency = event.target.checked
                                update(copy)

                            }
                        } />
                </div>
            </fieldset> */}
            <button 
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Ticket
            </button>

        </form>
    )
}