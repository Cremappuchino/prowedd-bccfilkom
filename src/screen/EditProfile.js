import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { Card, Button, Avatar, Header } from 'react-native-elements'
import firebase from 'firebase'
import initFirebase from '../../firebase'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'
import { updateProfile } from '../action/updateProfile'



class EditProfile extends Component {

  state = {
    name: '',
    email: '',
    photoURL: null,
    address: '',
    phoneNumber: '',
    ageBirthday: '',
    description: '',
    gName : false,
    gEmail : false,
    gPhotoURL : false,
    gAddress: false,
    gPhoneNumber: false,
    gAgeBirthday: false,
    gDescription : false
  }

  createCenterComponent() {
    return (
      <View>
        <Text style={{ fontFamily: 'Roboto-Medium', color: 'black', fontSize: 20 }}> Edit Profile </Text>
      </View>
    )
  }

  createLeftComponent() {
    return (
      <View>
        <TouchableOpacity onPress = {()=>this.props.navigation.navigate('Profile')}>
          <Icon name='keyboard-backspace' size={25} color='black' />
        </TouchableOpacity>
      </View>
    )
  }

  createRightComponent() {
    return (
      <View>
        <TouchableOpacity onPress = {()=>this.editProfile()}>
          <Icon name='mode-edit' size={25} color='black' />
        </TouchableOpacity>
      </View>
    )
  }

  editProfile() {
    let {
      name,
      email,
      photoURL,
      phoneNumber,
      address,
      ageBirthday,
      description,
      gName,
      gEmail,
      gPhotoURL,
      gPhoneNumber,
      gAddress,
      gAgeBirthday,
      gDescription
    } = this.state

    if(gName){
      this.props.updateProfile('nama',name)
      this.setState({gName: false})
    }
    if(gAddress){
      this.props.updateProfile('alamat',address)
      this.setState({gAddress: false})
    }
    if(gDescription){
      this.props.updateProfile('description',description)
      this.setState({gDescription: false})
    }
    if(gEmail){
      this.props.updateProfile('email',email)
      this.setState({gEmail: false})
    }
    if(gAgeBirthday){
      this.props.updateProfile('tanggal',ageBirthday)
      this.setState({gAgeBirthday: false})
    }
    if(gPhoneNumber){
      this.props.updateProfile('nomor',phoneNumber)
      this.setState({gPhoneNumber: false})
    }

    this.props.navigation.goBack()
  }

  render() {
    const {
      CardStyle,
      avatarContainer,
      headerText,
      text,
      dataContainer,
      fieldStyle,
      avatarStyle
    } = styles

    let {
      name,
      email,
      photoURL,
      phoneNumber,
      address,
      ageBirthday,
      description,
      gName,
      gEmail,
      gPhotoURL,
      gPhoneNumber,
      gAddress,
      gAgeBirthday,
      gDescription
    } = this.state

    const { nama, emailUser, alamat, nomor, tanggal, deskripsi, foto } = this.props

    return (
      <ScrollView>
        <Header
          backgroundColor='white'
          leftComponent={this.createLeftComponent()}
          centerComponent = {this.createCenterComponent()}
          rightComponent = {this.createRightComponent()}
        />
        <Card containerStyle={CardStyle}>
          <View style={avatarContainer}>
            <Avatar
              xlarge
              rounded
              source={{ uri: foto }}
              activeOpacity={0.7}
            />
            <TouchableOpacity>
              <Text style={headerText}>Ganti Foto </Text>
            </TouchableOpacity>
          </View>
        </Card>
        <Card containerStyle={CardStyle}>
          <View style={dataContainer}>
            <Text style={headerText}>Nama Pengguna</Text>
            <TextInput
              onChangeText={(nama) => this.setState({name: nama, gName : true})}
              placeholder = 'Nama Anda'
            />
          </View>
        </Card>
        <Card containerStyle={CardStyle}>
          <View style={dataContainer}>
            <Text style={headerText}>Deskripsi Pengguna</Text>
            <TextInput
              onChangeText={(deskripsi) => this.setState({ description: deskripsi, gDescription: true })}
              placeholder = 'Deskripsi'
            />
          </View>
        </Card>
        <Card containerStyle={CardStyle}>
          <View style={dataContainer}>
            <Text style={headerText}>Alamat</Text>
            <TextInput
              onChangeText={(alamat) => this.setState({ address: alamat, gAddress : true })}
              placeholder = 'Alamat Anda'
            />
          </View>
        </Card>
        <Card containerStyle={CardStyle}>
          <View style={dataContainer}>
            <Text style={headerText}>Tanggal Lahir</Text>
            <TextInput
              onChangeText={(tanggal) => this.setState({ ageBirthday: tanggal, gAgeBirthday : true })}
              placeholder = 'Tanggal lahir anda'
            />
          </View>
        </Card>
        <Card containerStyle={CardStyle}>
          <View style={dataContainer}>
            <Text style={headerText}>Nomor Telepon</Text>
            <TextInput
              onChangeText={(nomor) => this.setState({ phoneNumber: nomor, gPhoneNumber: true })}
              placeholder = 'nomor telepon'
            />
          </View>
        </Card>
        <Card containerStyle={CardStyle}>
          <View style={dataContainer}>
            <Text style={headerText}>Email</Text>
            <TextInput
              onChangeText={(email) => this.setState({ email: email, gEmail: true })}
              placeholder = 'email'
            />
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
    padding: 28
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

const mapStateToProps = (state) =>{
  return {
    nama : state.profile.nama,
    alamat : state.profile.alamat,
    emailUser : state.profile.email,
    tanggal : state.profile.tanggal,
    nomor : state.profile.nomor,
    deskripsi : state.profile.deskripsi,
    foto: state.profile.photoURL
  }
}

export default connect(mapStateToProps,{updateProfile})(EditProfile)
