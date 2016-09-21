import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native'

import Firestack from 'react-native-firestack'
import _ from 'lodash'

const FirebaseStack = new Firestack();
const FireDb        = FirebaseStack.database.ref();

import {FBLogin, FBLoginManager} from 'react-native-facebook-login'

import styles from './LoginStyles'

class LoginScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }

    // Sign or Create user in Firebase
    // returns a promise
    signInWithProvider(provider, token) {
        FirebaseStack.signInWithProvider(provider, token)
          // promise resolved
          .then((user) => {
              if(user.uid) {

                  this.props.setUserState(user)
                  // add user to state
                //   this.setState({
                //       user: user,
                //       userid: user.uid,
                //       token: user.refreshToken
                //   })
              }
          })
          .catch((err) => {
              console.log('WTF');
              console.log(err);
          })
    }

    render() {

        let _this = this

        return (
            <FBLogin style={styles.viewContainer}
              ref={(fbLogin) => { this.fbLogin = fbLogin }}
              permissions={["email","user_friends"]}
              loginBehavior={FBLoginManager.LoginBehaviors.Native}

              onLogin={(data) => {
                  _this.signInWithProvider('facebook', data.credentials.token);
                  _this.setState({ user : data.credentials });
              }}

              onLogout={function(){
                console.log("Logged out.");
                _this.setState({ user : null });
              }}

              onLoginFound={function(data){
                console.log("Existing login found.");
                console.log(data.credentials.token);
                _this.signInWithProvider('facebook', data.credentials.token);
                _this.setState({ user : data.credentials });
              }}

              onLoginNotFound={function(){
                console.log("No user logged in.");
                _this.setState({ user : null });
              }}

              onError={function(data){
                console.log("ERROR");
                console.log(data);
              }}

              onCancel={function(){
                console.log("User cancelled.");
              }}

              onPermissionsMissing={function(data){
                console.log("Check permissions!");
                console.log(data);
              }}

            />
        )

    }
}



module.exports = LoginScreen
