import { IBoard } from "@/store/slices/boards/types";
import Link from "next/link";

function BoardCard(props: IBoard) {
	return (
		
		<Link href={`/board/${props.id}`}>
			<div className="w-80 min-w-80 h-40 rounded-lg p-4 bg-glass border-2 border-solid border-purple/20 shadow-glass backdrop-blur-sm hover:ring-1 cursor-pointer hover:-hue-rotate-30 transition-all duration-300">
				<label htmlFor="ctitle" className="text-white text-md ">
					Название :
				</label>
				<div
					id="ctitle"
					className="title w-fit mb-4 text-white text-xl border-b-2 border-solid"
				>
					{props.title}
				</div>
				<label htmlFor="goal" className=" text-white text-md">
					Цель :
				</label>
				<div
					id="goal"
					className="goal w-fit mb-4 text-white text-xl border-b-2 border-solid"
				>
					{props.goal}
				</div>
			</div>
		</Link>
	);
}

export default BoardCard;
