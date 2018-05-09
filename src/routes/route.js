import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { 
  StackNavigator,
  TabNavigator,
  SwitchNavigator,
  TabBarBottom 
} from 'react-navigation'
import LoginForm from '../screen/LoginForm'
import Home from '../screen/Home'
import Profil from '../screen/Profile'
import Splash from '../screen/Splash'
import Favorite from '../screen/Favorite'
import Calculator from '../screen/Calculate'
import EditProfile from '../screen/EditProfile'
import Setting from '../screen/Setting'
import ListVendor from '../screen/ListVendor'
import Vendor from '../screen/Vendor'
import Transaction from '../screen/Transaction'
import Search from '../screen/SearchBar'
import firebase from 'firebase'
import Ionicons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'



const mainNavigator = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) =>
         <Ionicons name= "home" size={25} color={tintColor} />
      }
    },
    Calculator : {
      screen : Calculator,
      navigationOptions: {
        tabBarLabel: "Calculator",
        tabBarIcon: ({ tintColor }) =>
         <FontAwesome name= "calculator" size={25} color={tintColor} />
      }
    },
    Favorite : {
      screen : Favorite,
      navigationOptions: {
        tabBarLabel: "Favorite",
        tabBarIcon: ({ tintColor }) =>
         <Ionicons name= "favorite" size={25} color={tintColor} />
      }
    },
    Profil: {
      screen: Profil,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) =>
         <Ionicons name= "account-circle" size={25} color={tintColor} />
      }
    }
  },{
    tabBarPosition: 'bottom',
    tabBarOptions:{
      showIcon: true,
      labelStyle:{
        fontFamily: 'Roboto-Light',
        fontSize: 8
      },
      style: {
        backgroundColor: 'white'
      },
      tabStyle: {
        height: 60
      },
      swipedEnabled : false,
      activeTintColor: 'black',
      animationEnabled: false,
    },
    tabBarComponent: TabBarBottom
  }
)

const rootNavigator = ()=>{
  return StackNavigator({
    Splash: { screen: Splash },
    Login: { screen: LoginForm },
    Main : { screen: mainNavigator },
    Setting : { screen : Setting },
    EditProfile: { screen: EditProfile },
    ListVendor : { screen : ListVendor },
    Vendor : { screen: Vendor },
    Transaction: { screen: Transaction},
    Search : { screen: Search }
  },{
    headerMode: 'none'
  }
)}

class CreateRootNavigator extends Component{
  render(){
    const Layout = rootNavigator()
    return(
      <Layout />
    )
  }
}

export default CreateRootNavigator