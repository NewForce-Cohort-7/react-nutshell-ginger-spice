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
    <article class="p-4">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate("/image/create")}>Add Image</button>
        
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image) => (
        <section class="bg-white p-4 rounded-lg shadow-md" key={`image--${image.id}`}>
          <div class="w-full h-48">
            <img class="w-full h-full object-cover" src={image.url} alt={image.caption} />
          </div>
          <div class="mt-2 text-lg font-medium">
            <strong>Caption:</strong> {image.caption}
          </div>
          <div class="mt-1 text-sm text-gray-700">
            <strong>Hashtags:</strong>{" "}
            {typeof image.hashtag === "string" && image.hashtag.trim() !== ""
              ? image.hashtag.split(" ").map((tag) => (
                  <span>{"#" + tag}&nbsp;</span>
                ))
              : "None"}
          </div>
          <div class="flex justify-end mt-4">
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => navigate(`/image/edit/${image.id}`)}>Edit</button>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
                deleteImage(image.id)
                .then(() => {
                  getImages().then((data) => {
                    setImages(data);
                  });
                });
              }}>Delete</button>
          </div>
        </section>
      ))}
    </div>
  </article>
  
  
  );
  
  
      }



