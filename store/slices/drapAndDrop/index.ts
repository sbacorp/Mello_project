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
		// startDrag: (state, action) => {
		// 	state.isDragging = true;
		// 	state.draggedItem = action.payload;
		// },
		// stopDrag: (state) => {
		// 	state.isDragging = false;
		// 	state.draggedItem = null;
		// },
		moveItem: (state, action) => {
			const { itemId, fromColumnId, toColumnId } = action.payload;
			const fromColumn = state.columns.find((col) => col.id === fromColumnId);
			const toColumn = state.columns.find((col) => col.id === toColumnId);
			if (fromColumn && toColumn) {
				const itemIndex = fromColumn.items.findIndex(
					(item) => item.id === itemId
				);
				if (itemIndex !== -1) {
					const [item] = fromColumn.items.splice(itemIndex, 1);
					toColumn.items.push(item);
				}
			}
		},
	},
});

export const { startDrag, stopDrag } = dragAndDropSlice.actions;

export default dragAndDropSlice.reducer;
