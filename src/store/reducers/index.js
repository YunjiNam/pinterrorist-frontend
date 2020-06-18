import { combineReducers } from "redux";
import { cartList } from "./cartList";
// rootReducer 만드는 곳

const rootReducer = combineReducers({ cartList });
export default rootReducer;
