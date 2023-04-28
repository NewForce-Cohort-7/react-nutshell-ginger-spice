export const newImage = (image) => {
  return fetch('http://localhost:8088/images', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(image)
  })
  .then(response => response.json())
}

export const getImageById = (id) => {
  return fetch(`http://localhost:8088/images/${id}`)
  .then(response => response.json())
}

export const editImage = (imageId, updatedImage) => {
  return fetch(`http://localhost:8088/images/${imageId}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedImage) 
  })
  .then(response => response.json())
}


export const getImages = () => {
  return fetch('http://localhost:8088/images')
  .then(response => response.json())
}

export const deleteImage = (id) => {
  return fetch(`http://localhost:8088/images/${id}`, {
    method: "DELETE",
  })
  .then(response => response.json())
}
