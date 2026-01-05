import React, { useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';


const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    const createUserWithEmailAndPasswordFunc = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateProfileFunc = (displayName, photoURL) =>{
        return updateProfile(auth.currentUser,{
            displayName,
            photoURL,
        });
    };

    const signInWithEmailAndPasswordFunc = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithEmailFunc = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const signOutUserFunc = () => {
        return signOut(auth)
    };

    const sendPassResetEmailFunc = (email) =>{
        return sendPasswordResetEmail(auth, email)
    }


   const authInfo = {
      user,
      setUser,
      createUserWithEmailAndPasswordFunc,
      signInWithEmailAndPasswordFunc,
      signInWithEmailFunc,
      signOutUserFunc,
      sendPassResetEmailFunc,
      updateProfileFunc,
   };

   useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
        unsubscribe();
    }
   }, []);


    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;