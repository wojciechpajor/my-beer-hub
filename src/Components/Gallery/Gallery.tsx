import './Gallery.css';
import firebase from "../../firebase";
import React, {useEffect, useState} from "react";
import GalleryHighlightedBeer from "./GalleryHiglightedBeer";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {BeerTypes} from "../../Enums/BeerTypes.enum";
import {Beer} from "../../Models/Beer.interface";

function Gallery() {

    const [beers, setBeers] = useState<Beer[]>([]);
    const [filteredBeers, setFilteredBeers] = useState<Beer[]>([]);
    const [filterValue, setFilterValue] = useState<BeerTypes>(BeerTypes.SHOW_ALL)
    const beerTypes: string[] = Object.keys(BeerTypes);

    useEffect(() => {
        getBeers()
    }, [])

    const getBeers = () => {
        firebase.firestore()
            .collection('Beers')
            .onSnapshot(snapshot => {
                const mappedBeers: Beer[] = snapshot.docs.map(doc => ({
                    ...doc.data() as Beer,
                    id: doc.id
                }));
                setBeers(mappedBeers)
                setFilteredBeers(mappedBeers);
            })
    }

    const onBeerFilterChange = (beerType: BeerTypes) => {
        setFilterValue(beerType);
        let filteredBeers: Beer[] = beerType == BeerTypes.SHOW_ALL
            ? beers
            : beers.filter(beer => beer.type == beerType)
        setFilteredBeers(filteredBeers);
    };

    return (
        <div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <p>Filter:</p>
                <FormControl size={"small"} style={{width: 200, margin: 10}}>
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                        id="demo-simple-select"
                        labelId="demo-simple-select-label"
                        value={filterValue}
                        label="Type"
                        onChange={(e) => onBeerFilterChange(e.target.value as BeerTypes)}>

                        {beerTypes.map(beerType =>
                            <MenuItem key={beerType} value={BeerTypes[beerType]}>{BeerTypes[beerType]}</MenuItem>
                        )}
                    </Select>
                </FormControl>
            </div>
            {filteredBeers.map(filteredBeer => <GalleryHighlightedBeer key={filteredBeer.id} props={filteredBeer}/>)}
        </div>
    );

}

export default Gallery;




