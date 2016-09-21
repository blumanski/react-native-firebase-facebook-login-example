import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class TitleBar extends Component {

  constructor(props) {
    super(props);
  }

  handlePress(e) {
    if (this.props.onPress) {
      this.props.onPress(e);
    }
  }

  renderUserPopup() {
    return (
      <View style={styles.popup}>
        <Text>In pop up</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.onButtonToggle(true)}
          style={styles.button}>
          <View>
            <Text>
              <Icon name="bars" style={{fontSize: 20}} />
            </Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.title}>The Title</Text>

        <TouchableOpacity
          onPress={() => this.renderUserPopup()}
          style={styles.button2}>
          <View>
            <Text>
              <Icon name="user" style={{fontSize: 20}} />
            </Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    backgroundColor: '#339966',
    height: 50,
  },
  popup: {
    position: 'absolute',
    top: 80,
    right: 80,
    height: 100,
    width: 150
  },
  title: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    flex: 0,
    paddingTop: 10,
    paddingLeft: 10
  },
  button2: {
    flex: 0,
    width: 30,
    paddingTop: 10,
    paddingRight: 10
  },
});

module.exports = TitleBar;
