import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import creds from "../creds.js"

initializeApp({ credential: cert(creds) });

export default getFirestore();
