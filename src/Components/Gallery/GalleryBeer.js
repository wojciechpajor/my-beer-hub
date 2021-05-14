import "./GalleryBeer.css"

const GalleryBeer = (beer) => {
    const altImage = "https://firebasestorage.googleapis.com/v0/b/my-beer-hub-355e2.appspot.com/o/No-photo.png?alt=media&token=11ec7801-2545-4b6d-85a4-896a27d957de"
    
    const {name, mark, type, alk, origin, rating, url} = beer.props

    return (
        <div className = "BeerViewStyle">
            <img className = "beerImageStyle" src = {url} alt={altImage}></img>
            <div>
            <li className = "BeerNameStyle">Name: {name}</li>
            <li>Mark: {mark}</li>
            <li>Type: {type}</li>
            <li>Alk: {alk}</li>
            <li>Origin: {origin}</li>
            <li>rating: {rating}/5</li>
            </div>
            
        </div>
    );

}
export default GalleryBeer;