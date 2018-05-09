import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, ScrollView, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import Icons from 'react-native-vector-icons/MaterialIcons'

class Favorite extends Component{
  
  static navigationOptions = {
    header: null
  }

  renderFavoriteVendor(){
    const {
      ImageStyle,
      container,
      CardStyle,
      headerText,
      text,
      description
    } = styles
    let { favorite } = this.props
    if(favorite.length < 1){
      return (
        <View style = {{justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {text}>Oops ... Anda belum memilih vendor favorit</Text>
        </View>
      )
    }
    return favorite.map((vendor)=>{
      return (
        <TouchableHighlight key={vendor.key}>
          <View style={CardStyle}>
            <View style={container}>
              <Image source={{ uri: vendor.avatar }} style={ImageStyle} />
            </View>
            <View style={container}>
              <View style={description}>
                <View>
                  <Text style={headerText}>{vendor.nama}</Text>
                  <Text style={text}>{vendor.kategori}</Text>
                  <Text style={text}>{vendor.alamat}</Text>
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
                onPress = {()=>this.props.navigation.navigate('Vendor', { vendor : vendor})}
              />
            </View>
          </View>
        </TouchableHighlight>
      )
    })
  }

  render(){
    return(
      <View style = {{flex: 1}}>
        <View style = {{justifyContent: 'center', alignItems: 'center', padding: 20,backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#ddd'}}>
          <Text style = {{fontFamily: 'Roboto-Medium',fontSize: 20, color: 'black'}}>
            Vendor Favorit
          </Text>
        </View>
        <ScrollView>
          {this.renderFavoriteVendor()}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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

const mapStateToProps = state =>{
  return {
    favorite : state.favorite.list
  }
}

export default connect(mapStateToProps)(Favorite)