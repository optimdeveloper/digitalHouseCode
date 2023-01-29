import React from 'react';
import { Text } from 'react-native';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import Clickable from './Clickable';


const Button = ({ style, onPress, disabled, bordered,title,font }) => {
    const button = {
        backgroundColor: bordered ? "transparent" : disabled ? Colors.darkYellow : Colors.buttonColor,
        borderWidth: bordered ? 1 : 0,
        borderColor: bordered ? Colors.buttonColor : undefined,
        flex:1,
        padding:20,
        margin:5,
        justifyContent:'center',
        textAlign: "center",
        alignSelf:"center",
        borderRadius:10
    }
    const textStyle = {
        textAlign: "center",
        color: bordered ? Colors.headerTitleColor : Colors.white,
        fontFamily: Fonts.name.bold,
        fontSize: font ? Fonts.size._12px : Fonts.size._16px,
      
    }

    return (
        <Clickable onPress={onPress} style={[button, style]}>
            <Text style={[textStyle]}>{title}</Text>
        </Clickable>
       
    );

}
export default Button