import { createStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import empReducer from "../Reducer/emp_reducer";

const storeRedux = createStore (
    empReducer,
    composeWithDevTools()
)

export default storeRedux