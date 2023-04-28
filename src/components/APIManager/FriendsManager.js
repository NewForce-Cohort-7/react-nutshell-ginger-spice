

export const getFriendsById = (id) => {
    return fetch(`http://localhost:8088/friends?_expand=user&friendId=${id}`)
    .then(r => r.json())
}

export const getUserFriends = () => {
    return fetch('http://localhost:8088/users?_embed=friends')
    .then(response => response.json())
}

export const addFriend = (userId, friendId) => {
  return fetch(`http://localhost:8088/friends`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          userId: +userId,
          friendId: +friendId
      })

  })
  .then(response => response.json())
}

  
export const deleteFriend = (friendId) => {
  return fetch(`http://localhost:8088/friends/${friendId}`, {
      method: "DELETE"
  })
}
  
export const getUsers = () => {
  return fetch("http://localhost:8088/users")
    .then(response => response.json())
}

export const getFriends = (id) => {
  return fetch(`http://localhost:8088/friends?_expand=user&friendId=${id}`)
  .then(response => response.json())
}