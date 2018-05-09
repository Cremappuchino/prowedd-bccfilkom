import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import firebase from 'firebase'
import initFirebase from '../../firebase'
import { NavigationActions } from 'react-navigation'


class Splash extends Component{

  static navigationOptions = {
    header: null
  }

  componentDidMount(){
    initFirebase()
    firebase.auth().onAuthStateChanged((user)=>{
      const resetAction = NavigationActions.reset({
        index :0,
        actions : [NavigationActions.navigate({routeName : user? 'Main':'Login' })]
      })

      this.props.navigation.dispatch(resetAction)
    })
  }

  

  render(){
    const { container,image, text } = styles
    return(
      <View style = {container}>
        <Image source = {require('../assets/LOGO-ap.png')} style = {image} />
        <Text>Providing Best Stuff for Your Wedding</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image : {
    width : 230,
    height: 70,
    resizeMode: Image.resizeMode.contain,
    margin: 20
  },
  text: {
    fontFamily: 'Roboto-Medium',
    color: 'grey',
    fontSize: 14,
  }
})

export default Splash