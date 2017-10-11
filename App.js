import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import firebase from 'firebase';

import router from './src/router/router.js';


export default class App extends Component<{}> {
  componentWillMount(){
    firebase.initializeApp({
    apiKey: "AIzaSyCiyABTqdyoLb1wLWp-Jnu8KzJ-k4dmVBs",
    authDomain: "footru-2e6ee.firebaseapp.com",
    databaseURL: "https://footru-2e6ee.firebaseio.com",
    projectId: "footru-2e6ee",
    storageBucket: "",
    messagingSenderId: "225706654505"
  });
  }
  render() {
    return (
      <View style={styles.container}>
        <router />
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
