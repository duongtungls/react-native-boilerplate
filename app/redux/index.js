import {applyMiddleware, createStore} from 'redux';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import thunk from 'redux-thunk';

import getRootReducer from './reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const middleware = createReactNavigationReduxMiddleware(
  state => state.nav,
  'root',
);

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const persistedReducer = (navReducer) => persistReducer(persistConfig, getRootReducer(navReducer));

export default function getStore(navReducer) {
  const store = createStore(
    persistedReducer(navReducer),
    undefined,
    composeWithDevTools(
      applyMiddleware(middleware, thunk),
    ),
  );
  let persistor = persistStore(store);
  return {store, persistor};
}
