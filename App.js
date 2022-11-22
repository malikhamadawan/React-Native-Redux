import React from 'react';
import {Provider} from 'react-redux';
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
