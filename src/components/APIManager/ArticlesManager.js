export const getAllArticles = () => {
  return fetch(`http://localhost:8088/articles?_sort=timestamp&_order=desc`)
  .then(res => res.json())
}

export const addArticle = (newArticle) => {
  return fetch("http://localhost:8088/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newArticle)
  })
  .then(response => {
    console.log("Server response:", response);
    return response.json();
  });
};


export const getArticleById=(articleId)=>{
return fetch(`http://localhost:8088/articles/${articleId}`)
.then(res => res.json())
}

export const updateArticle = (singleArticle) => {
  return fetch(`http://localhost:8088/articles/${singleArticle.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ...singleArticle
    })
  }).then(response => response.json())
}


export const deleteArticle = (articleId) => {
  return fetch(`http://localhost:8088/articles/${articleId}`, {
    method: "DELETE",
  }).then(result => result.json())
  }


