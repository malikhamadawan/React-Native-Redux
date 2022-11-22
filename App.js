import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import Home from './src/screen/Home';
import store from './src/redux/store/store';
import StackNavigation from './src/navigation/StackNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
};

export default App;
