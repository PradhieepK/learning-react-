import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import employeeReducer from "../reducer/Reducer";

const Store = createStore(employeeReducer, applyMiddleware(thunk));

export default Store;
