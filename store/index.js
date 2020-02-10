import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import reducer from './reducers';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
      key: 'root',
      storage,
      blacklist: ['errorIndicated', 'modalIndicated', 'successIndicated']
}
const persistedReducer = persistReducer(persistConfig, reducer)


const store = createStore(
      persistedReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // development purposes
);

let persistor = persistStore(store)
export { store, persistor }