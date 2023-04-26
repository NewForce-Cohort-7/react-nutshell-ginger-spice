export const createMessage = (messageObject) => {
    return fetch('http://localhost:8088/messages', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageObject)
    })
    .then(response => response.json())
}

export const deleteMessage = (id) => {
    return fetch(`http://localhost:8088/messages/${id}`, {
        method: "DELETE"
    })
}

export const editMessage = (id, messageObject) => {
    return fetch(`http://localhost:8088/messages/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageObject)

        })
        .then(response => response.json())
}

export const getMessageById = (id) => {
    return fetch(`http://localhost:8088/messages/${id}`)
    .then(response => response.json())
}