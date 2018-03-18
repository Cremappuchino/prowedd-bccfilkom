import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Favorite extends Component{
  
  static navigationOptions = {
    header: null
  }
  render(){
    return(
      <View>
        <Text>love it</Text>
        <Text>love it</Text>
        <Text>love it</Text>
        <Text>love it</Text>
      </View>
    )
  }
}

export default Favorite