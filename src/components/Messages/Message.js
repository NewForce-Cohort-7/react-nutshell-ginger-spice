import { Link } from "react-router-dom";
import { deleteMessage, editMessage } from "../APIManager/MessagesManager";

export const Message = ({messageObject, getAllMessages, currentUser, users }) => {

    const currentUserInfo = users.find(user => user.id === messageObject.userId)

    const editOrNoEdit = () => {
        if(currentUser.id === messageObject.userId) {
            return <Link to={`/Messages/${messageObject.id}/edit`}>
                <div className="footerNote">Sent from {currentUserInfo?.fullName} at {messageObject.dateSent}</div>
                </Link>
        } else {
            return <div className="footerNote">
                Sent from {currentUserInfo?.fullName} at {messageObject.dateSent}
                </div>
        }
    }

    const deleteButton = () => {
        return <button onClick={() => {
            deleteMessage(messageObject.id)
                .then(getAllMessages)
        }} className="message_delete">Delete</button>
    }

    return <section className="message" >
        <section>{messageObject.content}</section>
        <footer>
            <div className="footer">
                {editOrNoEdit()}
                {deleteButton()}
            </div>
        </footer>
    </section>
}