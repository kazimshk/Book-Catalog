import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC0-M9d1Ye9XSiL6kFHZu_7DMZrXl7_ip0",
    authDomain: "book-catalog-497a0.firebaseapp.com",
    projectId: "book-catalog-497a0",
    storageBucket: "book-catalog-497a0.appspot.com",
    messagingSenderId: "166874621371",
    appId: "1:166874621371:web:0d3c64893b7201cd05d09e",
    measurementId: "G-VEL3R7Y4Z2"
  };

  export const userData =async (userAuth, otherdata) =>{
    console.log("Check here "+userAuth);
      if(!userAuth)   //if its null it will return 
      {
        return;
      }
      const {email, displayName} = userAuth;
      const createdAt = new Date();
      const userRef = firestore.doc(`User/${userAuth.uid}`);
       const snapShot = await userRef.get();
      console.log("heeeloo "+snapShot);
      if(!snapShot.exists){

      try {
        userRef.set({
          email,
          displayName,
          createdAt,
          ...otherdata
        })
      } catch (error) {
        console.log("Error", error);        
      }
  }
  return userRef;
}

  firebase.initializeApp(config);
 
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});          //triggers the google pop up whenever we use this google auth provider
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;