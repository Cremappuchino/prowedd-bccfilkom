import React, { Component } from 'react'
import { ScrollView, Text, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import {
  Card,
  Button,
  Header,
  Avatar,
} from 'react-native-elements'
import firebase from 'firebase'
import initFirebase from '../../firebase'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'

class Profile extends Component {
  
  
  createRightComponent() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting')}>
        <Icon
          name='exit-to-app'
          size={30}
          color='black'
        />
      </TouchableOpacity>
    )
  }

  createCenterComponent() {
    return (
      <View>
        <Text style={{ fontFamily: 'Roboto-Medium', color: 'black', fontSize: 20 }}> My Profile </Text>
      </View>
    )
  }


  render() {
    const { nama, emailUser, alamat, nomor, tanggal, deskripsi, foto } = this.props
    const {
      CardStyle,
      avatarContainer,
      headerText,
      text,
      dataContainer,
      fieldStyle,
      avatarStyle
    } = styles

    return (
      <ScrollView>
        <Header
          backgroundColor='white'
          centerComponent={this.createCenterComponent()}
          rightComponent={this.createRightComponent()}
        />
        <Card containerStyle={CardStyle}>
          <View style={avatarStyle}>
            <View style={avatarContainer}>
              <Avatar
                xlarge
                rounded
                source={{ uri: foto }}
                activeOpacity={0.7}
              />
              <Text style={headerText}>{nama}</Text>
            </View>
            <TouchableOpacity onPress = {()=>this.props.navigation.navigate('EditProfile')}>
              <Icon name='mode-edit' size={25} color='grey' />
            </TouchableOpacity>
          </View>
        </Card>
        <Card containerStyle={CardStyle}>
          <View style={fieldStyle}>
            <View style={dataContainer}>
              <Text style={headerText}>Tentang Saya</Text>
              <Text style={text}>{deskripsi}</Text>
            </View>
          </View>
        </Card>
        <Card containerStyle={CardStyle}>
          <View style={fieldStyle}>
            <View style={dataContainer}>
              <Text style={headerText}>Tanggal Lahir</Text>
              <Text style={text}>{tanggal}</Text>
            </View>
          </View>
        </Card>
        <Card containerStyle={CardStyle}>
          <View style={fieldStyle}>
            <View style={dataContainer}>
              <Text style={headerText}>Alamat</Text>
              <Text style={text}>{alamat}</Text>
            </View>
          </View>
        </Card>
        <Card containerStyle={CardStyle}>
          <View style={fieldStyle}>
            <View style={dataContainer}>
              <Text style={headerText}>Nomor Telepon</Text>
              <Text style={text}>{nomor}</Text>
            </View>
          </View>
        </Card>
        <Card containerStyle={CardStyle}>
          <View style={fieldStyle}>
            <View style={dataContainer}>
              <Text style={headerText}>Email</Text>
              <Text style={text}>{emailUser}</Text>
            </View>
          </View>
        </Card>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  CardStyle: {
    margin: 0,
    backgroundColor: 'white',
    padding: 5
  },
  avatarContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 28,
    marginLeft: 65,
  },
  headerText: {
    marginHorizontal: 5,
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    color: 'black',
    marginTop: 5,
  },
  text: {
    marginHorizontal: 5,
    fontFamily: 'Roboto-Light',
    fontSize: 14,
    color: 'black',
    marginTop: 2,
  },
  dataContainer: {
    paddingBottom: 0
  },
  fieldStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

const mapStateToProps = ({profile}) =>{
  return {
    nama : profile.nama,
    alamat : profile.alamat,
    emailUser : profile.emailUser,
    tanggal : profile.tanggal,
    nomor : profile.nomor,
    deskripsi : profile.deskripsi,
    foto : profile.photoURL
  }
}

export default connect (mapStateToProps) (Profile)