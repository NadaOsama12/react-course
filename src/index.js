import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import { legacy_createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'
import promiseMiddleware from "redux-promise"

const theStore = applyMiddleware(promiseMiddleware)(legacy_createStore)(rootReducer)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={theStore}>
    <App />
 </Provider>
);


