import firebase from 'firebase/app';
import 'firebase/firestore';

class Firestore {
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
    getUser = (email, success, reject) => {
        firebase
            .firestore()
            .collection('User')
            .where('email', '==', email)
            .get()
            .then(function (querySnapshot) {
                success(querySnapshot);
            })
            .catch(function (err) {
                reject(err);
            });
    }
    addUser = (user, success, reject) => {
        firebase
            .firestore()
            .collection('User')
            .add(user)
            .then(function (docRef) {
                success(docRef);
            })
            .catch(function (error) {
                reject(error);
            });
    };
    updateUser = (user, success, reject) => {
        firebase
            .firestore()
            .collection('User')
            .doc(user.id)
            .update({
                passwd: user.passwd,
                todayS: user.todayS,
            })
            .then(function () {
                success(null);
            })
            .catch(function (error) {
                reject(error);
            });
    };

    getAllProduct(success, reject) {
        firebase
            .firestore()
            .collection('Products')
            .orderBy('productID')
            .get()
            .then(function (querySnapshot) {
                success(querySnapshot);
            })
            .catch(function (error) {
                reject(error);
            });
    }
    deleteProduct = (id, success, reject) => {
        firebase
            .firestore()
            .collection('Products')
            .doc(id)
            .delete()
            .then(function () {
                success(null);
            })
            .catch(function (error) {
                reject(error);
            });
    };
    
}
const firestore = new Firestore();
export default firestore;