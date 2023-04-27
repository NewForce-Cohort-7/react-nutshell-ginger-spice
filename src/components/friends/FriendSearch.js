import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getUserFriends, addFriend } from "../APIManager/FriendsManager"

import "./Friends.css"
export const FriendSearch = () => {

    const [userFriends, setUserFriends] = useState([])
    const [unfriendedUsers, setUnfriended] = useState([])
    const [searchTerms, setSearchTerms] = useState("")
    const [filteredUsers, setFiltered] = useState([])

    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)

    useEffect(() => {
        getUserFriends()
            .then((array) => {
                setUserFriends(array)
            })
        }, []
    )

    useEffect(() => {
        const userArray = userFriends.filter(user => { 
            return user.friends.length=== 0 || user.friends.some(friend => {
                return friend.friendId !== nutshellUserObject.id && user.id !== nutshellUserObject.id
            })
        })
        
        setUnfriended(userArray)
        setFiltered(userArray)
            
        }, [userFriends, nutshellUserObject.id]
    )

    useEffect(
        () => {
            const searchedUsers = unfriendedUsers.filter(user => {
                return user.username.toLowerCase().startsWith(searchTerms.toLowerCase())
            })
            setFiltered(searchedUsers)
        }, [searchTerms]
    )

    const handleAddFriend = (event) => {
        event?.preventDefault()

        const userId = nutshellUserObject.id
        const [,friendId] = event.target.id.split("--")

        return addFriend(userId, friendId)
        .then(addFriend(friendId, userId))
        .then(window.location.reload())
    }

    return <>

        <div className="search--field">
            <label htmlFor="search--input"><h2>User Search</h2></label>
            <input className="search--input"
                    type="text" 
                    placeholder="Enter username" 
                    onChange={event => {
                        setSearchTerms(event.target.value)
                    }} 
            />
        </div>

        <div className="search--userlist">
        <p className="search--instruct">Click a username to add them as a friend</p>
            {filteredUsers.map(user => {
                return <>
                        <div>
                        <Link className="user" id={`user--${user.id}`} onClick={(event) => {handleAddFriend(event)}} key={`user--${user.id}`}>{user.username}</Link>
                        </div>
                        </>
            })}
        </div>

    </>
}