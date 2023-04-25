import { useEffect, useState } from "react";
import { getImages, saveImage, updateImage, deleteImage } from "../ImagesManager";
import "./Images.css"

export const Images = () => {
  const [images, setImages] = useState([]);
  const [selectedHashtag, setSelectedHashtag] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      const data = await getImages();
      setImages(data);
    }
    fetchImages();
  }, []);

  const filteredImages = selectedHashtag
    ? images.filter(
        (image) =>
          image.hashtag && image.hashtag.includes(selectedHashtag)
      )
    : images;

  const handleHashtagClick = (event) => {
    if (event.target.classList.contains("image-tag")) {
      setSelectedHashtag(event.target.dataset.tag);
    }
  };

  const handleDeleteClick = async (event) => {
    if (event.target.id.startsWith("image--")) {
      const [, imageId] = event.target.id.split("--");
      await deleteImage(parseInt(imageId));
      const updatedImages = await getImages();
      setImages(updatedImages);
    }
  };

  const handleImageFormSubmit = async (event) => {
    event.preventDefault();

    const userUrl = event.target.elements.imageUrl.value;
    const userCaption = event.target.elements.imageCaption.value;
    const userHashtag = event.target.elements.imageHashtag.value
      .split(",")
      .map((hashtag) => hashtag.trim());

    if (!userUrl || !userCaption) {
      window.alert("Insufficient Information: Url and Caption Field Required!");
      return;
    }

    const dataToSendToAPI = {
      url: userUrl,
      caption: userCaption,
      hashtag: userHashtag,
      date: new Date(),
    };

    await saveImage(dataToSendToAPI);
    const updatedImages = await getImages();
    setImages(updatedImages);
    event.target.reset();
  };
  function toggleFormVisibility() {
    const form = document.querySelector('.imageForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
  }

  return (
    <>
             <button className="button" onClick={toggleFormVisibility}>
  Add Image
</button>
 
      <div className="images" onClick={handleHashtagClick}>
        {filteredImages.map((image) => {
          const hashtagButtons =
          image.hashtag && image.hashtag.length > 0
            ? image.hashtag.map((hashtag) => (
                <button key={hashtag} className="image-tag" data-tag={hashtag}>
                  {hashtag}
                </button>
              ))
            : null;
        

            
              
              
          return (
            
            <div key={image.id}>
              <div className="images-container">
              <img className="image" id={image.id} src={image.url} alt="" />
              </div>
                <li>{image.caption}</li>
                <li>{hashtagButtons}</li>
                <li>{new Date(image.date).toLocaleDateString()}</li>

                <li>
                  <button
                    className="image__delete"
                    id={`image--${image.id}`}
                    onClick={handleDeleteClick}
                  >
                    Delete
                  </button>
                </li>
              
            </div>
          );
        })}
      </div>

      <form onSubmit={handleImageFormSubmit}>
        <div className="imageForm">
          <label className="label" htmlFor="imageUrl">
            <b>URL</b>
          </label>
          <input type="text" name="imageUrl" className="input" required />
          <br />
          <label className="label" htmlFor="imageCaption">
            <b>Your Caption</b>
          </label>
          <input type="text" name="imageCaption" className="input" required />
          <label className="label" htmlFor="imageHashtag">
            <b>Hashtags</b>
          </label>
          <input
            type="text"
            id="imageHashtag"
            placeholder="#tag1, #tag2, #tag3"
          />
        </div>
        <button className="button" type="submit">
          Add Image
        </button>
      </form>
    </>
  );
};

