import './GalleryHiglightedBeer.css'
import React, { Component } from "react";
import Slider from "react-slick";

const GalleryHighlightedBeer = (beer) => {

    const altImage = "https://firebasestorage.googleapis.com/v0/b/my-beer-hub-355e2.appspot.com/o/No-photo.png?alt=media&token=11ec7801-2545-4b6d-85a4-896a27d957de"

    function choseSource() {
        if(url==null){
            return cropped
        }
        else {
            return url
        }
    }

    const {name, mark, type, alk, origin, rating, url,cropped} = beer.props

    return (

        <div className = "HighlightedBeerStyle" >
            <img className = "HighlightedBeerImageStyle" src = {choseSource()} alt={altImage}></img>
            <div>
                <li>Name: {name}</li>
                <li>Mark: {mark}</li>
                <li>Type: {type}</li>
                <li>Alk: {alk}</li>
                <li>Origin: {origin}</li>
                <li>rating: {rating}/5</li>
            </div>

        </div>
    );

}
export default GalleryHighlightedBeer;