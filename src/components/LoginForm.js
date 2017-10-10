import React, { Component } from 'react';
import { View } from 'react-native';
import Input from './common/Input';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';



class LoginForm extends Component {
  state = { text: ''};


  render() {
    const { containerStyle } = styles;
    return (
    <View style={containerStyle}>
      <Card>
          <CardSection>
            <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            />
          </CardSection>
          <CardSection />

          <CardSection>
            <Button>
            Log-In
            </Button>
          </CardSection>
      </Card>
    </View>
    )
  }
}
const styles = {
  containerStyle: {
    width: 200
  }
}

export default LoginForm;
