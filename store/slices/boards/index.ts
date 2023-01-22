import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBoard,IBoardsSliceState } from "./types";




const initialState: IBoardsSliceState = {
	boards: [],
};

export const BoardsSlice = createSlice({
	name: "boards",
	initialState,
	reducers: {
		addBoard(state, action: PayloadAction<IBoard>) {
			state.boards.push({
				...action.payload,
			});
		},
		deleteBoard(state, action: PayloadAction<IBoard>) {
			state.boards = state.boards.filter(
				(state) => !(state.id === action.payload.id)
			);
		},
		updateBoards: (state, action) => {
			state.boards = action.payload;
		},
	},
});

export const { addBoard, deleteBoard, updateBoards } = BoardsSlice.actions;

export default BoardsSlice.reducer;


