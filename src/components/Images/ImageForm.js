import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { newImage } from "../APIManager/ImagesManager"

export const ImageForm = () => {
    const navigate = useNavigate()

    const [image, updateImage] = useState({
        url: "",
        caption: "",
        hashtag: "",
        date: ""
        
    })

    const handleSaveButtonClick = (evt) => {
        evt.preventDefault()
        const imageToSendToAPI = {
            id: image.id,
            url: image.url,
            caption: image.caption,
            hashtag: image.hashtag
        }
        return newImage(imageToSendToAPI)
        .then(()=> {
            navigate("/images")
        })
    }

    return (
        <form className="image__form">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="url">URL: </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control image--input"
                        placeholder="URL"
                        value={image.url}
                        onChange={
                            (evt) => {
                                const copy = {...image}
                                copy.url = evt.target.value
                                updateImage(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="caption">Caption:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control image--input"
                        placeholder="Caption"
                        value={image.caption}
                        onChange={
                            (evt) => {
                                const copy = {...image}
                                copy.caption = evt.target.value
                                updateImage(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="caption">Hashtags:</label>
                    <input
                        required autoFocus
                        type="tag"
                        className="form-control image--input"
                        placeholder="Hashtags"
                        value={image.hashtag}
                        onChange={
                            (evt) => {
                                const copy = {...image}
                                copy.hashtag = evt.target.value
                                updateImage(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button 
                onClick={(image) => {handleSaveButtonClick(image)}}
                className="btn btn-primary">
                Save
            </button>

        </form>
    )
}