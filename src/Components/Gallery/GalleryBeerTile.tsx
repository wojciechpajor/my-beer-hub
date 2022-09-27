import './GalleryBeerTile.css'
import React from "react";
import {useHistory} from 'react-router-dom';

const GalleryBeerTile = (beer) => {
    let history = useHistory()
    const altImage = "https://firebasestorage.googleapis.com/v0/b/my-beer-hub-355e2.appspot.com/o/No-photo.png?alt=media&token=11ec7801-2545-4b6d-85a4-896a27d957de"

    function getImgSource(): string {
        return !!url ? url : cropped;
    }

    const {name, type, url, cropped, id} = beer.props;

    return (
        <div className="BeerTile" onClick={() => history.push(`/beer/${id}`)}>
            <img className="BeerTileImage" src={getImgSource()} alt={altImage}/>
            <li>Name: {name}</li>
            <li>Type: {type}</li>
        </div>
    );

}
export default GalleryBeerTile;
