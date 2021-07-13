import "./AddBeer.css"
import React, { useState, useEffect, Fragment } from 'react';
import firebase from "../../firebase"
import {useDispatch, useSelector} from 'react-redux'
import { selectUserEmail, setActiveUser } from '../../Features/userSlice'

const AddBeer = () => {
    const userEmail = useSelector(selectUserEmail)
    const altImg = "waiting for upload"
    const [name, setName] = useState('');
    const [mark, setMark] = useState('');
    const [type, setType] = useState('');
    const [alk, setAlk] = useState('');
    const [origin, setOrigin] = useState('');
    const [rating, setRating] = useState('');
    const [url, setUrl] = useState('https://firebasestorage.googleapis.com/v0/b/my-beer-hub-355e2.appspot.com/o/No-photo.png?alt=media&token=6783d368-10b7-44b9-ab55-ef46c4a2aa7f');
    const [beer, setBeer] = useState(name,mark,type,alk,origin,rating,url);

    const ref = firebase.firestore().collection('Beers')

    function addBeer(newBeer) {
        ref
            .doc()
            .set(newBeer)

    }


    const submitBeer = (e) => {
        e.preventDefault()
        if ((rating > 0) && (rating <= 5) && (url)) {
            addBeer({ name, mark, type, alk, origin, rating, url, userEmail })
            window.alert("Beer added succesfully !")
        
        }
        else {
            return (
                window.alert("Error: Wrong data")
            )
        }
    }

    const onFileChange = async (e) => {
        const file = e.target.files[0]
        const storageRef = firebase.storage().ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        const fileUrl = await fileRef.getDownloadURL()
        await setUrl(fileUrl)

    }

    return (
        <div className="bodyStyle">
            <div className="wrapperStyle">
                <div className="formStyle">
                    <div class="inputStyle">
                        <input required type="text" class="input" placeholder="Beer name" onChange={(e) => setName(e.target.value)} ></input>
                        <input type="text" class="input" placeholder="Beer Mark" onChange={(e) => setMark(e.target.value)} />
                        <input type="text" class="input" placeholder="Beer Type" onChange={(e) => setType(e.target.value)} />
                        <input type="number" class="input" max={100} min={0} placeholder="Beer Alk" onChange={(e) => setAlk(e.target.value)} />
                        <input type="text" class="input" placeholder="Beer Origin" onChange={(e) => setOrigin(e.target.value)} />
                        <input type="number" class="input" min={0} max={5} placeholder="Beer Rating" onChange={(e) => setRating(e.target.value)} />
                        <div>
                        <p class = "labelText">Upload beer photo:</p>
                        <input type="file" class="input" onChange={onFileChange} accept =".png, .jpg" />
                        </div>
                        <div className="buttonStyle" onClick={submitBeer} >Send</div>


                    </div>

                </div>

            </div>
            <div className = "BeerViewStyle">
                <img className = "beerImageStyle" src = {url} alt={altImg}></img>
                <div>
                    <li className = "BeerNameStyle">Name: {name}</li>
                    <li>Mark: {mark}</li>
                    <li>Type: {type}</li>
                    <li>Alk: {alk}</li>
                    <li>Origin: {origin}</li>
                    <li>rating: {rating}/5</li>
                    {userEmail ? (<li>User: {userEmail}</li>) : null }

                </div>

            </div>
        </div>

    )



}

export default AddBeer;