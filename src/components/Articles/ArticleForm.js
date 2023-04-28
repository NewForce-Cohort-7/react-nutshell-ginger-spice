import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { addArticle } from "../../components/APIManager/ArticlesManager";



export const ArticleForm = ({isAuthenticated}) => {

  const [article, setArticle] = useState({
    title: "",
    timestamp: new Date().toISOString(),
    synopsis: "",
    url: "",
    userId: JSON.parse(sessionStorage.getItem("nutshell_user"))?.id,
  });
  
     const navigate = useNavigate()

     const handleControlledInputChange = (event) => {
       const newArticle = { ...article }
       let selectedVal = event.target.value

       newArticle[event.target.id] = selectedVal

       setArticle(newArticle)
     }

     const handleClickSaveArticle = (event) => {
      event.preventDefault();
    
      addArticle(article)
        .then(savedArticle => {
          console.log("Saved article:", savedArticle);
          navigate("/articles");
        });
    
    
     }

     return (
       <form className="articleForm">
         <h2 className="articleForm__title">New Article</h2>
         <fieldset>
           <div className="form-group">
             <label htmlFor="objective">Article title:</label>
             <input
               type="text"
               id="title"
               onChange={handleControlledInputChange}
               required
               autoFocus
               className="form-control"
               placeholder="Title"
               value={article.title}
             />
           </div>
         </fieldset>
         <fieldset>
           <div className="form-group">
             <label htmlFor="synopsis">Synopsis:</label>
             <input
               type="text"
               id="synopsis"
               onChange={handleControlledInputChange}
               required
               autoFocus
               className="form-control"
               placeholder="Synopsis"
               value={article.synopsis}
             />
           </div>
         </fieldset>
         <fieldset>
           <div className="form-group">
             <label htmlFor="url">Url:</label>
             <input
               type="text"
               id="url"
               onChange={handleControlledInputChange}
               required
               autoFocus
               className="form-control"
               placeholder="Url"
               value={article.url}
             />
           </div>
         </fieldset>
         <button
           type="button"
           className="btn btn-primary"
           onClick={handleClickSaveArticle}
         >
           Save Article
         </button>
       </form>
     )

}