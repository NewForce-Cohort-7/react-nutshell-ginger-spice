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
    <section className="friends">
      <h2 className="header">Added Friends</h2>
      {friends.map((friend) => (
        <div className="friend" key={`friend--${friend.userId}`}>
          {friend.user.username.toUpperCase()}
          <button
            className="delete_btn"
            id={`delete--${friend.id}`}
            onClick={() => handleDeleteFriend(friend.id)}
          >
            DELETE
          </button>
        </div>
      ))}
      <button className="button" onClick={() => setShowSearch(true)}>
        Add Friends
      </button>
      {showSearch && <FriendSearch />}
    </section>
  );
};
