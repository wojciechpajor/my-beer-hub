import "./GalleryBeer.css"

function GalleryBeer(beer)  {
    const altImage = "https://firebasestorage.googleapis.com/v0/b/my-beer-hub-355e2.appspot.com/o/No-photo.png?alt=media&token=11ec7801-2545-4b6d-85a4-896a27d957de"
    return (
        <div className = "BeerViewStyle">
            <img className = "beerImageStyle" src = {beer.props.url} alt={altImage}></img>
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