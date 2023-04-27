import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editMessage, getMessageById } from "../APIManager/MessagesManager";

export const MessageEdit = () => {

    const navigate = useNavigate()
    const {messageId} = useParams()
    
    const [message, updateMessage] = useState({
        userId: 0,
        userName: "",
        message: "",
        dateSent: ""
    })

    useEffect(() => {
        getMessageById(messageId)
        .then((data) => {
            updateMessage(data)
        })
    }, [messageId])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        //Performing fetch to post new object to api
        return editMessage(message.id, message)
            .then(() => {
                navigate("/messages")
            })
    }
    //Creating message form that will be displayed
    return (
        <form className="messageForm">
            <h2 className="messageForm__title">Edit Message</h2>
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
                Save Changes
            </button>
        </form>
    )
}
