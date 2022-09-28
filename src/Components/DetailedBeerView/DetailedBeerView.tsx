import React, {FC, useEffect, useState} from "react"
import { Beer} from "../../Models/Beer.interface"
import {useParams} from 'react-router-dom';
import firebase from "../../firebase";
import "./DetailedBeerView.css"
import { Divider, Avatar, Grid, Paper } from "@mui/material";

type SelectedBeerShowcaseProps = {
    beer: Beer
}

export const DetailedBeerView:FC = () => {
    const [beers, setBeers] = useState<Beer[]>([]);
    const [selectedBeer, setSelectedBeer] = useState<Beer>()

    const myID = useParams().beerID

    const getBeers = () => {
        firebase.firestore()
            .collection('Beers')
            .onSnapshot(snapshot => {
                const mappedBeers: Beer[] = snapshot.docs.map(doc => ({
                    ...doc.data() as Beer,
                    id: doc.id
                }));
                setBeers(mappedBeers)
            })
    }

    useEffect(() => {
        getBeers()
    },[])
    useEffect(() => {
        setSelectedBeer(beers.find(beer => beer.id === myID.toString()))
    },[beers])

    console.log(myID, beers)

    const SelectedBeerShowcase:FC<SelectedBeerShowcaseProps> = ({beer}) => {
        const altImage = "https://firebasestorage.googleapis.com/v0/b/my-beer-hub-355e2.appspot.com/o/No-photo.png?alt=media&token=11ec7801-2545-4b6d-85a4-896a27d957de"

        function choseSource() {
            if(beer.url == null){
                return beer.cropped
            }
            else {
                return beer.url
            }
        }

        return(
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div className="showcaseContainer">
                    <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                        <img className="imageContainer" src = {choseSource()} alt={altImage} />
                        <div className="detailsContainer">
                            <li>Name: <b>{beer.name}</b></li>
                            <li>Mark: {beer.mark}</li>
                            <li>Type: {beer.type}</li>
                            <li>Alk: {beer.alk}%</li>
                            <li>Origin: {beer.origin}</li>
                            {/*<li>rating: {beer.rating}/5</li>*/}
                        </div>
                    </div>
                    <div className="commentsContainer">
                        <Paper style={{ padding: "40px 20px",backgroundColor: "#fff75a"}}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Andrzej Jakubiak" src={"imgLink"} />
                                </Grid>
                                <Grid justifyContent="left" item xs zeroMinWidth>
                                    <h4 style={{ margin: 0, textAlign: "left" }}>Andrzej Jakubiak</h4>
                                    <p style={{ textAlign: "left" }}>
                                        Piwo znane i lubiane, zdecydowanie mocnieszy charakter ciemnego piwa oraz wyraźnia duża zawartość alkoholu. Piwo dla osób poszukujących mocnej chmielowej esencji
                                    </p>
                                    <p style={{ textAlign: "left", color: "gray" }}>
                                        posted 12 minute ago
                                    </p>
                                </Grid>
                            </Grid>
                            <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Grzegorz Karaś" src={"imgLink"} />
                                </Grid>
                                <Grid justifyContent="left" item xs zeroMinWidth>
                                    <h4 style={{ margin: 0, textAlign: "left" }}>Grzegorz Karaś</h4>
                                    <p style={{ textAlign: "left" }}>
                                        Jedno z moich ulubionych piw, zdecydowanie popularne ze względu na wyrazisty smak ciemnego piwa oraz dużą zawartość alkoholu. Piwo dla osób raczej z mocną głową ;)
                                    </p>
                                    <p style={{ textAlign: "left", color: "gray" }}>
                                        posted 15 hours ago
                                    </p>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                </div>
            </div>
        )
    }


    return(
        selectedBeer
            ? <SelectedBeerShowcase beer={selectedBeer} />
            : <div>{"Loading"}</div>
    )
}