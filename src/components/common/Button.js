import React from 'react';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import Clickable from './Clickable';
import MyText from './MyText';



const Button = ({ style, buttonTextStyle, onPress, disabled, bordered, disableAllCaps, title }) => {
    const button = {
        backgroundColor: bordered ? "transparent" : disabled ? Colors.darkYellow : Colors.buttonColor,
        height: 37,
        borderWidth: bordered ? 1 : 0,
        borderColor: bordered ? Colors.buttonColor : undefined,
        borderRadius: 3,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",

    }
    const textStyle = {
        textAlign: "center",
        color: bordered ? Colors.headerTitleColor : Colors.white,
        fontFamily: Fonts.name.bold,
        fontSize: Fonts.size._13px,
        marginHorizontal: 16,

    }


    return (

        <Clickable onPress={onPress} style={[button, style]}>

            <MyText numberOfLines={1} style={[textStyle, buttonTextStyle]}
                text={disableAllCaps ? title : title.toUpperCase()} />

        </Clickable>
       
    );

}
export default Button