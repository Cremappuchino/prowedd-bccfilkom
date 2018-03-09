import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyC7idw4DNAsdprLdNOe4xYAC1F3oTbn82s",
  authDomain: "prowedd-bc909.firebaseapp.com",
  databaseURL: "https://prowedd-bc909.firebaseio.com",
  projectId: "prowedd-bc909",
  storageBucket: "prowedd-bc909.appspot.com",
  messagingSenderId: "292777150645"
};


export default ()=>{
  if (!firebase.apps.length)
    firebase.initializeApp(config);
}