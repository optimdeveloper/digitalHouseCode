import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import Button from '../components/common/Button';
import MainContainer from '../components/common/MainContainer';
import MyCard from '../components/common/MyCard';
import CommonStyle from '../components/CommonStyle';
import ListProduct from '../components/ListProducts';
import Colors from '../constants/Colors';
import {navigate} from '../navigation/RootNavigation';

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);
  const gotoDetail = () => {
    navigate('ProductDetail', {});
  };
  return (
    <MainContainer
      header={{title: '', noLeft: true, backgroundColor: 'transparent'}}>
      <View style={{flex: 1, padding: 15}}>
        <Text style={[CommonStyle.commonTextTitleStyle]}>
          Bienvenido de vuelta!
        </Text>
        <Text style={[CommonStyle.commonTextSubTitleStyle]}>
          Rubén Rodrigueez
        </Text>
        <Text style={[CommonStyle.commonTextInfoStyle, {marginTop: 20}]}>
          TUS PUNTOS
        </Text>
        <MyCard>
          <Text
            style={[
              CommonStyle.commonTextTopCard,
            ]}>
            Diciembre
          </Text>
          <View style={[CommonStyle.containerStyleWithCenter]}>
            <Text
              style={[
                CommonStyle.commonTextBottomCard,
              ]}>
              200 pts.
            </Text>
          </View>
        </MyCard>
        <Text style={[CommonStyle.commonTextInfoStyle,]}>
          TUS MOVIMIENTOS
        </Text>
        <ListProduct/>
        <Button
          onPress={gotoDetail}
          style={styles.buttonStyle}
          bordered
          title="go to detail"
        />
      </View>
    </MainContainer>
  );
};

export default Products;

const styles = StyleSheet.create({
  buttonStyle: {
    width: 67,
    height: 30,
    borderRadius: 19,
    marginEnd: 8,
  },
});
