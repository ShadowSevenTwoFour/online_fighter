import { getDatabase, ref, onValue } from 'firebase/database';
import firebaseApp from '../firebaseConfig';

const database = getDatabase(firebaseApp);

export { database, ref, onValue };
