/* @flow */
import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: null, username: '' };

  componentWillMount() {
   firebase.initializeApp ({
      apiKey: "AIzaSyDYgquOXkJHAT991osq-KwcFzs92d_igaU",
      authDomain: "auth-c45e7.firebaseapp.com",
      databaseURL: "https://auth-c45e7.firebaseio.com",
      projectId: "auth-c45e7",
      storageBucket: "auth-c45e7.appspot.com",
      messagingSenderId: "207033380444"
   });

   firebase.auth().onAuthStateChanged((user: Object) => {
      if (user) {
        this.setState({loggedIn: true, username: user.email });
      } else {
        this.setState({loggedIn: false, username: ''});
      }
   });

  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View>
            <Text>Hi, {this.state.username}!</Text>
            <Button onPress={() => firebase.auth().signOut()}>
              Log out
            </Button>
          </View>
          );
      case false:
        return <LoginForm />;
      default:
        return <Spinner /> ;
    }

  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
