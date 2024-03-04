import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeFirestore } from 'firebase/firestore';
import functions from '@react-native-firebase/functions';
import {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_MEASUREMENT_ID,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
} from '@env';

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
};

console.log('firebaseConfig');
console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Este es el que funcionaba antes en la app de Notas pero ahorita no sé que esta pasando asi que usaré el que esta
// abajo, es decir, el de getFireStore
// const db = initializeFirestore(app, {
//   experimentalForceLongPolling: true,
// });

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { analytics, app, db, functions };
