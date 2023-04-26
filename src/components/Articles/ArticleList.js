import { useEffect, useState } from "react"
import { getAllArticles, deleteArticle } from "../../components/APIManager/ArticlesManager";

import { useNavigate } from "react-router-dom"
import { ArticleCard } from "./Article"


export const ArticleList = () => {
  const [articles, setArticles] = useState([])

  const navigate = useNavigate();

  const getArticles = () => {
  getAllArticles().then((articlesFromApi) => {
    setArticles(articlesFromApi)
  })
}

const handleDeleteArticle = id => {
  deleteArticle(id).then(() => getAllArticles().then(setArticles))
}

useEffect(() => {
  getArticles()
}, [])

return (
  <>
    <section className="section-content">
      <button
        type="button"
        className="btn"
        onClick={() => {
          navigate("/articles/create")
        }}
      >
        Create Article
      </button>
    </section>
    <div className="container-cards">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          singleArticle ={article}
          handleDeleteArticle ={handleDeleteArticle}
        />
      ))}
    </div>
  </>
)

}