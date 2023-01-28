
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {LogBox} from 'react-native';
import AppContainer from './navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import { pStore, store } from './redux/store';

export class App extends Component {
  componentDidMount() {
    LogBox.ignoreAllLogs(true);
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={pStore}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}
