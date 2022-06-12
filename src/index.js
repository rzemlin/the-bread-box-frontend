import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { configureStore, applyMiddleware } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk'
import '/.index.css';
import App from './App';


const store = configureStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);