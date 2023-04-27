import { useState, useEffect } from "react";
import {  useNavigate} from "react-router-dom";
import { Message } from "./Message";
import { getAllUsers, fetchAllMessages } from "../APIManager/MessagesManager";
import "./Messages.css"

export const MessageList = () => {
    const [messages, setMessages] = useState([])
    const [users, setUsers] = useState([])
    const [count, setcount] = useState(0)
    const navigate = useNavigate()

    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)

    const getAllMessages = () => {
        fetchAllMessages()
        .then((messageArray) => {
            setMessages(messageArray)
        })
    }

    useEffect(() => {
        const interval = setInterval(() => {
          console.log('This will run every  second!');
          setcount(count => count + 1)
        }, 5000);
        return () => clearInterval(interval);
      }, []);

    useEffect(
        () => {
            fetchAllMessages()
            .then((messageArray) => {
                setMessages(messageArray)
            })
        },
        [count] // When this array is empty, you are observing initial component state
    )

    useEffect(
        () => {
            getAllUsers()
            .then((userArray) => {
                setUsers(userArray)
            })
        },
        [] // When this array is empty, you are observing initial component state
    )
    return <>
    
    <h2>List of Messages</h2>
    {/* <button className="createMessage" onClick={() => navigate("/message/create")}>Create Message</button> */}

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