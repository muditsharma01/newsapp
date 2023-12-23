import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Redux/store';
import './index.css';
import App from './App';




// const firebaseConfig = {
//   apiKey: "AIzaSyCuyJr6MQXTwJI9wefHMjFunP2VTrzZCOk",
//   authDomain: "news-app-5b1b3.firebaseapp.com",
//   projectId: "news-app-5b1b3",
//   storageBucket: "news-app-5b1b3.appspot.com",
//   messagingSenderId: "817895979969",
//   appId: "1:817895979969:web:a4ffccc880810ae3c28d40",
//   measurementId: "G-RP4EMS8PDN"
// };

// firebase.initializeApp(firebaseConfig);



const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
      <Provider store={store}>
        <App />
      </Provider>
   
  </React.StrictMode>,
);
