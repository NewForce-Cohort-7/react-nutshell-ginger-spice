import { useState } from "react"
import { useEffect } from "react"


export const Tasks = ( {task} ) => {

    const [isChecked, setIsChecked] = useState(task.completed)

    useEffect(() => {
        setIsChecked(task.completed)
      }, [task.completed])

    const handleCheckboxChange = (event) => {
        event.preventDefault()  

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


       
       return <>
            <section>
                <input type="checkbox" onChange={handleCheckboxChange} value={isChecked}  checked={isChecked}/>
                {task.name} (complete by: {task.finishDate})
            </section>

    </>  
    
}
    



