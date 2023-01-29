import {
    PRODUCTS_SUCCESS,
    PRODUCTS_LOADING,
    PRODUCTS_ERROR,
    PRODUCTS_WON,
    PRODUCTS_LOSE,
    PRODUCT_SET,
  } from "../types";
  
  const INIT_STATE = {
    products: [],
    product:null,
    points:0,
    loading: false,
    error: null,
    productsWon:[],
    productsLose:[]
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case PRODUCTS_SUCCESS:
        return {
          ...state,
          products: action.payload.data,
          points:action.payload.points ? action.payload.points : state.points,
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
        case PRODUCTS_WON:
          return {
            ...state,
            productsWon: action.payload,
          };
          case PRODUCTS_LOSE:
            return {
              ...state,
              productsLose: action.payload,
            };
            case PRODUCT_SET:
              return {
                ...state,
                product: action.payload,
              };
    }
   
    return state;
  };
  