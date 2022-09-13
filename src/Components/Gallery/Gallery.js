import './Gallery.css';
import firebase from "../../firebase";
import React, { useEffect, useState } from "react";
import GalleryHighlightedBeer from "./GalleryHiglightedBeer";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";



function Gallery() {

    const [beers, setBeers] = useState([])
    const [filterValue, setFilterValue] = useState("")
    const filter = (value) => {

    }

    useEffect( () => {firebase.firestore().collection('Beers').onSnapshot(snapshot => (
            setBeers(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])

    return (
        <div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <p>Filter:</p>
                <FormControl size={"small"} style={{width:200, margin:10}}>
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={"Type"}
                        label="Type"
                        placeholder={"Any"}
                        onChange={() => {}}
                    >
                        <MenuItem value={10}>Ipa</MenuItem>
                        <MenuItem value={20}>Apa</MenuItem>
                        <MenuItem value={30}>Ale</MenuItem>
                    </Select>
                </FormControl>
            </div>
            {beers.map(beer => <GalleryHighlightedBeer props={beer} />)}
        </div>
    );

}
export default Gallery;




