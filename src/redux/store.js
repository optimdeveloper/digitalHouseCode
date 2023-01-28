
import {applyMiddleware, createStore} from 'redux';
import {persistStore,persistReducer} from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'session',
    storage: AsyncStorage,
    whitelist: ["session"]
}
const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
export const pStore = persistStore(store);
export {store};