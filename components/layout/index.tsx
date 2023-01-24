import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import Meta from "./meta";
import useScroll from "@/lib/hooks/use-scroll";
import HButton from "../ui/hButton";
import { AnimatePresence, motion } from "framer-motion";
import {
	FADE_IN_ANIMATION_SETTINGS,
	FADE_IN_ANIMATION_SETTINGS3,
} from "@/lib/constants";
import { useAppDispatch } from "@/store";
import { updateBoards } from "@/store/slices/boards";
import { useEffect, useRef } from "react";
import { BoardsSelector } from "@/store/slices/boards/selectors";
import { useSelector } from "react-redux";

export default function Layout({
	meta,
	children,
}: {
	meta?: {
		title?: string;
		description?: string;
		image?: string;
	};
	children: ReactNode;
}) {
	const scrolled = useScroll(30);
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
			<Meta {...meta} />
			<div
				className={`fixed top-0 w-full px-8 flex justify-between items-center ${
					scrolled
						? "border-b h-16 py-1 border-gray-200 bg-purple/50 backdrop-blur-xl"
						: "bg-primary/30 h-20 py-6"
				} z-30 transition-all duration-300`}
			>
				<div className="header_left flex gap-10 items-center">
					<div className="flex h-16 items-center">
						<Link href="/" className="flex items-left">
							<Image
								src="/logo.png"
								alt="Mello"
								width="120"
								height="80"
								className="mr-2 rounded-sm"
							></Image>
						</Link>
					</div>
					<HButton title="Создать доску" />
				</div>
				<div>
					<AnimatePresence>
						<motion.button
							className="header_right rounded-md border-solid border-2 border-black bg-white text-primary text p-1.5 px-4 text-xl  transition-all duration-500 hover:bg-primary hover:text-white"
							{...FADE_IN_ANIMATION_SETTINGS}
						>
							Sign In
						</motion.button>
					</AnimatePresence>
				</div>
			</div>
			<motion.main
				{...FADE_IN_ANIMATION_SETTINGS3}
				className="w-full pt-32 px-16 bg-primary min-h-screen"
			>
				{children}
			</motion.main>
			<div className="absolute bg-midnight/40 w-full border-t border-gray-500 py-5 text-center">
				<p className="text-white">
					Project made by{" "}
					<a
						className="font-medium text-gray-800 underline"
						href="https://github.com/sbacorp"
						target="_blank"
						rel="noopener noreferrer"
					>
						SBA
					</a>
				</p>
			</div>
		</>
	);
}
