import './Gallery.css';
import GalleryBeer from './GalleryBeer.js';
import firebase from "../../firebase";
import React, { useEffect, useState } from "react";
import GalleryHighlightedBeer from "./GalleryHiglightedBeer";
import Slider from "react-slick";



function Gallery() {

    const renderSlides = () =>
        beers.map(beer => (
            <div>
                <GalleryBeer props={beer}></GalleryBeer>
            </div>
        ));
    const settings = {
        className: "sliderStyle",
        dots: false,
        centerMode: true,
        centerPadding: "0",
        infinite: true,
        autoplay: true,
        speed: 1500,
        focusOnSelect: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        afterChange: (currentSlide) => {setHighlighterBeer(currentSlide)}
    };

    const [beers, setBeers] = useState([])
    const [highlightedBeer, setHighlighterBeer] = useState(0)

    useEffect( () => {firebase.firestore().collection('Beers').onSnapshot(snapshot => (
            setBeers(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])

    return (
    beers[highlightedBeer] ? (
        <div className="galleryStyle">
            <div className="highlightStyle">
                <GalleryHighlightedBeer props = {beers[highlightedBeer]}></GalleryHighlightedBeer>
            </div>
            <Slider {...settings}>{renderSlides()}</Slider>
        </div>
    ) : (
        <div>Loading</div>
    )


    );

}
export default Gallery;




