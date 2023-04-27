import { useEffect, useState } from "react";
import { getFriends, deleteFriend } from "../APIManager/FriendsManager";
import { FriendSearch } from "./FriendSearch.js";
import "./Friends.css";

export const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const localNutshellUser = JSON.parse(localStorage.getItem("nutshell_user"));

  useEffect(() => {
    getFriends(localNutshellUser.id).then((friends) => {
      setFriends(friends);
    });
  }, []);

  const handleDeleteFriend = (friendlyId) => {
    deleteFriend(friendlyId)
      .then(() => {
        const remainingFriends = friends.filter(friend => friend.id !== friendlyId);
        setFriends(remainingFriends);
      })
      .catch((error) => console.error(error));
  };
  

  return (
    <section className="bg-gray-100 py-8">
      <h2 className="text-2xl font-semibold mb-4">Added Friends</h2>
      {friends.map((friend) => (
        <div className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 mb-4" key={`friend--${friend.userId}`}>
          <p className="text-lg font-medium">{friend.user.username.toUpperCase()}</p>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg"
            id={`delete--${friend.id}`}
            onClick={() => handleDeleteFriend(friend.id)}
          >
            DELETE
          </button>
        </div>
      ))}
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg" onClick={() => setShowSearch(true)}>
        Add Friends
      </button>
      {showSearch && <FriendSearch />}
    </section>
  );

      }
