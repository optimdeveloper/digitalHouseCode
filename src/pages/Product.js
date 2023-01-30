/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import MainContainer from '../components/common/MainContainer';
import CommonStyle from '../components/CommonStyle';
import ListProduct from '../components/ListProducts';
import {getProducts} from '../redux/actions/ProductAction';
import {useSelector} from 'react-redux';

import CardPoints from '../components/CardPoints';
import ButtonBottom from '../components/ButtonBottom';

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <MainContainer
      header={{
        hheader: false,
      }}>
      <View style={{flex: 1, padding: 15}}>
        <Text style={[CommonStyle.commonTextTitleStyle]}>
          Bienvenido de vuelta!
        </Text>
        <Text style={[CommonStyle.commonTextSubTitleStyle]}>
          Rubén Rodriguez
        </Text>
        <Text style={[CommonStyle.commonTextInfoStyle, {marginTop: 20}]}>
          TUS PUNTOS
        </Text>

        <CardPoints />

        <Text style={[CommonStyle.commonTextInfoStyle, {marginBottom: 20}]}>
          TUS MOVIMIENTOS
        </Text>
        <ListProduct />
        <ButtonBottom />
      </View>
    </MainContainer>
  );
};

export default Products;
