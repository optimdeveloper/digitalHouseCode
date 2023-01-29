/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import Button from '../components/common/Button';
import MainContainer from '../components/common/MainContainer';
import MyCard from '../components/common/MyCard';
import CommonStyle from '../components/CommonStyle';
import ListProduct from '../components/ListProducts';
import {getProducts} from '../redux/actions/ProductAction';
import {useSelector} from 'react-redux';
import ScrollContainer from '../components/common/ScrollContainer';
import { PRODUCTS_SUCCESS } from '../redux/types';
const Products = () => {
  const dispatch = useDispatch();
  const points = useSelector(state => state.product.points);
  const productsWon = useSelector(state => state.product.productsWon);
  const productsLose = useSelector(state => state.product.productsLose);
  const [filter, setFilter] = useState(false);

  let dollarUSLocale = Intl.NumberFormat('en-US', {minimumFractionDigits: 2});

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const showOnlyWon = () => {
    setFilter(true);
    dispatch({type: PRODUCTS_SUCCESS, payload: {data: productsWon}});
  };
  const showOnlyLose = () => {
    setFilter(true);
    dispatch({type: PRODUCTS_SUCCESS, payload: {data: productsLose}});
  };
  const showAll = () => {
    setFilter(false);
    dispatch(getProducts());
  };
  return (
    <MainContainer>
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

        <MyCard>
          <Text style={[CommonStyle.commonTextTopCard]}>Diciembre</Text>
          <View style={[CommonStyle.containerStyleWithCenter]}>
            <Text style={[CommonStyle.commonTextBottomCard]}>
              {dollarUSLocale.format(points)} pts
            </Text>
          </View>
        </MyCard>
        <Text style={[CommonStyle.commonTextInfoStyle, {marginBottom: 20}]}>
          TUS MOVIMIENTOS
        </Text>
        <ListProduct />
        {!filter ? (
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Button  font title="Ganados" onPress={showOnlyWon} />
            <Button font title="Canjeados" onPress={showOnlyLose} />
          </View>
        ) : (
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Button title="Todos" onPress={showAll} />
          </View>
        )}
      </View>
    </MainContainer>
  );
};

export default Products;
