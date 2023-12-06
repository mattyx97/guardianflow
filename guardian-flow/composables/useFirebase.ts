import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { getAuth, type Auth } from "firebase/auth";
import { getStorage, type FirebaseStorage } from "firebase/storage";

let firestore: Firestore | null = null;
let auth: Auth | null = null;
let storage: FirebaseStorage | null = null;

export default function useFirebase() {
  if (firestore && auth && storage) return { firestore, auth, storage };

  const config = useRuntimeConfig();
  const firebaseConfig = {
    apiKey: config.public.APIKEY,
    authDomain: config.public.AUTHDOMAIN,
    projectId: config.public.PROJECTID,
    storageBucket: config.public.STORAGEBUCKET,
    messagingSenderId: config.public.MESSAGINGSENDERID,
    appId: config.public.APPID,
  };
  const app = initializeApp(firebaseConfig);

  firestore = getFirestore(app);
  auth = getAuth(app);
  storage = getStorage(app);

  return { firestore, auth, storage };
}
