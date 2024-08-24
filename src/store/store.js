import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import { loadState,saveState } from "../utils/localStorage";
import {throttle} from 'lodash';

const preloadedState = loadState();

const store = configureStore({
    reducer : {
        todos : todoReducer,
    },
    preloadedState,
});

store.subscribe(
    throttle(() => {
        saveState(store.getState())
    },1000)
)

export default store;