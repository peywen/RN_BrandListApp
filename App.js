import React from 'react';
import { Provider } from 'react-redux';
import MainView from './MainView';
import store from './src/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainView />
      </Provider>
    );
  }
}

export default App;
