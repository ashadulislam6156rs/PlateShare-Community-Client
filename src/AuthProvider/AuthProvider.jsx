import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

  // * Create user

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // * Google logIn user
  const logInGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // * User onAuth Sate
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  // * User signOut
  const userSignOut = () => {
    return signOut(auth);
  };

    // * Update user
    
    const updateUserInfo = (ProfileInfo) => {
      return updateProfile(auth.currentUser, ProfileInfo);
    };

  // * User Info
  const userInfo = {
    createUser,
    logInGoogle,
    user,
    setUser,
    loading,
    userSignOut,
    updateUserInfo,
  };

  return (
    <>
      <AuthContext value={userInfo}>{children}</AuthContext>
    </>
  );
};

export default AuthProvider;