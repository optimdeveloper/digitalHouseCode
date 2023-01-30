import React,{useState}from 'react'
import {View} from 'react-native';
import Button from './common/Button';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { PRODUCTS_SUCCESS } from '../redux/types';
import { getProducts } from '../redux/actions/ProductAction';
export default function ButtonBottom() {
    const dispatch = useDispatch();
    const productsWon = useSelector(state => state.product.productsWon);
    const productsLose = useSelector(state => state.product.productsLose);
    const [filter, setFilter] = useState(false);
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
    <>
    {!filter ? (
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Button font title="Ganados" onPress={showOnlyWon} />
          <Button font title="Canjeados" onPress={showOnlyLose} />
        </View>
      ) : (
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Button title="Todos" onPress={showAll} />
        </View>
      )}
      </>
  )
}
