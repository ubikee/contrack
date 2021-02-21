import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAeIpLj4L7EFJcW49RczrG3D3NRxa48Jkw",
    authDomain: "contrack-57484.firebaseapp.com",
    projectId: "contrack-57484",
    storageBucket: "contrack-57484.appspot.com",
    messagingSenderId: "716933732632",
    appId: "1:716933732632:web:e6621d6f190d2a7b4e266d",
    measurementId: "G-M4HQYE8C52"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth()
export const db = firebase.firestore();

/**
 * Login
 */
export const login = async (email, password) => {
    try {
        await auth.signInWithEmailAndPassword(email, password)
    } catch (error) {
        console.log("Error login in with password and email", error)
        return false
    }
}

export const contracts = async () => {
    try {
        const querySnapshot = await db.collection('contracts').get()
        const contracts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        return contracts
    } catch (error) {
        console.error("Error getting collection", error)
    }
}

/**
 * Create Contract
 */
export const createContract = async (contract) => {
    try {
        const docRef = await db.collection('contracts').add(contract)
        return docRef
    } catch (error) {
        console.error("Error adding document", error)
    }
}

export async function deleteContract(id) {
    try {
        const docRef = await db.collection('contracts').doc(id)
        docRef.delete()
    } catch (error) {
        console.error("Error deleting document", error)
    }
}

const API = {
    auth,
    login,
    contracts,
    createContract,
    deleteContract,
}

export default API