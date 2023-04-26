import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createMessage } from "../APIManager/MessagesManager";

export const MessageForm = () => {

    const [message, updateMessage] = useState({
        content: ""
    })

    const navigate = useNavigate()

    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)

    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

    const timeStamp = `${currentDate} ${currentTime}`

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        //Creating object to be saved to api
        const messageToSendToAPI = {
            userId: nutshellUserObject.id,
            userName: nutshellUserObject.fullName,
            content: message.content,
            dateSent: timeStamp
        }

        //Performing fetch to post new object to api
        return createMessage(messageToSendToAPI)
            .then(() => {
                navigate("/messages")
            })
    }
    //Creating message form that will be displayed
    return (
        <form className="messageForm">
            <h2 className="messageForm__title">New Message</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="content">Message:</label>
                    <textarea
                        required autoFocus
                        type="text"
                        style={{
                            height: "10rem"
                        }}
                        className="form-control"
                        value={message.content}
                        onChange={
                            (event) => {
                                const copy = {...message}
                                copy.content = event.target.value
                                updateMessage(copy)
                            }
                        }></textarea>
                </div>
            </fieldset>
            {/* will be used for private messaging later

            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Recipient:</label>
                    <input type="text"
                        value={message.recipient}
                        onChange={
                            (event) => {
                                const copy = {...message}
                                copy.recipient = event.target.checked
                                updateMessage(copy)
                            }
                        } />
                </div>
            </fieldset> */}
            <button 
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Send Message
            </button>
        </form>
    )
}
