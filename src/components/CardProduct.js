import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Images from '../constants/Images';
import ImageButton from './common/ImageButton';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import {navigate} from '../navigation/RootNavigation';
import Clickable from './common/Clickable';

import {useDispatch} from 'react-redux';
import {PRODUCT_SET} from '../redux/types';
export default function CardProduct({item}) {
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <Clickable
        onPress={() => {
          dispatch({type: PRODUCT_SET, payload: item});
          navigate('ProductDetail', {});
        }}>
        <View style={styles.container}>
          <View style={styles.containerTop}>
            <Image style={styles.logo} source={{uri: item.image}} />
          </View>
          <View style={styles.viewTop}>
            <Text style={styles.labelT}>{item.product}</Text>
            <Text style={styles.labelB}>{item.createdAt}</Text>
          </View>
          <View style={styles.viewP}>
            <Text style={styles.labelP}>
              {item.is_redemption ? (
                <Text style={{color: Colors.red}}>-</Text>
              ) : (
                <Text style={{color: Colors.green}}>+</Text>
              )}
              {item.points}
            </Text>
          </View>
          <View style={styles.viewL}>
            <ImageButton source={Images.ic_right} />
          </View>
        </View>
      </Clickable>
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 45,
    height: 45,
    borderRadius: 10,
  },

  containerTop: {
    flex: 1,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    flexDirection: 'row',
  },
  viewTop: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  viewF: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  labelP: {
    color: Colors.black,
    fontFamily: Fonts.name.bold,
    fontSize: Fonts.size._16px,
    lineHeight: 22,
    letterSpacing: 0,
  },
  labelT: {
    color: Colors.black,
    fontFamily: Fonts.name.bold,
    fontSize: Fonts.size._14px,
    lineHeight: 19,
    letterSpacing: 0,
  },
  labelB: {
    color: Colors.black,
    fontFamily: Fonts.name.regular,
    fontSize: Fonts.size._12px,
    lineHeight: 16,
    letterSpacing: 0,
  },
  viewP: {
    flex: 1.5,
    alignItems: 'flex-end',
    alignSelf: 'center',
  },
  viewL: {
    flex: 0.5,
    alignItems: 'flex-end',
    alignSelf: 'center',
  },
});
