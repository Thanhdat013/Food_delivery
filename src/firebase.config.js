import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAbC5hCgoLXQf1v5k02TAxOBBdkl8s5cIs',
  authDomain: 'food-app-940ed.firebaseapp.com',
  databaseURL:
    'https://food-app-940ed-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'food-app-940ed',
  storageBucket: 'food-app-940ed.appspot.com',
  messagingSenderId: '984588752704',
  appId: '1:984588752704:web:8e11d5540a38ba9f808ca5',
}

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage }
