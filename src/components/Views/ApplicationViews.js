import { Outlet, Route, Routes } from "react-router-dom"


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
                <Route path="image/create" element={ <ImageForm /> } />
                <Route path="images" element={ <Images /> } />
               <Route path="image/edit/:imageId" element={ <ImageEdit /> } />
            </Route>
        </Routes>
    )
}