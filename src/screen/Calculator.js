import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Calculator extends Component{
  
  
  static navigationOptions = {
    header: null
  }
  
  render(){
    return(
      <View>
        <Text>Calculate here </Text>
        <Text>Calculate here </Text>
        <Text>Calculate here </Text>
        <Text>Calculate here </Text>
      </View>
    )
  }
}

export default Calculator