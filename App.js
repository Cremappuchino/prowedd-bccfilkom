import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import LoginForm from './src/screen/LoginForm'
import RootNavigator from './src/routes/route'
import ReduxThunk from 'redux-thunk'
import reducer from './src/reducer/reducer'
import initFirebase from './firebase'

class App extends Component {
  componentDidMount(){
    initFirebase()
  }

  render() {
    const store = createStore(reducer, {} , applyMiddleware(ReduxThunk))
    console.ignoredYellowBox = [ 'Setting a timer' ]
    return (
      <Provider store = {store}>
        <RootNavigator />
      </Provider>
    )
  }
}

export default App