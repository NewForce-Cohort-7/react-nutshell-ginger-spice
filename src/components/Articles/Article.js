import { Link } from "react-router-dom"

export const ArticleCard = ({singleArticle, handleDeleteArticle}) => {

    return (
      <>
        <div className="card">
          <div className="cardContent">
            <h3>{singleArticle.title}</h3>
            <br />
            <p>Posted: {singleArticle.timestamp.slice(0, 10)}</p>
            <p>{singleArticle.synopsis}</p>
            <p>{singleArticle.url}</p>
            <button
              type="button"
              onClick={() => handleDeleteArticle(singleArticle.id)}
            >
              Delete
            </button>
            <Link to={`/articles/${singleArticle.id}/edit`}>
    <button>Edit</button>
  </Link>
          </div>
        </div>
      </>
    )

}