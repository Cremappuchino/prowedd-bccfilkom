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
import initFirebase from '../../firebase'
import { NavigationActions } from 'react-navigation'



class LoginForm extends Component{
  
  static navigationOptions = {
    header: null
  }
  componentDidMount(){
    initFirebase()
  }
  
  emailChanged(email){
    this.props.onEmailChanged(email)
  }
  passwordChanged(password){
    this.props.onPasswordChanged(password)
  }
  
  onTryLogin(){
    const { email, user , password, tryLogin } = this.props
    tryLogin(email,password)

    if(user){
      this.props.navigation.navigate('Main')
    }
  }

  isLoading(){
    return (this.props.isLoading)? true:false
  }

  isLoginFailed(){
    if(this.props.failed){
      return <Text style = {{fontSize: 20,alignSelf: 'center', color: 'red'}}> 
        Authentication is failed 
      </Text>
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
          <Image source = {require('../assets/LOGO-ap.png')} style = {image} />
            <TextInput 
              placeholder = 'username or email' 
              style = {placeholder} 
              underlineColorAndroid = 'transparent'
              onChangeText = {(email)=>this.emailChanged(email)}
              value = {this.props.email}
              placeholderTextColor = 'white'
            />
            <TextInput 
              placeholder = 'password' 
              style = {placeholder} 
              underlineColorAndroid = 'transparent'
              secureTextEntry
              autoCorrect = {false}
              onChangeText = {(password)=>this.passwordChanged(password)}
              value = {this.props.password}
              placeholderTextColor = 'white'
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },
  image: {
    resizeMode: Image.resizeMode.contain,
    height: 200,
    width: 230,
    marginTop: 10,
    marginBottom: 40
  },
  placeholder:{
    height: 60,
    width :280,
    margin: 10,
    backgroundColor: '#C9CACA',
    padding: 20,
    borderRadius: 30,
    fontFamily: 'Roboto-Light',
    fontSize: 15,
    color: 'white'
  },
  form:{
    alignItems: 'center',
    marginBottom: 20
  },
  button:{
    marginTop: 40,
    margin: 12,
    borderRadius: 30,
    padding: 10,
    width: 280,
    backgroundColor: '#757475',
    alignSelf: 'center',
  },
  footer:{
    alignSelf: 'center',
    fontFamily: 'Roboto-Medium',
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
    failed : state.auth.failed,
    user : state.auth.user 
  }
}

export default connect(mapStateToProps, 
  { 
  onEmailChanged, 
  onPasswordChanged,
  tryLogin
})(LoginForm)