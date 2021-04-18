import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "./firebase";
const userContext = createContext();

export const GetContext = () => {
    return useContext(userContext);
}

export const ContextProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState({});
    const [selectedService, setSelectedService] = useState({});
    const [paymentSuccess, setPaymentSuccess] = useState('')
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const email = loggedInUser?.email
    useEffect(() => {
        axios.post('https://arcane-sands-09318.herokuapp.com/admin', { email: email })
            .then(res => {
                setIsAdmin(res.data)
            })
    }, [email])

    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }
    const logOut = () => {
        return auth.signOut();
    }

    const googleSignIn = () => {
        return auth.signInWithPopup(googleProvider)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setLoggedInUser(user)
            setLoading(false)
        })
        return unsubscribe;
    }, []);

    const value = {
        loggedInUser,
        setLoggedInUser,
        signUp,
        login,
        googleSignIn,
        logOut,
        isAdmin,
        selectedService,
        setSelectedService,
        paymentSuccess,
        setPaymentSuccess,
    }
    return (
        <userContext.Provider value={value}>
            {!loading && children}
        </userContext.Provider>
    )
}