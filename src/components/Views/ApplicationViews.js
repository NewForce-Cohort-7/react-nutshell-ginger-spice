import { Outlet, Route, Routes } from "react-router-dom"
import { Profile } from "../Profile/Profile"
import { Tasklist } from "../Tasks/TaskList"
import { TaskForm } from "../Tasks/TaskForm"
import { MessageList } from "../Messages/MessageList"
import { MessageEdit } from "../Messages/MessageEdit"
import { MessageForm } from "../Messages/MessageForm"
import { MessageContainer } from "../Messages/MessageContainer"
import { ImageForm } from "../images/ImageForm"
import { Images } from "../images/Image"
import { ImageEdit } from "../images/ImageEdit"
import { FriendsList } from "../friends/Friends"


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
                <Route path="tasks" element={ <Tasklist /> } />
                <Route path="tasks/create" element={ <TaskForm /> } />
                <Route path="friends" element={ <FriendsList /> } />
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