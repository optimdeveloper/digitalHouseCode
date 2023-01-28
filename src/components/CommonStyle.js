import { StyleSheet } from "react-native"

import { getStatusBarHeight } from 'react-native-status-bar-height';
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";

export default StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    containerStyleWithCenter: {
      
        justifyContent: "center",
        alignItems: "center"
    },
    CardStyle: {
        elevation: 5,
        shadowColor: Colors.shadowColor,
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        backgroundColor:Colors.blue,
        borderRadius:20
    },  
    backgroundStyle: {
        backgroundColor: Colors.black
    },
    horizontalContainerStyleWithCenter: {

        flexDirection: "row",
        alignItems: "center",
        backgroundColor:Colors.black

    },
    commonTextTitleStyle: {
        fontSize: Fonts.size._20px,
        color: Colors.black,
        fontFamily: Fonts.name.bold,
        lineHeight:27.32

    },
    commonTextSubTitleStyle: {
        color: Colors.black,
        fontFamily: Fonts.name.regular,
        fontSize: Fonts.size._16px,
        lineHeight:21.86
    },
    commonTextInfoStyle: {
        color: Colors.gray,
        fontFamily: Fonts.name.bold,
        fontSize: Fonts.size._14px,
        lineHeight:19,
        letterSpacing:0,

    },
    commonTextTopCard:{
        fontFamily: Fonts.name.bold,
        fontSize: Fonts.size._16px,
        lineHeight: 22,
        color: Colors.white
    },
    commonTextBottomCard:{
        fontFamily: Fonts.name.bold,
        fontSize: 32,
        lineHeight: 44,
        color: Colors.white
    },
    statusBarPadding: {
        paddingTop: getStatusBarHeight(),
    }
})