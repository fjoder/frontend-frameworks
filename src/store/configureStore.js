import { createStore } from 'redux';
import reposReducer from '../reducers/repos';

// Store creation
export default () => {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    reposReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  /* eslint-enable */

  return store;
};
