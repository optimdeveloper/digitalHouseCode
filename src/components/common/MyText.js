import React from 'react'
import {Text } from 'react-native'

const MyText = ({ text, style, onPress, numberOfLines }) => {
    return (
        <Text onPress={onPress} numberOfLines={numberOfLines} style={[style]}>{text}</Text>
    )
}

export default MyText