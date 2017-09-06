import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import createHistory from 'history/createBrowserHistory';

import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import  logger  from 'redux-logger';

import rootReducer from './reducers';

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      logger,
      middleware,
      thunk,
      promiseMiddleware()
    )
  )
);

ReactDOM.render(
<Provider store={store}>
  <ConnectedRouter history={history} >
    <App />
  </ConnectedRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
