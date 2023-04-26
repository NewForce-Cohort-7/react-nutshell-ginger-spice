import { Outlet, Route, Routes } from "react-router-dom"
import { Profile } from "../profile/Profile"
import { MessageList } from "../Messages/MessageList"
import { MessageEdit } from "../Messages/MessageEdit"
import { MessageForm } from "../Messages/MessageForm"

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
                <Route path="Messages" element={ <MessageList /> } />
                <Route path="Messages/:messageId/edit" element={ <MessageEdit /> } />
                <Route path="Message/create" element={ <MessageForm /> } />
            </Route>
        </Routes>
    )
}