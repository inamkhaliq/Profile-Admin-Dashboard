import { configureStore } from "@reduxjs/toolkit";
import UsersSlice from "./FeaturesSlices/userSlice";
import Books from "./FeaturesSlices/bookSlice";

export const store=configureStore({
    reducer:{
        UsersSlice,
        Books,
    },
});