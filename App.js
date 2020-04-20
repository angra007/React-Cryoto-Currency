import React, { Component } from 'react';
import {  Text, View } from 'react-native';
import {Header, CryptoContainer} from './src/components';
import {Provider} from 'react-redux';

import Store from './src/Store';
import { render } from 'react-dom';

export default class App extends Component {
  render () {
    return (
      <Provider store={Store}>
          <View>
              <Header/>
              <CryptoContainer/> 
          </View>
      </Provider>
    );
  }
}


