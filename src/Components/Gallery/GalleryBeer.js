import "./GalleryBeer.css"

function GalleryBeer(props)  {
    return (

        <div className = "BeerViewStyle">
            <img className = "beerImageStyle" src = {props.url}></img>
            <div>
            <li className = "BeerNameStyle">Name: {props.name}</li>
            <li>Mark: {props.mark}</li>
            <li>Type: {props.type}</li>
            <li>Alk: {props.alk}</li>
            <li>Origin: {props.origin}</li>
            <li>rating: {props.rating}/5</li>
            </div>
            
        </div>
    );

}
export default GalleryBeer;