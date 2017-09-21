/* @flow */
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {

  state = { email: '', password: '', error: '', isLoading: false };

  constructor(props) {
    super(props);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFail = this.onLoginFail.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({error: '', isLoading: true});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch ( () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch (exception => this.onLoginFail(exception));
      })
  }

  onLoginFail({ message }: string) {
    this.setState({error: message, isLoading: false});
  }

  onLoginSuccess() {

    this.setState({
      error: '',
      isLoading: false,
      email: '',
      password: ''
    });

  }

  renderButton() {
    if (this.state.isLoading) {
      return (<Spinner size='small' />);
    }

    return (
      <Button onPress={this.onButtonPress}>
        Log In
      </Button>
    );
  }

  render() {
    return (
      <Card>

        <CardSection>
          <Input
            value={this.state.email}
            onChangeText={ email => this.setState({email})}
            label='Email'
            placeholder='user@gmail.com'
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            value={this.state.password}
            onChangeText={ password => this.setState({password})}
            label='Password'
            placeholder='password'
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
            {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;
