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

    return (
        <>
          <div className="bg-gray-100 py-8">
            <label htmlFor="search--input" className="text-2xl font-semibold mb-4 block">User Search</label>
            <input
              className="border-gray-300 rounded-lg py-2 px-4 w-full mb-4"
              type="text"
              placeholder="Enter username"
              onChange={(event) => {
                setSearchTerms(event.target.value);
              }}
            />
            <p className="text-lg font-medium mb-2">Click a username to add them as a friend</p>
            <div className="space-y-2">
              {filteredUsers.map((user) => (
                <div key={`user--${user.id}`}>
                  <Link className="block text-lg font-medium text-blue-500 hover:underline" id={`user--${user.id}`} onClick={handleAddFriend}>
                    {user.username}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }