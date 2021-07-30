import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDsxx1l6Vj3T5m2ucx4UQ_Cll3fD1Jl0ZY",
  authDomain: "cart-793ff.firebaseapp.com",
  projectId: "cart-793ff",
  storageBucket: "cart-793ff.appspot.com",
  messagingSenderId: "469512410635",
  appId: "1:469512410635:web:48b894a9ee2dcbb279190e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


