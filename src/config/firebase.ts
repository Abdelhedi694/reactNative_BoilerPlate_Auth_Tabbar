import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAxyad8L7mOtSZPj-CsRA0hhtCCHLxG8Lo",
  authDomain: "fir-auth-app-4f4d6.firebaseapp.com",
  projectId: "fir-auth-app-4f4d6",
  storageBucket: "fir-auth-app-4f4d6.appspot.com",
  messagingSenderId: "473113461167",
  appId: "1:473113461167:ios:2c56e14907c3c9d8242f5a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
