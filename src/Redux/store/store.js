import { legacy_createStore } from "redux";
import { dashReducer } from "../reducers/dashReducer";

export const store = legacy_createStore(dashReducer)