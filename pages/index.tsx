import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout";
import { BoardsSelector } from "@/store/slices/boards/selectors";
import { useSelector } from "react-redux";
import { IBoard } from "@/store/slices/boards/types";
import { useAppDispatch } from "@/store";
import { updateBoards } from "@/store/slices/boards";
import { useEffect, useRef } from "react";
import BoardsEmpty from "@/components/boardsEmpty";

export default function Home() {
	const { boards } = useSelector(BoardsSelector);
	const dispatch = useAppDispatch();
	const isMounted = useRef(false);
	useEffect(() => {
		const storedData = localStorage.getItem("boards");
		if (storedData) {
			dispatch(updateBoards(JSON.parse(storedData)));
		}
	}, []);
	useEffect(() => {
		if (isMounted.current) {
			const data = JSON.stringify(boards);
			localStorage.setItem("boards", data);
		}
		isMounted.current = true;
	}, [boards]);

	return (
		<>
			<Layout>
				<div className="boards">
					{!boards.length ? (
						<BoardsEmpty/>
					) : (
						boards.map((board: IBoard) => (
							<div key={board.id} className="">
								<h1>{board.title}</h1>
							</div>
						))
					)}
				</div>
			</Layout>
		</>
	);
}
