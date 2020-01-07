import React from 'react';
import { render } from 'react-dom';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './assets/stylesheet/style.scss';

function reducer(state = 0, action) {
  switch (action.type) {
    case 'inc':
      if (state > 99) {
        alert("you can't exceed more than 100");
        return state;
      } else {
        return state + action.payload;
      }
    case 'dec':
      if (state < 1) {
        alert("you can't go below 0");
        return state;
      } else {
        return state - action.payload;
      }
    case 'reset':
      return (state = 0);

    default:
      return state;
  }
}
const store = createStore(reducer);

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);
