import * as admin from 'firebase-admin';
import {serviceAccount} from './key'
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

const db = admin.firestore()
export { admin, db }