import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native'

import styles from './HomeStyles'

class HomeScreen extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        console.log('IN HOME SCREEN');
        return (
            <View style={styles.mainPadding}>
                <Text>HomeScreen</Text>
            </View>

        )
    }
}

module.exports = HomeScreen
