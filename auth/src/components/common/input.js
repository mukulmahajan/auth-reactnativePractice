import React from 'react';
import { TextInput,View,Text } from 'react-native';

const Input =({label,value,onChangeText,placeholderprop,secureTextEntryprop })=>{
    const {inputStyle,containerstyle,labelstyle}=styles;
    return (
        <View style={containerstyle}>
            <Text style={labelstyle}>{label}</Text>
            <TextInput 
            secureTextEntry={secureTextEntryprop}
            placeholder={placeholderprop}
            autoCorrect={false}
            style={inputStyle}
            value={value}
            onChangeText={onChangeText}
            />
        </View>
    );

};

const styles={
inputStyle:{
    color:'#000',
    paddingRight:5,
    paddingLeft:5,
    fontSize:18,
    lineHeight:23,
    flex:2

},
labelstyle:{
    fontSize:18,
    paddingLeft:20,
    flex:1
},
containerstyle:{
    height:40,
    flex:1,
    flexDirection:'row',
    alignItems:'center'
}
};


export { Input};