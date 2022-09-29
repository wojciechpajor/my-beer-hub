import React, {ChangeEvent, FC, useEffect, useState} from "react"
import {Beer, UserComment} from "../../Models/Beer.interface"
import {useParams} from 'react-router-dom';
import firebase from "../../firebase";
import "./DetailedBeerView.css"
import {Divider, Avatar, Grid, Paper, Button, TextField} from "@mui/material";
import firestore = firebase.firestore;
import Timestamp = firebase.firestore.Timestamp;

type SelectedBeerShowcaseProps = {
    beer: Beer
}

export const DetailedBeerView: FC = () => {
    const [beers, setBeers] = useState<Beer[]>([]);
    const [comments, setComments] = useState<UserComment[]>([])
    const [selectedBeer, setSelectedBeer] = useState<Beer>()
    const [addingCommentFieldValue, setAddingCommentFieldValue] = useState<string>()

    const myID = useParams().beerID
    const beersRef = firebase.firestore().collection('Beers')
    const commentsRef = firebase.firestore().collection(`Beers/${myID}/Comments`)

    const getBeers = () => {
        beersRef.onSnapshot(snapshot => {
            const mappedBeers: Beer[] = snapshot.docs.map(doc => ({
                ...doc.data() as Beer,
                id: doc.id,
            }));
            setBeers(mappedBeers)

        })

    }

    const getComments = () => {
        commentsRef.onSnapshot(snapshot => {
            const mappedComments: UserComment[] = snapshot.docs.map(doc => ({
                ...doc.data() as UserComment
            }));
            setComments(mappedComments)
        })
    }

    const addComment = () => {
        commentsRef.doc()
            .set({author:"testAuthor",content: "test content",date: firebase.firestore.FieldValue.serverTimestamp()})
            .then(() => console.log("success"))
    }


    useEffect(() => {
        getBeers()
        getComments()
    }, [])

    useEffect(() => {
        setSelectedBeer(beers.find(beer => beer.id === myID.toString()))
    }, [beers])

    const handleAddingCommentTextFieldChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        e.preventDefault()
        setAddingCommentFieldValue(e.target.value)
    }


    const SelectedBeerShowcase: FC<SelectedBeerShowcaseProps> = ({beer}) => {
        const altImage = "https://firebasestorage.googleapis.com/v0/b/my-beer-hub-355e2.appspot.com/o/No-photo.png?alt=media&token=11ec7801-2545-4b6d-85a4-896a27d957de"

        function choseSource() {
            if (beer.url == null) {
                return beer.cropped
            } else {
                return beer.url
            }
        }

        return (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className="showcaseContainer">
                    <div
                        style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                        <img className="imageContainer" src={choseSource()} alt={altImage}/>
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
                        {comments.length
                            ? <Paper style={{padding: "40px 20px", backgroundColor: "#fff75a"}}>
                                <>
                                    {comments.map(comment => <Grid container wrap="nowrap" spacing={2}>
                                            <Grid item>
                                                <Avatar alt="Grzegorz Karaś" src={"imgLink"}/>
                                            </Grid>
                                            <Grid justifyContent="left" item xs zeroMinWidth>
                                                <h4 style={{margin: 0, textAlign: "left"}}>{comment.author}</h4>
                                                <p style={{textAlign: "left"}}>{comment.content}</p>
                                                <p style={{
                                                    textAlign: "left",
                                                    color: "gray"
                                                }}>{comment.date.toDate().getDay() + " days ago"}</p>
                                            </Grid>
                                        </Grid>
                                    )}
                                </>
                            </Paper>
                            : <Paper style={{padding: "40px 20px", backgroundColor: "#fff75a", width: "80vw"}}>
                                <Grid container wrap="nowrap" spacing={2}>
                                    <Grid justifyContent="left" item xs zeroMinWidth>
                                        <p style={{textAlign: "center"}}>Ten artykuł nie posiada jeszcze komentarza</p>
                                    </Grid>
                                </Grid>
                            </Paper>
                        }
                    </div>
                    <div style={{width:"80%", padding:20,display:"flex", alignItems: "center",justifyContent:"center"}}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Multiline"
                                multiline
                                rows={4}
                                placeholder={"Podaj treść komentarza"}
                                value={addingCommentFieldValue}
                                onChange={(event) => setAddingCommentFieldValue(event.target.value)}
                                style={{width:"100%"}}
                            />
                        <Button style={{margin:5}} variant={"contained"} onClick={() => addComment()}>Dodaj Komentarz</Button>
                    </div>

                </div>
            </div>
        )
    }


    return (
        selectedBeer
            ? <SelectedBeerShowcase beer={selectedBeer}/>
            : <div>{"Loading"}</div>
    )
}