import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'
import { connect } from 'react-redux'
import { signOut } from '../action/authAction'
import Spinner from '../components/Spinner'
import firebase from 'firebase'
import { NavigationActions } from 'react-navigation'

class Setting extends Component {
  
  trySignOut(){
    this.props.signOut()

    firebase.auth().onAuthStateChanged((user)=>{
      if(!user){
        const resetAction = NavigationActions.reset({
          index :0,
          actions : [NavigationActions.navigate({routeName : 'Login' })]
        })

        this.props.navigation.dispatch(resetAction)
      }
    })
  }

  loadingSignOut(){
    if(this.props.isLoading){
      return <Spinner size = 'large'/>
    }
  }

  errorSignOut(){
    if(this.props.failed){
      return <Text>Sign Out gagal </Text>
    }
  }

  render() {
    const { CardStyle } = styles
    return (
      <View>
        <Card containerStyle={CardStyle}>
          <TouchableOpacity onPress = {()=>this.trySignOut()}>
            <Text>Keluar</Text>
          </TouchableOpacity>
        </Card>
        {this.loadingSignOut()}
        {this.errorSignOut()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  CardStyle: {
    margin: 0
  }
})

const mapStateToProps = state =>{
  return {
    isLoading :state.auth.isLoading,
    failed : state.auth.failed
  }
}

export default connect(null, { signOut })(Setting)