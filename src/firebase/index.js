import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebaseConfig from './config';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)