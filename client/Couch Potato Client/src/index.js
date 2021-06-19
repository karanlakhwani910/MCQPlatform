import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store,persistor} from './redux/store';


import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';



ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App/>
        </PersistGate>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
  
  ,document.getElementById('root')
);//used for placing the app super-element in the div with id root.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
