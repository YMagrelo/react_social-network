/* eslint-disable react/jsx-no-bind */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './redux/redux_store';
import { StoreContext } from './store_context';

const renderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App store={store} />
      </StoreContext.Provider>
    </BrowserRouter>,
    document.getElementById('root'),
  );
};

renderEntireTree(store.getState());

store.subscribe(() => {
  const state = store.getState();
  return renderEntireTree(state);
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
