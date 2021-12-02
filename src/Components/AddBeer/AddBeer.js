import "./AddBeer.css"
import React, { useState} from 'react';
import firebase from "../../firebase";
import { useSelector} from 'react-redux';
import { selectUserEmail} from '../../Features/userSlice';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const AddBeer = () => {
    const userEmail = useSelector(selectUserEmail)
    const [name, setName] = useState('');
    const [mark, setMark] = useState('');
    const [type, setType] = useState('');
    const [alk, setAlk] = useState('');
    const [origin, setOrigin] = useState('');
    const [rating, setRating] = useState('');
    //const [url, setUrl] = useState('https://firebasestorage.googleapis.com/v0/b/my-beer-hub-355e2.appspot.com/o/No-photo.png?alt=media&token=6783d368-10b7-44b9-ab55-ef46c4a2aa7f');
    //const [beer, setBeer] = useState([name,mark,type,alk,origin,rating,url]);
    const [crop, setCrop] = useState({aspect: 150 / 340,width: 340 });
    const [cropped, setCropped] = useState(null);
    const [src, selectFile] = useState(null);
    const [image, setImage] = useState(null);


    const ref = firebase.firestore().collection('Beers')

    async function getCropperImg() {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );

        const base64Image = canvas.toDataURL('image/jpeg')

        await setCropped(base64Image)

    }

    function addBeer(newBeer) {
        ref
            .doc()
            .set(newBeer)

    }


    const submitBeer = async (e) => {
        e.preventDefault()
        if ((rating > 0) && (rating <= 5)) {
            addBeer({ name, mark, type, alk, origin, rating, cropped, userEmail })
            window.alert("Beer added successfully !")

        
        }
        else {
            return (
                window.alert("Error: Wrong data")
            )
        }
    }

    const handleFileChange = (e) => {
        selectFile(URL.createObjectURL(e.target.files[0]))

    }

    return (
        <div className="bodyStyle">
            <div className="wrapperStyle">
                <div className="formStyle">
                    <div className="inputStyle">
                        <input required type="text" className="input" placeholder="Beer name" onChange={(e) => setName(e.target.value)} />
                        <input type="text" className="input" placeholder="Beer Mark" onChange={(e) => setMark(e.target.value)} />
                        <input type="text" className="input" placeholder="Beer Type" onChange={(e) => setType(e.target.value)} />
                        <input type="number" className="input" max={100} min={0} placeholder="Beer Alk" onChange={(e) => setAlk(e.target.value)} />
                        <input type="text" className="input" placeholder="Beer Origin" onChange={(e) => setOrigin(e.target.value)} />
                        <input type="number" className="input" min={0} max={5} placeholder="Beer Rating" onChange={(e) => setRating(e.target.value)} />
                        <div>
                        <p className = "labelText">Upload beer photo:</p>
                        <input type="file" className="input" onChange={handleFileChange} accept ="image/*" />
                            {src && (
                                <div>
                                    <ReactCrop
                                        onImageLoaded={setImage}
                                        crop={crop}
                                        onChange={setCrop}
                                        onComplete={image && getCropperImg}
                                        src={src}
                                    />
                                </div>
                            )}
                            {cropped && <img alt='' src={cropped}/>}
                        </div>
                        <div className="buttonStyle" onClick={submitBeer} >Send</div>


                    </div>

                </div>

            </div>
        </div>

    )



}

export default AddBeer;