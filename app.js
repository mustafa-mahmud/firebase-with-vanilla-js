import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCgfH758poSF1GheZOYgU4kPF2lVTHGfig',
  authDomain: 'my-first-firebase-projec-8d1dc.firebaseapp.com',
  projectId: 'my-first-firebase-projec-8d1dc',
  storageBucket: 'my-first-firebase-projec-8d1dc.appspot.com',
  messagingSenderId: '362116006707',
  appId: '1:362116006707:web:d33c6071eb0b18c34b3446',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log(app);
console.log(auth);
