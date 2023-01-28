import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import MainContainer from '../components/common/MainContainer';

const ProductDetail = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <MainContainer header={{title: 'Bienvenido de vuelta!', noLeft: false}}>
      <View style={{flex: 1}}>Products Detail</View>
    </MainContainer>
  );
};

export default ProductDetail
