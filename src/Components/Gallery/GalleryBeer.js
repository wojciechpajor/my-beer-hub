import React from "react";
import "./GalleryBeer.css"

const GalleryBeer = (beer) => {


    const altImage = "https://firebasestorage.googleapis.com/v0/b/my-beer-hub-355e2.appspot.com/o/No-photo.png?alt=media&token=11ec7801-2545-4b6d-85a4-896a27d957de"

    const {name,url,cropped} = beer.props

    function choseSource() {
        if(url==null){
            return cropped
        }
        else {
            return url
        }
    }

    return (
        <div className="p-5" style={{"background": "rgba(33,37,41,0.4"}}>
            <div className="row d-flex justify-content-center align-content-center text-center" style={{"background": "rgba(33,37,41,0.6", "border-radius": "5px"}}>
                <div style={{'height': "300px"}}>
                    <img className="img-fluid p-3" style={{'height': "250px"}} src ={choseSource()} alt={altImage}/>
                    <span className="font-weight-bolder text-white">{name}</span>
                </div>
            </div>
        </div>
        // <div className = "BeerViewStyle" >
        //     <img className = "beerImageStyle" src = {url} alt={altImage} ></img>
        //         <li className = "BeerNameStyle">{name}</li>
        //
        //
        // </div>
    );

}
export default GalleryBeer;