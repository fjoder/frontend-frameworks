import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { connect } from "react-redux";
import { Provider } from "react-redux";

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.amount };
    case 'DECREMENT':
      return { ...state, count: state.count - action.amount };
    case 'RESET':
      return { ...state, count: state.count = 0 };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Counter = ({ count, onIncrement, onDecrement, onReset }) => (
  <div>
    <h1>{ count }</h1>
    <button onClick={() => onIncrement(1)}>+</button>
    <button onClick={() => onIncrement(5)}>+5</button>
    <button onClick={() => onIncrement(10)}>+10</button>
    <button onClick={onReset}>Reset</button>
    <button onClick={() => onDecrement(1)}>-</button>
    <button onClick={() => onDecrement(5)}>-5</button>
    <button onClick={() => onDecrement(10)}>-10</button>
  </div>
);

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
};

const onIncrement = (amount) => {
  return { type: 'INCREMENT', amount }
}

const onDecrement = (amount) => {
  return { type: 'DECREMENT', amount }
}

const onReset = () => {
  return { type: 'RESET' }
}

const ConnectedCounter = connect(mapStateToProps, { onIncrement, onDecrement, onReset })(Counter);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>,
  document.getElementById('root')
);
