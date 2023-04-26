import { Outlet, Route, Routes } from "react-router-dom"
import { Profile } from "../profile/Profile"
import { Tasklist } from "../Tasks/TaskList"
import { TaskForm } from "../Tasks/TaskForm"

export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1 className="title--main">Nutshell</h1>
                    <div>Your one-stop-shop to get all stuff.</div>

                    <Outlet />
                </>
            }>
                <Route path="profile" element={ <Profile /> } />
                <Route path="tasks" element={ <Tasklist /> } />
                <Route path="tasks/create" element={ <TaskForm /> } />
            </Route>
        </Routes>
    )
}