import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup , onAuthStateChanged} from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCTjv98xCm6PwBR2Ysed-ymGIB-scI0VrY',
    authDomain: 'hostelfinder-a5619.firebaseapp.com',
    projectId: 'hostelfinder-a5619',
    storageBucket: 'hostelfinder-a5619.appspot.com',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: '1:740652773016:web:459f76de8d61200fbc2aed',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, provider);

// Create Auth Context
const AuthContext = createContext();

// Custom Hook for using Auth Context
export const useAuth = () => useContext(AuthContext);

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default app;


