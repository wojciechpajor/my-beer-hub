import "./GalleryBeer.css"

function GalleryBeer(beer)  {
    return (
        <div className = "BeerViewStyle">
            <img className = "beerImageStyle" src = {beer.props.url}></img>
            <div>
            <li className = "BeerNameStyle">Name: {beer.props.name}</li>
            <li>Mark: {beer.props.mark}</li>
            <li>Type: {beer.props.type}</li>
            <li>Alk: {beer.props.alk}</li>
            <li>Origin: {beer.props.origin}</li>
            <li>rating: {beer.props.rating}/5</li>
            </div>
            
        </div>
    );

}
export default GalleryBeer;