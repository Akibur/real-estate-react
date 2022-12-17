import initializeFirebase from "../Firebase/firebase.init";
import { useState, useEffect } from 'react';
import { useMoralis } from "react-moralis";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken, signOut } from "firebase/auth";


// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const { enableWeb3, isWeb3Enabled, isWeb3EnableLoading, account, Moralis, deactivateWeb3 } =
        useMoralis();

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/dashboard');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/dashboard';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/dashboard';
                history.replace(destination);
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    };

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        localStorage.setItem('idToken', idToken);
                        setToken(idToken);
                    });
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    useEffect(async () => {
        console.log("Fetching User");
        await fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAdmin(data.admin);
                console.log(" User fetched");

            }).catch(err => console.log(err));
    }, [user.email]);

    const logout = () => {
        setIsLoading(true);

        signOut(auth).then(() => {
            // Sign-out successful.
            //Remove Metamask acc info
            window.localStorage.removeItem("connected");
            deactivateWeb3();

        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    };

    //Save user info into mongo db
    const saveUser = (email, name, method) => {
        const user = { email, name };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then();
    };

    const makeAdmin = (email) => {
        setIsLoading(true);
        const user = { email, role: "admin" };
        try {
            fetch('http://localhost:5000/users', {
                method: "PATCH",
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('idToken')}`,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(
                    setIsLoading(false)
                ).catch((error) => {
                    setAuthError(error);
                });

        } catch (error) {
            setAuthError(error);
        }

    };

    return {
        user,
        admin,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        makeAdmin,
        logout
    };
};

export default useFirebase;