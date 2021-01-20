import { createStore, applyMiddleware, compose, combineReducers, Store } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createEpicMiddleware } from 'redux-observable';

import { appReducer, appEpic } from 'modules';
import { ErrorReducer } from './error';

export const history = createBrowserHistory();

const composeEnhancer: typeof compose =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  router: connectRouter(history),
  app: appReducer,
  error: ErrorReducer,
});

const epicMiddleware = createEpicMiddleware();

const store: Store<ReduxState> = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(routerMiddleware(history), epicMiddleware))
);

epicMiddleware.run(appEpic);

export default store;

export type ReduxState = ReturnType<typeof rootReducer>;
