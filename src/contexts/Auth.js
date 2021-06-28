import React from 'react';
import { useState, useEffect, useContext, createContext } from 'react';
import { auth } from '../Firebase';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}


export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    // const [isAuthenticating, setIsAuthenticating] = useState(true);

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    // const sendSignUpLinkToEmail = email => {
    //     return auth.sendSignInLinkToEmail(email, {
    //         url: 'https://localhost:3000/confirm',
    //         handleCodeInApp: true
    //     }).then(() => {
    //         return true;
    //     });
    // };

    // const signInWithEmailLink = (email, code ) => {
    //     return auth.signInWithEmailLink(email, code)
    //     .then(result => {
    //         setUser(result.user)
    //         return true
    //     });
    // };   

    // const logout = () => {
    //     return auth.signOut().then(() => {
    //         setUser(null);
    //     });
    // };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            // setIsAuthenticating(false)
        });

        return unsubscribe;
    }, [])

    const values = {
        currentUser,
        // isAuthenticating,
        signup,
        // sendSignUpLinkToEmail,
        // signInWithEmailLink,
        // logout
    }

    return (
        <AuthContext.Provider values={values}>
            {/* {!isAuthenticating && children} */}
            { children }
        </AuthContext.Provider>
    )
};