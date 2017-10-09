import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import FTList from './src/components/FTList';
import Splash from './src/components/Splash';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Splash />
        <FTList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#587576',
  }
});
