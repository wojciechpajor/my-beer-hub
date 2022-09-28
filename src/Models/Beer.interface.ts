import {UserCommentInterface} from "./UserComment.interface";
import {UserRatingInterface} from "./UserRating.interface";
import {BeerTypes} from "../Enums/BeerTypes.enum";

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
    rating: UserRatingInterface[]
    comments?: UserCommentInterface[]
}