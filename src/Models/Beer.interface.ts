import {UserComment} from "./UserComment";

export interface Beer {
    id: string
    name: string
    mark: string
    type: string
    alk: string
    origin: string
    rating: number
    cropped?: string
    url?: string
    image?: string
    comments?: UserComment[]
}