// https://facebook-2-6eb19.firebaseapp.com/__/auth/handler

import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC9ohOd5YaYkoGcXgXEQhZ8X_k8pcNGuuE",
  authDomain: "afghansdiasporaconnect.firebaseapp.com",
  projectId: "afghansdiasporaconnect",
  storageBucket: "afghansdiasporaconnect.appspot.com",
  messagingSenderId: "1345503385",
  appId: "1:1345503385:web:504b5d2ebbf529469d7808",
  measurementId: "G-2N3WX0LB7F"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };
