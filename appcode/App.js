import React, { Component } from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Navigator
} from 'react-native'

// third party
import {FBLogin, FBLoginManager} from 'react-native-facebook-login'
import DrawerLayout from 'react-native-drawer-layout'
// menu
import SideMenu from './menu/SideMenu'
// Components
import StatusBar from './components/StatusBar'
import TitleBar from './components/TitleBar'
// screens
import LoginScreen from './screens/login/LoginScreen'
import HomeScreen from './screens/home/HomeScreen'
import ChatScreen from './screens/chat/ChatScreen'


class kappi extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            drawerOpen: false,
        }
    }

    // toggle the side menu
    onToggle = (state) => {
        if(state === false) {
          this.closeDrawer();
        } else {
          this.openDrawer();
        }
    }

    openDrawer() {
        this.drawer.openDrawer()
        this.state.drawerOpen = true
    }

    closeDrawer() {
        this.drawer.closeDrawer()
        this.state.drawerOpen = false
    }

    // if an item is clicked in the side menu
    // this will close the drawer and go to the link
    // this is called from in the sidemenu drawer
    onMenuItemSelected = (item) => {
        this.drawer.closeDrawer()
        this.navProps.navigator.replace({ id: item });
    }

    // return the state of user
    getUserInfo = () => {
        return this.state.user
    }

    // handle logout, is called from any child
    // where the method was passed as prop
    handleLogout = () => {
        var _this = this;
        FBLoginManager.logout(function(error, data){
          if (!error) {
            _this.setState({ user : {} });
            _this.props.onLogout && _this.props.onLogout();
          } else {
            console.log(error, data);
          }
        });
    }

    // add the navigator as class var
    provideNavigatorProps(navigator) {
        this.navProps = {navigator}
    }

    // set user state from anywhere taht has the
    // method past into the props
    setUserState = (data) =>  {
        this.setState({
            user: data
        })
    }

  // render component
  render() {
      // keep this
      let _this = this;

      // depending on the user state, show login screen or app homepage
      if(this.state.user && this.state.user.uid) {

          const sideMenuConst = <SideMenu getUserInfo={this.getUserInfo} onItemSelected={this.onMenuItemSelected} handleLogout={this.handleLogout} />;

          return (

              <DrawerLayout
                  onDrawerSlide={(e) => this.setState({drawerSlideOutput: JSON.stringify(e.nativeEvent)})}
                  onDrawerStateChanged={(e) => this.setState({drawerStateChangedOutput: JSON.stringify(e)})}
                  drawerBackgroundColor="red"
                  drawerWidth={300}
                  ref={(drawer) => { return this.drawer = drawer  }}
                  keyboardDismissMode="on-drag"
                  statusBarBackgroundColor="blue"
                  renderNavigationView={() => sideMenuConst}>

                  <StatusBar style={{backgroundColor: 'green'}} />
                  <TitleBar onButtonToggle={this.onToggle} />

                  <Navigator
                    initialRoute={{id: 'Home'}}
                    style={styles.container}
                    // this is setting the navigator to the props
                    ref={(navigator) => { this.provideNavigatorProps(navigator)}}
                    renderScene={(route, navigator) => { return this._renderScene(route, navigator)}}
                  />

                </DrawerLayout>
          )

      } else {

          return (
              <LoginScreen setUserState={this.setUserState}  />
          )
      }
    }

    // render a scene
  _renderScene(route, navigator) {
    // pass the navigator and route to the child screens
    let globalNavigatorProps = {
      navigator,
      route
    }

    // switch routes
    switch(route.id) {

        case "Home":
            return (
                <HomeScreen
                    {...globalNavigatorProps}
                />
        )

        case "Chat":
            return (
                <ChatScreen
                    {...globalNavigatorProps}
                />
        )

        case "Login":
            return (
                <LoginScreen
                    {...globalNavigatorProps}
                />
        )

        default:
            return(
                <HomeScreen
                    {...globalNavigatorProps }
                />
        )
    }
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

module.exports = kappi;
