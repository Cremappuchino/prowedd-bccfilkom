import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import firebase from 'firebase'
import initFirebase from '../../firebase'


class Splash extends Component{
  
  state = { user: null }
  

  static navigationOptions = {
    header: null
  }

  async componentDidMount(){
    initFirebase()
    await firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        console.log(user)
        this.props.navigation.navigate('Main')
      }else{
        this.props.navigation.navigate('Login')
      }
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