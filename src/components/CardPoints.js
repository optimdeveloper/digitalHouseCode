import React from 'react'
import { View,Text} from 'react-native'
import Utils from '../constants/Utils'
import MyCard from './common/MyCard'
import CommonStyle from './CommonStyle'
import {useSelector} from 'react-redux';
export default function CardPoints() {
    const points = useSelector(state => state.product.points);
  return (
   
    <MyCard>
          <Text style={[CommonStyle.commonTextTopCard]}>Diciembre</Text>
          <View style={[CommonStyle.containerStyleWithCenter]}>
            <Text style={[CommonStyle.commonTextBottomCard]}>
              {Utils.formatPoints(points)} pts
            </Text>
          </View>
        </MyCard>

  )
}
