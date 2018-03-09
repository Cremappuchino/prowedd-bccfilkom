import React, { Component } from 'react'
import { 
  View, 
  Text, 
  Image, 
  StyleSheet,
  TextInput
} from 'react-native'
import {
  onEmailChanged,
  onPasswordChanged,
  tryLogin
} from '../action/authAction'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import firebase from 'firebase'


class LoginForm extends Component{
  emailChanged(email){
    this.props.onEmailChanged(email)
  }
  passwordChanged(password){
    this.props.onPasswordChanged(password)
  }
  onTryLogin(){
    const { email, password, tryLogin, isSignedIn } = this.props
    tryLogin(email,password)

    firebase.auth().onAuthStateChanged((user)=>{
      console.log(user)
      if(user){
        this.props.navigation.navigate('Main')
      }
    })
  }

  isLoading(){
    return (this.props.isLoading)? true:false
  }
  isLoginFailed(){
    if(this.props.failed){
      return <Text style = {{fontSize: 20,alignSelf: 'center', color: 'red'}}> Authentication is failed </Text>
    }
  }

  render(){
    const { 
      container, 
      image,
      headerImage,
      placeholder,
      form,
      list,
      button,
      footer,
      textStyle
    } = styles
    const { navigate } = this.props.navigation
    return(
      <View style = {container}>
        <View style = {form}>
          <Image source = {require('../assets/logo.png')} style = {image} />
            <TextInput 
              placeholder = 'user@gmail.com' 
              style = {placeholder} 
              underlineColorAndroid = 'transparent'
              onChangeText = {(email)=>this.emailChanged(email)}
              value = {this.props.email}
            />
            <TextInput 
              placeholderTextColor = 'red'
              placeholder = 'password' 
              style = {placeholder} 
              underlineColorAndroid = 'transparent'
              secureTextEntry
              autoCorrect = {false}
              onChangeText = {(password)=>this.passwordChanged(password)}
              value = {this.props.password}
            />

            <Button 
              large 
              onPress = {this.onTryLogin.bind(this)} 
              title = 'LOGIN' 
              buttonStyle = {button} 
              loading = {this.isLoading()}
            />
            {this.isLoginFailed()}
        </View>
        <Text style = {footer}>Powered by BCC FILKOM</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#262533',
    justifyContent: 'space-around',
  },
  image: {
    resizeMode: Image.resizeMode.contain,
    height: 115,
    width: 140,
    marginTop: 90,
    marginBottom: 30
  },
  placeholder:{
    height: 60,
    width :280,
    margin: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    fontFamily: 'Coffee with Sugar',
    fontSize: 15
  },
  form:{
    alignItems: 'center',
    marginBottom: 20
  },
  button:{
    margin: 12,
    borderRadius: 10,
    padding: 10,
    width: 280,
    backgroundColor: '#EDEDED'
  },
  footer:{
    alignSelf: 'center',
    fontFamily: 'Coffee with Sugar',
    fontSize: 20,
    color: 'white'
  },
  textStyle:{
    fontSize: 25,
    color: '#262533'
  }
})

const mapStateToProps = state =>{
  return {
    email: state.auth.email,
    password: state.auth.password,
    isLoading : state.auth.isLoading,
    isSignedIn : state.auth.isSignedIn,
    failed : state.auth.failed 
  }
}

export default connect(mapStateToProps, 
  { 
  onEmailChanged, 
  onPasswordChanged,
  tryLogin
})(LoginForm)