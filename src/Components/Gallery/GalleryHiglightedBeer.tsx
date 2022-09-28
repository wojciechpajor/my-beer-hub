import './GalleryHiglightedBeer.css'
import React from "react";
import { useHistory } from 'react-router-dom';

const GalleryHighlightedBeer = (beer) => {

    let history = useHistory()

    const altImage = "https://firebasestorage.googleapis.com/v0/b/my-beer-hub-355e2.appspot.com/o/No-photo.png?alt=media&token=11ec7801-2545-4b6d-85a4-896a27d957de"

    function choseSource() {
        if(url==null){
            return cropped
        }
        else {
            return url
        }
    }

    const {name, mark, type, alk, origin, rating, url,cropped,id} = beer.props

    return (

        <div className = "HighlightedBeerStyle" onClick={() => history.push(`/beer/${id}`)} >
            <div>
            <img className = "HighlightedBeerImageStyle" src = {choseSource()} alt={altImage} />
                <li>Name: {name}</li>
                <li>Type: {type}</li>
            </div>

        </div>
    );

}
export default GalleryHighlightedBeer;