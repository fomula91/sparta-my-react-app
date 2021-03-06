import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import Post from "./modules/post";
import User from "./modules/user";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  post: Post,
  user: User,

  router: connectRouter(history),
});

//미들웨어에 history 라이브러리 추가
const middlewares = [thunk.withExtraArgument({ history: history })];

const env = process.env.NODE_ENV;

// 리덕스 로거 사용
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
