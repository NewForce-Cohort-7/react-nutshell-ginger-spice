import { useState, useEffect } from "react";
import {  useNavigate} from "react-router-dom";
import { Message } from "./Message";
import "./Messages.css"

export const MessageList = () => {
    const [messages, setMessages] = useState([])
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)

    const getAllMessages = () => {
        fetch('http://localhost:8088/messages')
        .then(response => response.json())
        .then((messageArray) => {
            setMessages(messageArray)
        })
    }

    useEffect(
        () => {
            getAllMessages()

            fetch('http://localhost:8088/messages')
            .then(response => response.json())
            .then((messageArray) => {
                setMessages(messageArray)
            })
        },
        [] // When this array is empty, you are observing initial component state
    )

    useEffect(
        () => {
            fetch('http://localhost:8088/users')
            .then(response => response.json())
            .then((userArray) => {
                setUsers(userArray)
            })
        },
        [] // When this array is empty, you are observing initial component state
    )
    return <>
    
    <h2>List of Messages</h2>
    <button className="createMessage" onClick={() => navigate("/message/create")}>Create Message</button>

    <article className="Messages">
        
        {
            messages.map(
                (message) => <Message getAllMessages={getAllMessages}
                    currentUser={nutshellUserObject}
                    users={users} 
                    messageObject={message} 
                    key={`message--${message.id}`} />
            )
        }
    </article>
    </>
}