import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import App from './containers/app'


const createStroeWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  <Provider store={createStroeWithMiddleware(reducers)}>
    <App/>
  </Provider>,
  document.getElementById('root')
);


