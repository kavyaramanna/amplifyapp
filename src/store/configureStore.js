import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import { createHashHistory } from "history";
import thunk from "redux-thunk";
import createRootReducer from "./rootReducer";

export const history = createHashHistory();

const middleware = [thunk, routerMiddleware(history)];
const initialState = {};

const store = createStore(
  createRootReducer(history),
  initialState,
  compose(applyMiddleware(...middleware))
);
export default store;
