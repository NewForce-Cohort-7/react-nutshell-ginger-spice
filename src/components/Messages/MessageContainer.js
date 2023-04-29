import { useEffect, useState } from "react";
import { MessageForm } from "./MessageForm";
import { MessageList } from "./MessageList";
import { fetchAllMessages } from "../APIManager/MessagesManager";
import "./Messages.css"

export const MessageContainer = () => {

    const [messages, setMessages] = useState([])


    useEffect(()=>{
      fetchAllMessages()
      .then(returnedMessages => setMessages(returnedMessages))
    },[])


    return (
        <>
            <MessageList allMessages={messages} updateMessages={setMessages} />
            <MessageForm  updateStateMessages={setMessages}/>
        </>
    )
}