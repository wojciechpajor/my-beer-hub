import './Gallery.css';
import GalleryBeer from './GalleryBeer.js';
import firebase from "../../firebase";
import React, { useEffect, useState } from "react";

function Gallery() {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        firebase.firestore().collection('Beers').onSnapshot(snapshot => (
            setBeers(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])

    return (
        <div className="GalleryGrid">
            {beers.map(beer => (
                <GalleryBeer props={beer}></GalleryBeer>))}

        </div>

    );

}
export default Gallery;




