import React, { useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Firebase Provider
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // Firebase
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signInWithGitHub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const signUpWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (user, userName, userPhoto) => {
    setLoading(true);
    return updateProfile(user, {
      displayName: userName,
      photoURL: userPhoto,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    signInWithGoogle,
    signInWithGitHub,
    signUpWithEmail,
    loginWithEmail,
    updateUserProfile,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
