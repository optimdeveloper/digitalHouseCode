import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
import CommonStyle from '../CommonStyle'


const MyCard = ({ style, children, }) => {

    const styles = StyleSheet.create({
       custom:{
        paddingTop:25,
        paddingBottom:55,
        paddingLeft:20,
        paddingRight:20,
        marginTop:20,
        marginBottom:20,
        marginLeft:25,
        marginRight:25
       }
    })
    return (
        <View style={[CommonStyle.CardStyle, styles.custom, style]}>
            {children}
        </View>
    )
}

export default MyCard
