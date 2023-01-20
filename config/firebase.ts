// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: AIzaSyD_FFP6MHAoY2etwYZjicIbQcV9kSzIv4U,
	authDomain: 'whatsapp-clone2-b5487.firebaseapp.com',
	projectId: 'whatsapp-clone2-b5487',
	storageBucket: 'whatsapp-clone2-b5487.appspot.com',
	messagingSenderId: '429213941430',
	appId: '1:429213941430:web:8fcc206181f96ca61af017'
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { db, auth, provider }
