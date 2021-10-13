import React from 'react';
import ReactDOM from 'react-dom';
// IMPORT TO CREATE STORE
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// IMPORT REDUCER
import bankAccountReducer from './reducers';

// IMPORT APP COMPONENT
import App from './App';

const store = createStore(bankAccountReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

