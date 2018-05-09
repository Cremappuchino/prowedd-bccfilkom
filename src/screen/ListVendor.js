import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Card, SearchBar, Button } from 'react-native-elements'
import firebase from 'firebase'
import { toggleFav, unToggleFav } from '../action/toggleFavorite'
import { connect } from 'react-redux'
import initFirebase from '../../firebase'
import Spinner from '../components/Spinner'
import Icons from 'react-native-vector-icons/MaterialIcons'

class ListVendor extends Component {

  state = {
    vendor: [],
    isLoading: true
  }

  async componentDidMount() {
    initFirebase()
    this.db = firebase.database().ref('vendor')
    await this.db.on('value', (value) => {
      const vendors = Object.entries(value.val()).map(value => Object.assign({}, { key: value[0] }, value[1]))

      this.setState({ vendor: vendors, isLoading: false })
    })
  }

  toggleFavorite(vendor){
    if(vendor.favorite){
      const updateFav = firebase.database().ref('vendor/' + vendor.key + '/').update({
        favorite : !vendor.favorite
      })
      this.props.unToggleFav(vendor)
    }else{
      const updateFav = firebase.database().ref('vendor/' + vendor.key + '/').update({
        favorite : !vendor.favorite
      })
      this.props.toggleFav(vendor)
    }
  }

  renderListVendor(status) {
    const { isLoading, vendor } = this.state
    const {
      ImageStyle,
      container,
      CardStyle,
      headerText,
      text,
      description
    } = styles
    const filterVendor = vendor.filter((vendor) => {
      return (vendor.status == status)
    })

    if (isLoading) {
      return (
        <View style={{ alignContent: 'center', justifyContent: 'center' }}>
          <Spinner size='large' />
        </View>
      )
    } else {
      return filterVendor.map((vendor) => {
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
                  <View style={{ justifyContent: 'center' }}>
                    <TouchableOpacity onPress = {()=>this.toggleFavorite(vendor)} >
                      <Icons 
                        name='favorite' 
                        size={40} 
                        color = {vendor.favorite? 'red':'grey'}
                      />
                    </TouchableOpacity>
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
  }

  render() {
    console.log(this.props.listFavorite)
    const { params } = this.props.navigation.state
    const status = params ? params.status : null
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'column', marginBottom: 0, backgroundColor: 'white', borderBottomColor: '#ddd', }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ marginTop: 10, marginLeft: 10, justifyContent: 'flex-start' }}>
              <Icons name='keyboard-backspace' size={25} color='black' onPress={() => this.props.navigation.goBack(null)} />
            </View>
            <View style={{ justifyContent: 'center', marginTop: 10, marginLeft: 20, alignItems: 'center' }}>
              <Text style={styles.title}>{status}</Text>
            </View>
          </View>
          <SearchBar
            lightTheme
            placeholder='cari vendor'
            containerStyle={styles.SearchBar}
            platform='android'
            round
            onPress = {()=>this.props.navigation.navigate('Search')}
          />
        </View>
        <ScrollView>
          {this.renderListVendor(status)}
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
    listFavorite : state.favorite.list
  }
}

export default connect(mapStateToProps, { toggleFav, unToggleFav })(ListVendor)