import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { productsReducer } from './Container/Products/reducer';
import SagaCalls from './saga';


const sagaMiddleWare = createSagaMiddleware()

const configureStore= ()=> {

    const middlewares = [
        sagaMiddleWare
    ]

const multipleReducer = combineReducers({"productsReducer": productsReducer})

const store = legacy_createStore(multipleReducer, applyMiddleware(...middlewares))
sagaMiddleWare.run(SagaCalls)
store.runSaga = sagaMiddleWare.run
return store
}

export default configureStore