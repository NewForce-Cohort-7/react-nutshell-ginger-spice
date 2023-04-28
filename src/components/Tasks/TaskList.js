import { useEffect, useState } from "react"
import { Tasks } from "./Tasks"
import { useNavigate } from "react-router-dom"
import { GetListOfTasks } from "../APIManager/TasksManager"

export const TaskList = ({tacos, updateTasks}) => {
  const [filteredIncompleteTasks, setFilteredIncompleteTasks] = useState([])
  const [filteredCompleteTasks, setFilteredCompleteTasks] = useState([])

  const navigate = useNavigate()

  const localNutshellUser = localStorage.getItem("nutshell_user")
  const nutshellUserObject = JSON.parse(localNutshellUser)

  useEffect(() => {
    const personalIncompleteTasks = tacos.filter(task => task.userId === nutshellUserObject.id && task.completed === false)
    setFilteredIncompleteTasks(personalIncompleteTasks)

    const personalCompleteTasks = tacos.filter(task => task.userId === nutshellUserObject.id && task.completed === true)
    setFilteredCompleteTasks(personalCompleteTasks)
  }, [tacos])

//   const deleteButton = () => {
//         return <button onClick={() => 

//                 fetch(`http://localhost:8088/tasks/${tacos.id}`, {
//                 method: "DELETE"
//             })
//             .then(() => {
//                 fetch(`http://localhost:8088/tasks`)
//             })
//         } className="ticket__delete">Delete</button>
    

// }


  return (
    <>
      <article className="task-list">
        <div className="incomplete-tasks">
          <h2>To Do List</h2>
          <button onClick={() => navigate("/tasks/create")}>Create Task</button>
          {filteredIncompleteTasks.map((task) => (
            <Tasks key={task.id} task={task} updateTasks={updateTasks} />
          ))}
        </div>
        <div className="complete-tasks">
          <h2>Completed Tasks</h2>
          {filteredCompleteTasks.map((task) => (
            <Tasks key={task.id} task={task} updateTasks={updateTasks} /> 
          ))}
          {/* <footer>
          {
                        deleteButton()
                    }
          </footer> */}
        </div>
      </article>
    </>
  )
}
