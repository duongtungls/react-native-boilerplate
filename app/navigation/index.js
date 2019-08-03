import React from 'react';
import {connect, Provider} from 'react-redux';

import AppNavigator from './router';
import getStore from '../redux/index';
import {PersistGate} from 'redux-persist/integration/react';

import {createNavigationReducer, createReduxContainer} from 'react-navigation-redux-helpers';
import SplashScreen from '../screens/SplashScreen';


const navReducer = createNavigationReducer(AppNavigator);

const AppNavigatorReduxContainer = createReduxContainer(AppNavigator);
const mapStateToProps = (state) => ({
  state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(AppNavigatorReduxContainer);

const {store, persistor} = getStore(navReducer);

export default App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<SplashScreen/>} persistor={persistor}>
        <AppWithNavigationState/>
      </PersistGate>

    </Provider>
  );
};
