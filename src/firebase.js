// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDTdC1qCTen2nz4P_2ORut_zF7ggPbb0R0",
    authDomain: "netflix-clone-934b7.firebaseapp.com",
    projectId: "netflix-clone-934b7",
    storageBucket: "netflix-clone-934b7.appspot.com",
    messagingSenderId: "44096272599",
    appId: "1:44096272599:web:5cc8c5d144f8e57dbc1892",
    measurementId: "G-PMZVBPMCRT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth();

export { auth }
export default db;