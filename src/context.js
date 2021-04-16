import { createContext, useContext, useEffect, useState } from "react";
// import { auth } from "./firebase";
// import firebase from 'firebase/app'
const userContext = createContext();

export const GetContext = () => {
    return useContext(userContext);
}

export const ContextProvider = ({ children }) => {
    // const [loggedInUser, setLoggedInUser] = useState({});
    const [selectedService, setSelectedService] = useState({});
    const [paymentSuccess, setPaymentSuccess] = useState('')
    // const [loading, setLoading] = useState(true);
    // const signUp = (email, password)=> {
    //     return auth.createUserWithEmailAndPassword(email,password)
    // }

    // const login = (email, password)=> {
    //     return auth.signInWithEmailAndPassword(email,password)
    // }
    // const logOut = ()=> {
    //     return auth.signOut();
    // }

    // const googleSignIn = ()=> {
    //     const provider = new firebase.auth.GoogleAuthProvider();
    //     return auth.signInWithPopup(provider)
    // }

    // useEffect(()=> {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //         setLoggedInUser(user)
    //         setLoading(false)
    //     })
    //     return unsubscribe;
    // },[]);

    const value = {
        // loggedInUser, 
        // setLoggedInUser,
        // signUp,
        // login,
        // googleSignIn,
        // logOut,
        selectedService,
        setSelectedService,
        paymentSuccess, 
        setPaymentSuccess,
    }
    return (
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    )
}