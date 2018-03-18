import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { Card, SearchBar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

class Home extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <SearchBar 
            lightTheme
            placeholder = 'cari vendor'
            containerStyle = {styles.SearchBar}
          />
        </View>
        <View style={styles.CardContainer}>
          <TouchableOpacity>
            <View style={styles.Card}>
              <Icon name='stars' size={55} color='grey' />
              <Text style={styles.text}>Most Popular</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.Card}>
              <Icon name='whatshot' size={55} color='grey' />
              <Text style={styles.text}>Hot Promo</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.Card}>
              <FontAwesome name='money' size={55} color='grey' />
              <Text style={styles.text}>Budget Vendor</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
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
    marginTop: 20
  },
  Card: {
    borderBottomWidth: 1,
    padding: 30,
    paddingTop: 60,
    paddingBottom: 60,
    width: Dimensions.get('window').width / 2 - 25,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    position: 'relative',
    margin: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
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
    marginTop: 40,
  },
  SearchBar :{
    marginTop: 30,
    marginHorizontal: 17,
  }
})

export default Home