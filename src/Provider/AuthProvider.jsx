import React, { useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Firebase Provider
  const googleProvider = new GoogleAuthProvider();

  // Firebase
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
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

  const authInfo = { user, setUser, loading, setLoading, signInWithGoogle };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
