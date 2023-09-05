import { app } from 'core/services/firebase';
import { collection, getFirestore } from 'firebase/firestore'

export const firestore = getFirestore(app);

// category
export const categoryCollection = collection(firestore, 'category')
