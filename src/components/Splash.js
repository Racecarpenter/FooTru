import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Splash extends Component<{}> {
  render() {
    return (
      <View style={styles.splashContain}>
        <Image style={styles.spinner} source={require('../../public/foodtruck.gif')} />
        <Image style={styles.icon} source={require('../../public/Logomakr_068LjO.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  splashContain: {
    marginTop: 200
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  icon: {
    alignSelf: 'center',
    maxWidth: '100%',
    opacity: 0.8
  },
  spinner: {
    alignSelf: 'center',
    maxHeight: '40%',
    maxWidth: '100%',
    marginBottom: 30
  }
});
