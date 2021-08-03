import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";
require('firebase/firestore');

firebase.initializeApp({
  apiKey: "AIzaSyBMWCTLdlDcVub85lkeqk1RRM0P55bmiXc",
    authDomain: "evernote-clone-15c59.firebaseapp.com",
    projectId: "evernote-clone-15c59",
    storageBucket: "evernote-clone-15c59.appspot.com",
    messagingSenderId: "243331611896",
    appId: "1:243331611896:web:ccc3def552355cf9480f0d",
    measurementId: "G-CQEM9P4D82"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
