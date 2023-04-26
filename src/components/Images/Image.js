import { useEffect, useState } from "react";
import { deleteImage, getImages } from "../APIManager/ImagesManager"
import { useNavigate } from "react-router-dom";
import "./Images.css"

export const Images = () => {
  const [images, setImages] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getImages()
    .then((data) => {
      setImages(data)
    })
  }, [])

  return (
    <article className="images">
      <button onClick={() => navigate("/image/create")}>Add Image</button>
      
{images.map((image) => (
  <section className="image" key={`image--${image.id}`}>
    <div className="image-wrapper">
      <img className="image-thumbnail" src={image.url} alt={image.caption} />
    </div>
    <div className="caption">
      <strong>Caption:</strong> {image.caption}
    </div>
    <div className="hashtag">
      <strong>Hashtags:</strong>{" "}
      {typeof image.hashtag === "string" && image.hashtag.trim() !== ""
        ? image.hashtag.split(" ").map((tag) => (
            <span>{"#" + tag}&nbsp;</span>
          ))
        : "None"}
    </div>
    <button onClick={() => navigate(`/image/edit/${image.id}`)}>Edit</button>
    <button onClick={() => {
        deleteImage(image.id)
        .then(() => {
          getImages().then((data) => {
            setImages(data);
          });
        });
      }}>Delete</button>
  </section>
))}


  </article>
  
  );
  
  
      }



