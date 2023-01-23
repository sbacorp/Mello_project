import Layout from "@/components/layout";
import Editable from "@/components/ui/Editable";
import { useAppDispatch } from "@/store";
import {
	updateGoal,
	updateTitle,
	moveItem,
	addColumn,
} from "@/store/slices/boards";
import { BoardsSelector } from "@/store/slices/boards/selectors";
import { IBoard } from "@/store/slices/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { GetServerSideProps } from "next";

const Board = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const { id } = router.query;
	const { boards } = useSelector(BoardsSelector);
	const board = boards.find((b) => b.id === id);
	const [values, setValues] = useState(board);
	useEffect(() => {
		if (!board) setIsLoading(true);
		else {
			setIsLoading(false);
			setValues(board);
		}
	}, [board]);
	const updateCTitle = (value: string) => {
		setValues({ ...values, title: value });
		dispatch(updateTitle({ id, value }));
	};
	const updateCGoal = (value: string) => {
		setValues({ ...values, goal: value });
		console.log(values);

		dispatch(updateGoal({ id, value }));
	};
	const handleDrop = (event: DragEvent, toColumnId: string) => {
		event.preventDefault();
		const itemId = event.dataTransfer.getData("text");
		const fromColumnId = (event.target as HTMLElement).getAttribute(
			"data-column-id"
		);
		dispatch(moveItem({ itemId, fromColumnId, toColumnId }));
	};
	const createColumn = () => {
		if (board)
			try {
				dispatch(
					addColumn({
						id: "column-" + Math.random().toString(16).slice(2),
						title: "колонка",
						boardId: board.id,
						tasks: [],
					})
				);
				console.log(board.columns);
			} catch (e) {
				console.log(e);
			}
	};
	if (isLoading) {
		return <p>Loading...</p>;
	}
	return (
		<Layout>
			{board && (
				<div className="">
					<div className="header flex gap-10">
						<div>
							<label htmlFor="ctitle" className="text-white text-md ">
								Название :
							</label>
							<Editable
								defaultValue="Введите название"
								text={board?.title}
								onSave={updateCTitle}
							/>
						</div>
						<div className="gap-5">
							<label htmlFor="goal" className=" text-white text-md">
								Цель:
							</label>
							<Editable
								defaultValue="Введите цель проекта"
								text={board?.goal}
								onSave={updateCGoal}
							/>
						</div>
						<div className="create-col">
							<button onClick={createColumn}>колонка</button>
						</div>
					</div>

					<div className="columns min-h-80 flex gap-9 overflow-scroll overflow-y-hidden scroll-smooth snap-always snap-mandatory">
						{values && values.columns ? (
							board.columns.map((column) => (
								<div
									className=" min-w-80 h-11  bg-white rounded mb-6"
									key={column.id}
									data-column-id={column.id}
									onDrop={(e) => handleDrop(e, column.id)}
									onDragOver={(e) => e.preventDefault()}
								>
									{column.tasks &&
										column.tasks.map((task) => (
											<div
												className="w-80 bg-primary rounded "
												key={task.id}
												draggable
												onDragStart={(event) =>
													event.dataTransfer.setData("text", task.id)
												}
											>
												{task.title}
											</div>
										))}
								</div>
							))
						) : (
							<div className="text-white text-3xl">пусто</div>
						)}
					</div>
				</div>
			)}
		</Layout>
	);
};
// export const getServerSideProps = async (context) => {
// 	const { boardId } = context.query;
// 	const board = await fetchBoardData(boardId);
// 	return { props: { board } };
// };
export default Board;
