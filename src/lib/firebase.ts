import { goto } from '$app/navigation';
import { authUser } from '$lib/authStore';
import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDgs7IhFIe8adVCEDnZINbCBcTK3mi0jBs",
  authDomain: "prefab-root-387509.firebaseapp.com",
  projectId: "prefab-root-387509",
  storageBucket: "prefab-root-387509.appspot.com",
  messagingSenderId: "1079331205086",
  appId: "1:1079331205086:web:1f8eecdacf542bcdc7374f",
  measurementId: "G-WDJG2FHJ8W"
};
if (!getApps().length) {
 const app = initializeApp(firebaseConfig);
}

export const auth = getAuth();


// async function loginHandler(promise: Promise<UserCredential>) {
//   let res: any, serverError: string;
//   try {
//     res = await promise;
 
//   } catch (err) {
//     serverError = err.message;
//     console.error(err);
   
//   }
//   return { res, serverError };
// }


export function listenAuthState(callback) {
  return onAuthStateChanged(auth, callback);
}


export async function signInWithGoogle() {
 signInWithPopup(auth, new GoogleAuthProvider())
 .then((userCredential) => {
   goto('/en/Profile');
   authUser.set({
    displayName:userCredential.user.displayName||'N/A',
    uid: userCredential.user.uid,
    email: userCredential.user.email||'N/A',
    profileIMG:userCredential.user.photoURL||'N/A',
    
  });
  
    console.log(`user is logged-in`)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
}

export async function signInWithEmail(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error('Error signing in with email', error);
  }
}

export async function registerWithEmail(userName,email, password) {
  try {
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      goto('/en/Profile');
      authUser.set({
       displayName:userName||'N/A',
       uid: userCredential.user.uid,
       email: userCredential.user.email||'N/A',
       profileIMG:'N/A',
       
     });
     
       console.log(`user is logged-in`)
     }

    )
  } catch (error) {
    console.error('Error registering with email', error);
  }
}
