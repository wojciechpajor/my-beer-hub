import {UserRatingInterface} from "./UserRating.interface";
import {BeerTypes} from "../Enums/BeerTypes.enum";
import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;

export type UserComment = {
author:string,
    content:string,
    date:Timestamp
}

export interface Beer {
    id: string
    name: string
    mark: string
    type: BeerTypes
    alk: string
    origin: string
    userEmail: string
    cropped?: string
    url?: string
    image?: string
    rating?: UserRatingInterface[]
    comments?: UserComment[]
}