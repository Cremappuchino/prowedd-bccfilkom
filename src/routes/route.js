import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { StackNavigator,TabNavigator, SwitchNavigator } from 'react-navigation'
import LoginForm from '../screen/LoginForm'
import Home from '../screen/Home'


const appNavigator = StackNavigator(
  {
    Login: { screen: LoginForm} 
  },{
    headerMode: 'none'
  }
)

const mainNavigator = TabNavigator(
  {
    Home: {screen: Home}
  }
)

const rootNavigator = ()=>{
  return SwitchNavigator({
    Login: { screen: appNavigator },
    Main : { screen: mainNavigator }
  },
  )
}

class CreateRootNavigator extends Component{
  render(){
    const Layout = rootNavigator()
    return(
      <Layout />
    )
  }
}

export default CreateRootNavigator