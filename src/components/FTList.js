import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Footer
} from 'react-native';

export default class FTList extends Component<{}> {
  render(){
    return (
      <View style={styles.container}>
        <Text>List</Text>
        <Text style={styles.footer}>Race Carpenter 2017</Text>
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
  },
  footer: {
   bottom: 0
  }
});
