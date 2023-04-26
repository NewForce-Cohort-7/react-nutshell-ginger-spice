import { Outlet, Route, Routes } from "react-router-dom"
import { Profile } from "../profile/Profile"
import { MessageList } from "../Messages/MessageList"
import { MessageEdit } from "../Messages/MessageEdit"
import { MessageForm } from "../Messages/MessageForm"
import { ImageForm } from "../Images/ImageForm"
import { Images } from "../Images/Image"
import { ImageEdit } from "../Images/ImageEdit"


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
                <Route path="Messages" element={ <MessageList /> } />
                <Route path="Messages/:messageId/edit" element={ <MessageEdit /> } />
                <Route path="Message/create" element={ <MessageForm /> } />
                <Route path="image/create" element={ <ImageForm /> } />
                <Route path="images" element={ <Images /> } />
               <Route path="image/edit/:imageId" element={ <ImageEdit /> } />
            </Route>
        </Routes>
    )
}
