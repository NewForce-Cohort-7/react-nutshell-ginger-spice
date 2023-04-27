import { Outlet, Route, Routes } from "react-router-dom"
import { Profile } from "../profile/Profile"
import { TaskForm } from "../Tasks/TaskForm"


import { MessageList } from "../Messages/MessageList"
import { MessageEdit } from "../Messages/MessageEdit"
import { MessageForm } from "../Messages/MessageForm"
import { MessageContainer } from "../Messages/MessageContainer"
import { ImageForm } from "../Images/ImageForm"
import { Images } from "../Images/Image"
import { ImageEdit } from "../Images/ImageEdit"
import { TaskEdit } from "../Tasks/TaskEdit"
import { TaskContainer } from "../Tasks/TaskContainer"


export const ApplicationViews = () => {
	return (
        <Routes>

            <Route path="/" element={

                <>
                    <h1 className="title--main">Nutshell</h1>
                    <div>Your one-stop-shop to get all stuff.</div>


                <div className="images-container">
                   
                </div>
                    <Outlet />
                </>
            }>
                <Route path="profile" element={ <Profile /> } />
                <Route path="tasks" element={ <TaskContainer /> } />
                <Route path="tasks/create" element={ <TaskForm /> } />
                <Route path="tasks/edit/:tasksId" element={ <TaskEdit /> } />
                <Route path="profile" element={ <Profile /> } />
                <Route path="messages" element={ <MessageContainer />} />
                <Route path="messages/:messageId/edit" element={ <MessageEdit /> } />
                <Route path="image/create" element={ <ImageForm /> } />
                <Route path="images" element={ <Images /> } />
               <Route path="image/edit/:imageId" element={ <ImageEdit /> } />
            </Route>
        </Routes>
    )
}