import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from "./reducers";
import rootSaga from './sagas/root_saga';

const sagaMiddleware = createSagaMiddleware(),
      logger = createLogger({ collapsed: true }),
      createStoreWithMiddleware = applyMiddleware(sagaMiddleware, logger),
      store = createStore(rootReducer, compose(createStoreWithMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
