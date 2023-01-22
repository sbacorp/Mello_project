import { createSlice } from "@reduxjs/toolkit";
import { ITask,IColumn, DragAndDropState } from "./types";


const initialState: DragAndDropState = {
	isDragging: false,
	draggedItem: null,
};

const dragAndDropSlice = createSlice({
	name: "dragAndDrop",
	initialState,
	reducers: {
		startDrag: (state, action) => {
			state.isDragging = true;
			state.draggedItem = action.payload;
		},
		stopDrag: (state) => {
			state.isDragging = false;
			state.draggedItem = null;
		},
	},
});

export const { startDrag, stopDrag } = dragAndDropSlice.actions;

export default dragAndDropSlice.reducer;
