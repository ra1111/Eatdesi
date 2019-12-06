import firebase from 'firebase'
export const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyBdKsVYoAlzIAJgJCurjqdhSo_VQJwoMio",
    authDomain: "elitmus-daf04.firebaseapp.com",
    databaseURL: "https://elitmus-daf04.firebaseio.com",
    projectId: "elitmus-daf04",
    storageBucket: "elitmus-daf04.appspot.com",
    messagingSenderId: "922830836172",
    appId: "1:922830836172:web:099417176296e1c1ac4d69"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;