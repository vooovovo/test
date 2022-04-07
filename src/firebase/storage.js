import { firebase } from '@firebase/app';
import 'firebase/storage';

class Storage {
    constructor() {
        if (!firebase.apps.length) {
            firebase.initializeApp
                (
                    {
                        apiKey: "AIzaSyBDjVxkn2NT0SlYo3wXrl54hYXIfl69G4w",
                        authDomain: "promshop-af647.firebaseapp.com",
                        projectId: "promshop-af647",
                        storageBucket: "promshop-af647.appspot.com",
                        messagingSenderId: "46481153236",
                        appId: "1:46481153236:web:46b10cffdbd8d8c8eeaf41",
                        measurementId: "G-M9ETER1C2Q"
                    }
                );
        }
        else {
            console.log('firebase apps already running....');
        }
        this.db = firebase.firestore();
    }
}

const storage = new Storage();
export default storage;
