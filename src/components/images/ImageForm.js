import { useState } from "react";
import { saveImage } from "../ApiManager";

export default function ImageForm({ onImageSave }) {
  const [imageUrl, setImageUrl] = useState("");
  const [imageCaption, setImageCaption] = useState("");
  const [imageHashtag, setImageHashtag] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!imageUrl || !imageCaption) {
      window.alert("Insufficient Information: Url and Caption Field Required!");
      return;
    }

    const userHashtags = imageHashtag
      .split(",")
      .map((hashtag) => hashtag.trim());

    const dataToSendToAPI = {
      url: imageUrl,
      caption: imageCaption,
      hashtag: userHashtags,
      date: new Date(),
    };

    await saveImage(dataToSendToAPI);
    onImageSave();
    setImageUrl("");
    setImageCaption("");
    setImageHashtag("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="imageUrl">URL</label>
      <input
        type="text"
        name="imageUrl"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />
      <br />

      <label htmlFor="imageCaption">Caption</label>
      <input
        type="text"
        name="imageCaption"
        value={imageCaption}
        onChange={(e) => setImageCaption(e.target.value)}
        required
      />
      <br />

      <label htmlFor="imageHashtag">Hashtags</label>
      <input
        type="text"
        name="imageHashtag"
        value={imageHashtag}
        onChange={(e) => setImageHashtag(e.target.value)}
        placeholder="#tag1, #tag2, #tag3"
      />
      <br />

      <button type="submit">Save Image</button>
    </form>
  );
}
