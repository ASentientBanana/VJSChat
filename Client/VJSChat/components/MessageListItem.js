import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


const MessageListItem = ({msgTxt})=>{


    return(
        <View style={listItemStyle.listItemStyle}>
            <Text>{msgTxt}</Text>
        </View>
    )
}

const listItemStyle =StyleSheet.create({
    listItemStyle:{
        minHeight: 40,
        borderColor: 'black',
        borderTopRightRadius: 2,
        paddingLeft:5,
        paddingRight:5,
        borderBottomColor: "black",
        borderBottomWidth: 0.5,

    }
})

export default MessageListItem;