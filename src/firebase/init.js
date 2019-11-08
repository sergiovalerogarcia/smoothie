import firebase from 'firebase'
//import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAagWxkDWIqZfhwiXt5E_kCkwCGyE6Kqbk",
    authDomain: "ninja-smoothies-a30fb.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-a30fb.firebaseio.com",
    projectId: "ninja-smoothies-a30fb",
    storageBucket: "ninja-smoothies-a30fb.appspot.com",
    messagingSenderId: "18543448316",
    appId: "1:18543448316:web:cdaccf1bde255d8a390779",
    measurementId: "G-PV0HN6X7LP"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//Console error
//firebaseApp.firestore().settings({timestampsInSnapshots: true})
//firebase.analytics();

export default firebaseApp.firestore();