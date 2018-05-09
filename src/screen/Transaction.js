import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Button } from 'react-native-elements'
import Home from './Home'
import ListVendor from './ListVendor'
import { NavigationActions } from 'react-navigation'

class Transaction extends Component {
  render() {
    const resetAction = NavigationActions.reset({
      index :0,
      actions : [NavigationActions.navigate({routeName :'Main'})]
    })
    return (
      <View style={styles.container}>
        <Image source={require('../assets/wedding.png')} style={styles.image} />
        <Button 
          title='Selamat Anda Telah Menikah' 
          onPress={() => this.props.navigation.dispatch(resetAction)} 
          buttonStyle = {{
            borderRadius: 10,
          }}
        />
      </View>
    )
  }
}

const styles = {
  image: {
    resizeMode: Image.resizeMode.contain,
    width: 250,
    height: 200,
    marginRight: 35,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export default Transaction
