import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'

class Vendor extends Component {
  renderItems(items) {
    return items.map((item) => {
      return (
        <View style={styles.productContainer} key = {item.key}>
          <View style={styles.ProductContent}>
            <Image style={styles.imageContent}
              source={{ uri: item.avatar }} />
          </View>
          <View style={{flexDirection: 'column',justifyContent: 'space-around'}}>
            <Text style={styles.headerText}>{item.nama}</Text>
            <Text style={styles.text}>Rp {item.harga}</Text>
            <Text style={styles.text}>{item.kategori}</Text>
          </View>
        </View>
      )
    })
  }

  render() {
    const { params } = this.props.navigation.state
    const vendor = params ? params.vendor : null
    const items = Object.entries(vendor.items).map((items) => Object.assign({}, { key: items[0] }, items[1]))
    return (
      <View style = {{flex: 1}}>
        <View style={styles.vendorStyle}>
          <View>
            <Image source={{ uri: vendor.avatar }} style={{ width: null, height: 200 }} />
          </View>
          <View style={styles.description}>
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.headerText}>{vendor.nama}</Text>
              <Text style={styles.text}>{vendor.kategori}</Text>
              <Text style={styles.text}>{vendor.alamat}</Text>
            </View>
          </View>
          <Button
            title='Pesan Penawaran Terbaik'
            titleStyle={{ fontSize: 20, fontFamily: 'Roboto-Black', color: 'white' }}
            buttonStyle={{
              backgroundColor: 'grey',
              borderRadius: 5,
              borderColor: 'transparent',
              marginVertical: 5,
              paddingHorizontal: 10,
              width: 300,
              alignSelf: 'center',
              marginBottom: 15
            }}
            onPress = {()=>this.props.navigation.navigate('Transaction')}
          />
        </View>
        <View style = {{flex:1, borderWidth:1,borderColor: '#ddd',padding: 10, backgroundColor: 'white'}}>
          <View>
            <Text style = {{fontFamily: 'Roboto-Medium', color: 'black', marginLeft: 15, fontSize: 17}}>Daftar Produk</Text>
          </View>
          <ScrollView>
            {this.renderItems(items)}
          </ScrollView>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
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
  vendorStyle: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
    backgroundColor: 'white'
  },
  productContainer: {
    borderBottomWidth: 1,
    padding: 2,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  ProductContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageContent: {
    height: 50,
    width: 50
  }
})

export default Vendor