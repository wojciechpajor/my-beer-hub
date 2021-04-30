import "./AddBeer.css"
import React, { useState, useEffect, Fragment } from 'react';
import firebase from "../../firebase"

const AddBeer = () => {
    const [beers, setBeers] = useState([]);
    const [name, setName] = useState('');
    const [mark, setMark] = useState('');
    const [type, setType] = useState('');
    const [alk, setAlk] = useState('');
    const [origin, setOrigin] = useState('');
    const [rating, setRating] = useState('');
    const [url, setUrl] = useState('');

    const ref = firebase.firestore().collection('Beers')

    function addBeer(newBeer) {
        ref
            .doc()
            .set(newBeer)

    }

    return(
        <div className = "bodyStyle"> 
                    <div className = "wrapperStyle">
            <div className = "formStyle">
                <div class ="inputStyle">
                    <input type="text" class = "input" placeholder="Beer Name" onChange ={(e) => setName(e.target.value)}/>
                    <input type="text" class = "input" placeholder="Beer Mark" onChange ={(e) => setMark(e.target.value)} />
                    <input type="text" class = "input" placeholder="Beer Type" onChange ={(e) => setType(e.target.value)} />
                    <input type="number" class = "input" placeholder="Beer Alk" onChange ={(e) => setAlk(e.target.value)} />
                    <input type="text" class = "input" placeholder="Beer Origin" onChange ={(e) => setOrigin(e.target.value)} />
                    <input type="number" class = "input" placeholder="Beer Rating" onChange ={(e) => setRating(e.target.value)} />
                    <input type="text" class = "input" placeholder="firebase image url" onChange ={(e) => setUrl(e.target.value)} />    
                    <div className = "buttonStyle" onClick={() => addBeer({name,mark,type,alk,origin,rating,url})} >Send</div>

                </div>

            </div>

        </div>
        </div>

    )

    
    
}

export default AddBeer;