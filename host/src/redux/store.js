import { createStore } from 'redux'
import rootReducer from './reducer'
import throttle from 'lodash.throttle';
import { loadState, saveState } from './localStorage';

// const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

const persistedState = loadState();
const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// store.subscribe(() => {
//   saveState({
//     posts: store.getState().posts
//   });
// });

store.subscribe(throttle(() => {
    saveState({
      posts: store.getState().posts
    });
  }, 1000));

  export default store;

