import { IBoard } from "../boards/types";
export interface ITask {
	id: string;
	title: string;
	description: string;
	columnId: IColumn["id"];
}

export interface IColumn {
	id: string;
	title: string;
	description: string;
	tasks: ITask[];
	boardId: IBoard["id"];
}
export interface DragAndDropState {
	isDragging: boolean;
	draggedItem: any;
}
