import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native'

import styles from './ChatStyles'

class ChatScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }

    render() {

        return (
            <View style={styles.mainPadding}>
                <Text>ChatScreen</Text>
            </View>

        )
    }

}

module.exports = ChatScreen
