import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createMessage } from "../APIManager/MessagesManager";
import { Dropdown } from "./PrivateMessageDropdown"
import"./Messages.css"

export const MessageForm = ({updateStateMessages}) => {

    const [message, updateMessage] = useState({
        content: ""
    })

    const navigate = useNavigate()
    const [showforumform, setforumshow] = useState(false)
    const [showprivateform, setprivateshow] = useState(false)

    function eraseText() {
        document.getElementById("output").value = "";
    }

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
            userName: nutshellUserObject.userName,
            content: message.content,
            recipient: message.recipient,
            dateSent: timeStamp
        }
       
        //Performing fetch to post new object to api
        return createMessage(messageToSendToAPI)
            .then(returnedMessages => updateStateMessages(returnedMessages))
            .then(()=> updateMessage({ 
            userName: "",
            content: "",
            recipient: "",
            dateSent: ""
            }))
        }

    
    //Creating message form that will be displayed
    return <>{

        
        <button className="new-forum-message" onClick={() => setforumshow(true)}>New Forum Message</button>
    }
    {

        
        <button className="new-private-message" onClick={() => setprivateshow(true)}>New Private Message</button>
    }
    {
        showforumform?
        <form className="messageForm" id="forumform">
            <h2 className="messageForm__title">New Forum Message</h2>
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
            <button 
            onClick={(clickEvent) => {
                handleSaveButtonClick(clickEvent);
                setforumshow(false);
            }}
            className="btn btn-primary">
                Send Forum Message
            </button>
            <button 
            onClick={() => {
                setforumshow(false);
                updateMessage("")
            }}
            className="btn btn-primary">
                Cancel
            </button>
        </form>
        :null
        
    }
    {
        showprivateform?
        <form className="messageForm">
        <h2 className="messageForm__title">New Private Message</h2>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="name">Recipient:</label>
                            <Dropdown placeHolder={"Select Recipient"}/>
                        </div>
                    </fieldset> 
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
        <button 
        onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
        className="btn btn-primary">
            Send Private Message
        </button>
        <button 
            onClick={() => {
                setprivateshow(false);
                updateMessage("")
            }}
            className="btn btn-primary">
                Cancel
            </button>
    </form>
    :null
    }

        </>}
