import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCHLGjprv9Lq_oJbr3B6riVMBEEhsk206A",
    authDomain: "evaluacion-3-vue.firebaseapp.com",
    projectId: "evaluacion-3-vue",
    storageBucket: "evaluacion-3-vue.appspot.com",
    messagingSenderId: "1059580822472",
    appId: "1:1059580822472:web:1aeb2963a95e7df691f6fd",
    measurementId: "G-W1WGDVST22"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


/* const firebaseApp = initializeApp(config); */
//export default firebaseApp;

/* const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore(); 

const firebaseApp = initializeApp(config); 
export default firebaseApp; */

/* const app = initializeApp(firebaseConfig); */