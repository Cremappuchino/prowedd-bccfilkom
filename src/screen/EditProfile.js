import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { Card, Button, Avatar, Header } from 'react-native-elements'
import firebase from 'firebase'
import initFirebase from '../../firebase'
import Icon from 'react-native-vector-icons/MaterialIcons'



class EditProfile extends Component {


  state = {
    name: '',
    email: '',
    photoURL: null,
    address: '',
    phoneNumber: '',
    ageBirthday: '',
    description: ''
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
  


  async componentDidMount() {
    initFirebase()

    let user = firebase.auth().currentUser
    await user.providerData.forEach((profile) => {
      console.log(profile)
      this.setState({
        name: profile.displayName == null ? 'Nama Anda' : profile.displayName,
        email: profile.email,
        photoURL: profile.photoURL == null ? 'http://www.freeiconspng.com/uploads/profile-icon-9.png' : profile.photoURL,
        address: profile.address == null ? 'Alamat Anda' : profile.address,
        phoneNumber: profile.phoneNumber == null ? 'Nomor handphone anda' : profile.phoneNumber,
        ageBirthday: profile.ageBirthday == null ? 'Tanggal Lahir' : profile.ageBirthday,
        description: profile.description == null ? 'Deskripsi diri anda' : profile.description
      })
    })
  }

  editProfile() {
    let {
      name,
      email,
      address,
      ageBirthday,
      phoneNumber,
      description
    } = this.state

    let user = firebase.auth().currentUser
    console.log(user)
    user.updateProfile({
      displayName: name,
      email: email,
      address: address,
      phoneNumber: phoneNumber,
      description: description,
      ageBirthday: ageBirthday
    }).then(() => {
      this.props.navigation.goBack()
    }).catch((err) => console.log(err))

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
      description
    } = this.state

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
              source={{ uri: photoURL }}
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
              onChangeText={(nama) => this.setState({ name: nama })}
              value={name}
            />
          </View>
        </Card>
        <Card containerStyle={CardStyle}>
          <View style={dataContainer}>
            <Text style={headerText}>Deskripsi Pengguna</Text>
            <TextInput
              onChangeText={(deskripsi) => this.setState({ description: deskripsi })}
              value={description}
            />
          </View>
        </Card>
        <Card containerStyle={CardStyle}>
          <View style={dataContainer}>
            <Text style={headerText}>Alamat</Text>
            <TextInput
              onChangeText={(alamat) => this.setState({ address: alamat })}
              value={address}
            />
          </View>
        </Card>
        <Card containerStyle={CardStyle}>
          <View style={dataContainer}>
            <Text style={headerText}>Tanggal Lahir</Text>
            <TextInput
              onChangeText={(tanggal) => this.setState({ ageBirthday: tanggal })}
              value={ageBirthday}
            />
          </View>
        </Card>
        <Card containerStyle={CardStyle}>
          <View style={dataContainer}>
            <Text style={headerText}>Nomor Telepon</Text>
            <TextInput
              onChangeText={(nomor) => this.setState({ phoneNumber: nomor })}
              value={phoneNumber}
            />
          </View>
        </Card>
        <Card containerStyle={CardStyle}>
          <View style={dataContainer}>
            <Text style={headerText}>Email</Text>
            <TextInput
              onChangeText={(email) => this.setState({ email: email })}
              value={email}
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

export default EditProfile
