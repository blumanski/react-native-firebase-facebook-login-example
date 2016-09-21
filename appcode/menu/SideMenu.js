import React, {Component} from 'react'

import {
    ScrollView,
    View,
    Text,
    StyleSheet
} from 'react-native'

import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome';

class SideMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>

        <View>
          <Text
            onPress={() => this.props.onItemSelected('Home')}
            style={styles.item}>
             <Icon name="home" style={{fontSize: 20}} /> Home
          </Text>
        </View>

        <View>
          <Text
            onPress={() => this.props.onItemSelected('Chat')}
            style={styles.item}>
            <Icon name="weixin" style={{fontSize: 20}} /> Chat
          </Text>
        </View>

        <View>
          <Text
            onPress={() => this.props.handleLogout()}
            style={styles.item}>
               <Icon name="power-off" style={{fontSize: 20}} /> Logout
          </Text>
        </View>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#555',
    paddingTop: 30
  },
  item: {
    fontSize: 14,
    fontWeight: 'normal',
    paddingTop: 10,
    paddingLeft: 20,
    paddingBottom: 10,
    color: '#fff',
    height: 40,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth
  }
})

module.exports = SideMenu
