import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCM3M3HD-Iu5ojadUnTGrG5e5ixSWssGoA',
  authDomain: 'shreya-birthday-card.firebaseapp.com',
  projectId: 'shreya-birthday-card',
  storageBucket: 'shreya-birthday-card.firebasestorage.app',
  messagingSenderId: '806332668483',
  appId: '1:806332668483:web:053f734a667daa7b7fd2f6',
  measurementId: 'G-KY2PZTZWFQ',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);
