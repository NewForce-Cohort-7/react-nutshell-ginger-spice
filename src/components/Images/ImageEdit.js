import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { editImage, getImageById } from "../APIManager/ImagesManager"

export const ImageEdit = () => {
    const [image, updateImage] = useState({
        url: "",
        caption: "",
        hashtag: "",
        date: ""
    })
        const navigate = useNavigate()
        const { imageId } = useParams()

        useEffect(() => {
            getImageById(imageId)
                .then((data) => {
                    updateImage(data)
                })
        },
         [imageId]
         
    )
    const handleSaveButtonClick = (evt) => {
        evt.preventDefault()
        editImage(imageId, image) 
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
                        type="text"
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
                onClick={handleSaveButtonClick}
                className="btn btn-primary">
                Save
            </button>

        </form>
    )
}
