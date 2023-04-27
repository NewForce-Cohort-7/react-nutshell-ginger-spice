import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { InlineEdit } from "./TaskInlineEdit"


export const Tasks = ( {task, updateTasks} ) => {

    const [isChecked, setIsChecked] = useState(task.completed)
    const [showEdit, setShowEdit] = useState(false)
    const navigate = useNavigate()

    //All this before the return is to change the completed status of your tasks
    useEffect(() => {
        setIsChecked(task.completed)
      }, [task.completed])

    const handleCheckboxChange = (event) => {

        const completed = !isChecked
       
        setIsChecked(completed)

        const thingToSendToAPI = {
            userId: task.userId,
            name: task.name,
            completed: completed,
            finishDate: task.finishDate
        }

        return fetch(`http://localhost:8088/tasks/${task.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(thingToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {


    })
}

       
       return (
        !showEdit ?         
        <section
        onDoubleClick={() => setShowEdit(true)}

            >
                <input type="checkbox" onChange={handleCheckboxChange} value={isChecked}  checked={isChecked}/>
                {task.name} (complete by: {task.finishDate})
            </section>

            :

            < InlineEdit taskProp={task} updateTasks={updateTasks} setShowEdit={setShowEdit}/>
        

    )  
    
}
    



