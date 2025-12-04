import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "../features/items/itemsSlice.jsx";

const store = configureStore({
    reducer: {
        items: itemsReducer,
    },
});

export default store;