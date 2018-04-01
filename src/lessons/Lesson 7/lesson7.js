import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Home, AboutUs, ContactUs, Search, Mine } from "./screens";

const reducer = (state, action) => {
  switch (action.type) {
    case 'AN_ACTION':
      return { ...state };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Index = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/search" component={Search} />
        <Route path="/mine" component={Mine} />
      </div>
    </Router>
  </Provider>
);

render(<Index />, document.getElementById('root'));
