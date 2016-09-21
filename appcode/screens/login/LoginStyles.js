import { StyleSheet, Dimensions } from 'react-native'

var styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    centering: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', padding: 8,
    position: 'absolute',
    top: Dimensions.get('window').height * .45,
    left: Dimensions.get('window').width * .280,
    zIndex: 10
  },

});


export default styles
