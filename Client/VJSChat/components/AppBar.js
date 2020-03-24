import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

export const AppBar = ()=>{

    return(
        <View style={AppBarStyle.appBarStyle} >
      <StatusBar backgroundColor='#435ea8' barStyle="light-content" />
        <Text style={AppBarStyle.barTextStyle}>
            Mesage List
        </Text>
        </View>
    )
}
const AppBarStyle = StyleSheet.create({
    appBarStyle:{
        backgroundColor: '#435ea8',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    barTextStyle:{
        color:"white"
    }
})
// export default AppBar;