import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Dimensions,
  StatusBar,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const InputField = ()=>{
    const [value, onChangeText] = React.useState('');
    return(
        <View style={inputStyle.inputStyle}>
            <TextInput 
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 ,flex:5}}
            onChangeText={text => onChangeText(text)}
            value={value}
            /> 
            <Icon name="send" size={30} color={'#435ea8'} onPress={()=>console.log(Icon.Button)} style={inputStyle.sendButtonStyle}/>
        </View>
    )
}
// let inputWidth =  *0.7;

const inputStyle = StyleSheet.create({
    inputStyle:{
        position: "absolute",
        bottom:0,
        left:0,
        // marginTop: 20,
        zIndex: 2222,
        flex: 1,
        flexDirection: 'row',
        paddingRight: 8,
        // width: Dimensions.get('window').width
    },
    sendButtonStyle:{
        marginLeft: 5,
    }
})
export default InputField;