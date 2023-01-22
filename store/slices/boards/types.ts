import { IColumn } from "../drapAndDrop/types";

export interface IBoard {
	id: string;
	title: string;
	goal?: string;
	columns?: IColumn[];
}

export interface IBoardsSliceState {
    boards: IBoard[];
}