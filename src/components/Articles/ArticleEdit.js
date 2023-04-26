import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getArticleById, updateArticle } from "../APIManager/ArticlesManager"

export const EditArticleForm = () => {
    const [article, setarticle] = useState({ title: "", synopsis: "",url: "" })
    const [isLoading, setIsLoading] = useState(false);

    const { articleId } = useParams();
    const navigate = useNavigate();

    const handleFieldChange = evt => {
        const stateToChange = { ...article };
        stateToChange[evt.target.id] = evt.target.value;
        setarticle(stateToChange);
    };

    const updateExistingArticle = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedarticle = {
            id: articleId,
            title: article.title,
            synopsis: article.synopsis,
            url: article.url
        };

        updateArticle(editedarticle)
            .then(() => navigate("/articles")
            )
    }

    useEffect(() => {
        getArticleById(articleId)
            .then(article => {
                setarticle(article);
                setIsLoading(false);
            });
    }, [articleId]);


    return (
        <>
          <form>
            <fieldset>
              <div className="formgrid">
              <label htmlFor="name">Article title:</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="title"
                  value={article.title}
                />
                
                <label htmlFor="synopsis">Synopsis:</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="synopsis"
                  value={article.synopsis}
                />
                
                <label htmlFor="synopsis">Url:</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="url"
                  value={article.url}
                />
                
              </div>
              {/* Be sure to include location and customer */}
              <div className="alignRight">
                <button
                  type="button" disabled={isLoading}
                  onClick={updateExistingArticle}
                  className="btn btn-primary"
                >Submit</button>
              </div>
            </fieldset>
          </form>
        </>
      );

}
