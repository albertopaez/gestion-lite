import { createStore, /* compose, */ applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
// import { isDevelopment } from './constants/index'
import rootReducer from './reducers';

const middlewares = [
  thunk
] 

const enhancers = []
 
// const persistsConfig = {
//   key: 'root',
//   storage,
//   debug: isDevelopment,
//   stateReconciler: autoMergeLevel2,
//   whitelist: ['provinces']
// }

export default function configureStore(initialState) {

  // if (process.env.NODE_ENV === 'develop') {
  //   const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  //   if (typeof devToolsExtension === 'function') {
  //     enhancers.push(devToolsExtension())
  //   }
  // }

  const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
  });

  // const persistedReducer = persistReducer(persistsConfig, rootReducer)

  const store = createStore(
    // persistedReducer,
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares),
      ...enhancers,
    ),
  )

  // const persistor = persistStore(store)

  // return { store, persistor };
  return store;
}