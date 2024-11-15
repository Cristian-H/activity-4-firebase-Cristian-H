import firebase from 'firebase/compat/app'; 

import 'firebase/compat/auth'; 

import 'firebase/compat/firestore'; 

 

const firebaseConfig = { 

apiKey: "AIzaSyD8Xo-gam_KgsYQPKT9tvtbWwyTzjlAX2k", 

authDomain: "subscriptions-fdb0a.firebaseapp.com", 

projectId: "subscriptions-fdb0a", 

storageBucket: "subscriptions-fdb0a.firebasestorage.app", 

messagingSenderId: "377374030409", 

appId: "1:377374030409:web:5984b1731780678f029d98" 

}; 

 

const db = firebase.initializeApp(firebaseConfig); 

export default db.firestore(); 