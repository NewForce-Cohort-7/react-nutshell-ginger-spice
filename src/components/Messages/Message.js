import { Link } from "react-router-dom";
import { deleteMessage, editMessage } from "../APIManager/MessagesManager";

export const Message = ({messageObject, getAllMessages, currentUser, users }) => {

    const currentUserInfo = users.find(user => user.id === currentUser.id)


    const deleteButton = () => {
        return <button onClick={() => {
            deleteMessage(messageObject.id)
                .then(getAllMessages)
        }} className="message_delete">Delete</button>
    }

    return <Link to={`/Messages/${messageObject.id}/edit`}>
        <section className="message" >
        <section>{messageObject.content}</section>
        <footer>
            <div className="footer">
                <div className="footerNote">Sent from {currentUserInfo?.fullName} at {messageObject.dateSent}</div>
                {deleteButton()}
            </div>
        </footer>
    </section>
        </Link>
}