import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import allReducer from './reducers'; // /index is not neccessary. Webpack ia already gonna read the index
import { Provider } from 'react-redux';

const store = createStore(allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

reportWebVitals();
/* //Store Globalized State

//Action Increment
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}
const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}
//Reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
};
let store = createStore(counter);
// Display it in the console
store.subscribe(() => console.log(store.getState()));
//Dispatch
store.dispatch(increment())
ReactDOM.render(
  <App />, document.getElementById('root')
);
 */


