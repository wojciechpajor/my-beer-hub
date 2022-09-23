import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/firebase-auth'

export type GlobalContent = {
    auth: string
}

export const AuthContextProvider = ({children}) => {


}