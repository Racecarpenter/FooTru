import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class FTPostLoc extends Component<{}> {
  render() {
    return (
      <View style={styles.splashContain}>
        <Text>Yo PostLoc</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  splashContain: {
    marginTop: 150,
    marginBottom: -50
  }
});
