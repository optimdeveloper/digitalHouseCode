import {
    PRODUCTS_SUCCESS,
    PRODUCTS_LOADING,
    PRODUCTS_ERROR,
  } from "../types";
  
  const INIT_STATE = {
    products: [],
    loading: false,
    error: null,
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case PRODUCTS_SUCCESS:
        return {
          ...state,
          products: [...action.payload],
          loading: false,
        };
      case PRODUCTS_LOADING:
          return { ...state, loading: true };
      case PRODUCTS_ERROR:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
    }
    return state;
  };
  