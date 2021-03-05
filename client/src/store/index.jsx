import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducers from '../redux/index';
// import rootSagas from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers,
    compose(
        applyMiddleware(sagaMiddleware),
        // window.devToolsExtension
        //   ? window.devToolsExtension()
        //   : function (f) {
        //       return f;
        //   }
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
          : function (f) {
              return f;
          }
    )
)
// sagaMiddleware.run(rootSagas)


export default store;