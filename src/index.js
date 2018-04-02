import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from "react-redux";
import { Home, Search, Mine } from "./screens";

const initialState = {
  repos: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_REPOS':
      return { ...state, repos: action.repos };
    default:
      return { ...state };
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Index = (store) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/mine" component={Mine} />
      </div>
    </Router>
  </Provider>
);

render(<Index />, document.getElementById('root'));
