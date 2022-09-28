import React, { useContext, useEffect, useState, createContext } from 'react'
import firebase, { auth } from '../firebase'

interface FirebaseContextProps {
    currentUser: firebase.User
    fireSignup: (email:string,password:string)
        => Promise<firebase.auth.UserCredential>
    fireLogin: (email:string,password:string)
        => Promise<firebase.auth.UserCredential>
    fireLogout: () => Promise<void>
}

const AuthContext = createContext<FirebaseContextProps>(null)

export function useAuth() {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<firebase.User>()

    function fireSignup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function fireLogin(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function fireLogout() {
        return auth.signOut()
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            return setCurrentUser(user)
        })

        return unsubscribe
    },[])

    return (
        <AuthContext.Provider value={{currentUser,fireLogin,fireSignup,fireLogout}}>
            {children}
        </AuthContext.Provider>
    )
}