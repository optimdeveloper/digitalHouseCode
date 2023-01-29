import Utils from '../../constants/Utils';
import {logger} from '../../core/AppLogger';
import {productApi} from '../../pages/ProductApi';
import {PRODUCTS_ERROR, PRODUCTS_LOADING, PRODUCTS_LOSE, PRODUCTS_SUCCESS, PRODUCTS_WON} from '../types';

export const setProducts = (data, points) => {
  return {
    type: PRODUCTS_SUCCESS,
    payload: {data, points},
  };
};
export const setLoading = () => {
  return {
    type: PRODUCTS_LOADING,
  };
};
export const setError = err => {
  return {
    type: PRODUCTS_ERROR,
    payload: err,
  };
};

export const getProducts = () => {
  return async dispatch => {
    dispatch(setLoading());
    try {
      productApi.getProducts(
        async res => {
          logger('produts', res);
          let points = 0;

          res.map(item => {
            if (item.is_redemption) points -= item.points;
            else points += item.points;
            item.createdAt=Utils.formatDate(item)
          });
          let productsWon = res.filter(item => !item.is_redemption);
          let productsLose = res.filter(item => item.is_redemption);
          dispatch({type: PRODUCTS_WON, payload: productsWon});
          dispatch({type: PRODUCTS_LOSE, payload: productsLose});
          dispatch(setProducts(res, points));
        },
        err => {
          dispatch(setError(err));
        },
      );
    } catch (err) {
      dispatch(setError(err));
    }
  };
};
