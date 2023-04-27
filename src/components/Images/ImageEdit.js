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
        <form className="image__form bg-gray-200 rounded-md p-8">
        <fieldset>
            <div className="form-group">
                <label htmlFor="url" className="text-lg font-bold text-purple-500 mb-2 block">URL:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control image--input border-2 border-purple-500 rounded-md py-2 px-4 block w-full"
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
                <label htmlFor="caption" className="text-lg font-bold text-purple-500 mb-2 block">Caption:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control image--input border-2 border-purple-500 rounded-md py-2 px-4 block w-full"
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
                <label htmlFor="caption" className="text-lg font-bold text-purple-500 mb-2 block">Hashtags:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control image--input border-2 border-purple-500 rounded-md py-2 px-4 block w-full"
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
            className="btn btn-primary bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-300 mt-8">
            Save
        </button>
    </form>
    

    )
}
