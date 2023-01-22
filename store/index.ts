import { configureStore } from "@reduxjs/toolkit";
import boards from "./slices/boards";
import { useDispatch } from "react-redux";
import { persistStore } from "redux-persist";
import { createTransform } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const store = configureStore({
	reducer: {
		boards,
	},
});
export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
