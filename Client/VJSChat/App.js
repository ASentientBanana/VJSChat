import React from 'react';
import {AppBar} from './components/AppBar'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import MessageList from './components/MessageList'
import InputField from './components/InputField'
const App = ()=>{

  return(
       <View style={{flex: 1,}}>
     <AppBar />
     <MessageList />
     <InputField /> 
    </View>
   
  )
}

export default App;