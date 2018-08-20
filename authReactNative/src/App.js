import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp(
            {
                apiKey: 'AIzaSyBnF-w0IReXpyBgSMQAdV8HsDFZa_mK6MU',
                authDomain: 'auth-8ec27.firebaseapp.com',
                databaseURL: 'https://auth-8ec27.firebaseio.com',
                projectId: 'auth-8ec27',
                storageBucket: 'auth-8ec27.appspot.com',
                messagingSenderId: '234335992182'
              }
        )
    
    }
    render() {
        return (
            <View>
                <Header headerText="Authontication" />
                <LoginForm />
            </View>
        )
    }

}

export default App;