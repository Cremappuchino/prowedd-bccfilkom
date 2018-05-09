import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView } from 'react-native'
import { Card, SearchBar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


class Home extends Component {
  listVendor(status) {
    this.props.navigation.navigate('ListVendor', { status: status })
  }

  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={styles.container}>
        <View style = {{marginTop: 50}}>
          <SearchBar
            lightTheme
            placeholder='cari vendor'
            containerStyle={styles.SearchBar}
            platform='android'
            round
            onPress = {()=>this.props.navigation.navigate('Search')}
          />
        </View>
        <View style={styles.CardContainer}>
          <TouchableOpacity onPress={() => this.listVendor('Most Popular')}>
            <View style={styles.Card}>
              <Icon name='stars' size={55} color='grey' />
              <Text style={styles.text}>Most Popular</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.listVendor('Hot Promo')}>
            <View style={styles.Card}>
              <Icon name='whatshot' size={55} color='grey' />
              <Text style={styles.text}>Hot Promo</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.listVendor('Budget Vendor')}>
            <View style={styles.Card}>
              <FontAwesome name='money' size={55} color='grey' />
              <Text style={styles.text}>Budget Vendor</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.listVendor('New')}>
            <View style={styles.Card}>
              <Icon name='card-membership' size={55} color='grey' />
              <Text style={styles.text}>New</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  CardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 40
  },
  Card: {
    borderWidth: 1,
    padding: 10,
    paddingTop: 60,
    paddingBottom: 40,
    width: Dimensions.get('window').width / 2 - 25,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    position: 'relative',
    margin: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1
  },
  text: {
    marginHorizontal: 5,
    fontFamily: 'Roboto-Light',
    fontSize: 15,
    color: 'black',
    marginTop: 2,
  },
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    flex: 1
  },
  SearchBar: {
    marginTop: 10,
    marginBottom : 20,
    marginHorizontal: 13,
    backgroundColor: 'transparent', 
    borderBottomWidth: 0, 
    borderTopWidth: 0
  }
})

export default Home