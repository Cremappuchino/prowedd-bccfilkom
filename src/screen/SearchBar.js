import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements'

class Search extends Component {
  render() {
    <View>
      <SearchBar
        lightTheme
        placeholder='cari vendor'
        containerStyle={styles.Search}
        platform='android'
        round
      />
    </View>
  }
}

const styles = StyleSheet.create({
  Search: {
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 13,
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    borderTopWidth: 0
  },
})

export default Search