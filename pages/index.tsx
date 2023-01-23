import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout";
import { BoardsSelector } from "@/store/slices/boards/selectors";
import { useSelector } from "react-redux";
import { IBoard } from "@/store/slices/boards/types";
import BoardsEmpty from "@/components/boardsEmpty";
import BoardCard from "@/components/boardCard";

export default function Home() {
	const { boards } = useSelector(BoardsSelector);
	

	return (
		<>
			<Layout>
				<div className="boards flex px-20 flex-wrap gap-32 items-top justify-center">
					{!boards.length ? (
						<BoardsEmpty/>
					) : (
						boards.map((board: IBoard) => (
							<BoardCard {...board} key={board.id} />
						))
					)}
				</div>
			</Layout>
		</>
	);
}
