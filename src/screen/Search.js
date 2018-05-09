import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { SearchBar } from 'react-native-elements'

class Search extends Component{
  render(){
    return(
      <View>
        <SearchBar 
          round
          placeholder = 'Cari vendor ...'
        />
      </View>
    )
  }
}
