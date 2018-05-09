import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'
import firebase from 'firebase'
import initFirebase from '../../firebase'
import Icons from 'react-native-vector-icons/MaterialIcons'

class Calculator extends Component {
  static navigationOptions = {
    header: null
  }
  state = {
    vendor: [],
    max: 0,
    min: 0,
    items: [],
    isCalculated : false
  }
  async componentDidMount() {
    initFirebase()
    this.db = firebase.database().ref('vendor')
    await this.db.on('value', (value) => {
      const vendors = Object.entries(value.val()).map(value => Object.assign({}, { key: value[0] }, value[1]))

      this.setState({ vendor: vendors })
    })
    console.log(this.state.vendor)
  }

  onButtonPressed() {
    let { vendor, max, min, items } = this.state
    items = vendor.filter((vendor) => {
      return (vendor.min >= min && vendor.max <= max)
    })
    console.log(vendor)
    console.log(min)
    console.log(max)
    const {
      ImageStyle,
      container,
      CardStyle,
      headerText,
      text,
      description
    } = styles
    return items.map((items) => {
      return (
        <TouchableHighlight key={items.key}>
          <View style={CardStyle}>
            <View style={container}>
              <Image source={{ uri: items.avatar }} style={ImageStyle} />
            </View>
            <View style={container}>
              <View style={description}>
                <View>
                  <Text style={headerText}>{items.nama}</Text>
                  <Text style={text}>{items.kategori}</Text>
                  <Text style={text}>{items.alamat}</Text>
                  <Text style = {text}>{"Rp. " + items.min + " - " + "Rp. " + items.max}</Text>
                </View>
              </View>
              <Button
                title='Lihat Vendor'
                titleStyle={{ fontSize: 20, fontFamily: 'Roboto-Black', color: 'white' }}
                buttonStyle={{
                  backgroundColor: 'grey',
                  borderRadius: 5,
                  borderColor: 'transparent',
                  marginVertical: 5,
                  paddingHorizontal: 10,
                  width: 300
                }}
                onPress={() => this.props.navigation.navigate('Vendor', { vendor: items })}
              />
            </View>
          </View>
        </TouchableHighlight>
      )
    })
  }

  onResetIcon(){
    this.setState({
    max: 0,
    min: 0,
    items: [],
    isCalculated : false
    })
    return (
      this.renderCalculate()
    )
  }
  renderCalculate() {
    const { form, button } = styles
    return (
      <View style={{ padding: 20 }}>
        <TextInput
          placeholder='Harga Minimum'
          underlineColorAndroid='transparent'
          style={form}
          keyboardType='numeric'
          onChangeText={(val) => this.setState({ min: val })}
        />
        <TextInput
          placeholder='Harga Maksimum'
          underlineColorAndroid='transparent'
          style={form}
          keyboardType='numeric'
          onChangeText={(val) => this.setState({ max: val })}
        />
        <Button
          title='Cari'
          buttonStyle={button}
          onPress={() => this.setState({isCalculated: true})}
        />
      </View>
    )
  }



  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ justifyContent: 'space-between',flexDirection : 'row', padding: 20, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
          <TouchableOpacity onPress = {()=>this.onResetIcon()}>
            <Icons name = 'autorenew' size  ={25} color = 'black' style = {{alignSelf : 'flex-start'}} />
            </TouchableOpacity>
          <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 20, color: 'black', marginRight :84 }}>
            Budget Calculate
          </Text>
        </View>
        <ScrollView>
          {this.state.isCalculated? this.onButtonPressed(): this.renderCalculate()}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    borderWidth: 1,
    borderRadius: 17,
    backgroundColor: 'white',
    padding: 15,
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    color: 'black',
    borderColor: '#ddd',
    margin: 12,
  },
  button: {
    backgroundColor: 'grey',
    borderRadius: 17,
    borderColor: 'transparent',
    margin: 12,
    padding: 15,
    width: 293,
    alignSelf: 'center',
  },
  ImageStyle: {
    width: null,
    height: 180
  },
  container: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    borderColor: '#ddd',
  },
  CardStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  headerText: {
    marginHorizontal: 5,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: 'black',
    marginTop: 5,
    marginBottom: 3,
  },
  text: {
    marginLeft: 5,
    fontFamily: 'Roboto-Light',
    fontSize: 14,
    color: 'black',
    marginTop: 2,
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  SearchBar: {
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 13,
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    borderTopWidth: 0
  },
  title: {
    fontFamily: 'Roboto-Regular',
    color: 'black',
    fontSize: 18,
    alignSelf: 'center'
  }
})

export default Calculator