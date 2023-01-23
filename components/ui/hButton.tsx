import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch } from "@/store";
import { addBoard } from "@/store/slices/boards";
import { useState } from "react";
type buttonProps = {
	title?: string;
	onClick?: (event: MouseEvent) => void;
};

function HButton(props: buttonProps) {
	const dispatch = useAppDispatch();
	const [title, setTitle] = useState("");
	const [goal, setGoal] = useState("");
	const onClickAdd = () => {
		dispatch(
			addBoard({
				title: title,
				goal: goal,
				id: "id" + Math.random().toString(16).slice(2),
				columns:[]
			})
		);
		setTitle('');
		setGoal('');
	};

	return (
		<>
			<Dialog.Root>
				<Dialog.Trigger asChild>
					<div className="flex gap-1 rounded-md border-solid border-2 cursor-pointer items-center text-primary transition-all duration-300 border-black bg-white p-1.5 px-4 text-xl hover:bg-primary hover:text-white last:hover:text-white ">
						<p className="font-medium">{props.title}</p>
					</div>
				</Dialog.Trigger>
				<Dialog.Portal>
					<AnimatePresence>
						<motion.div
							className="flex justify-center"
							{...FADE_IN_ANIMATION_SETTINGS}
						>
							<Dialog.Overlay className="fixed inset-0 bg-black backdrop-blur-xl " />
							<Dialog.Content
								onCloseAutoFocus={() => {
									setTitle("");
									setGoal("");
								}}
								onEscapeKeyDown={() => {
									setTitle("");
									setGoal("");
								}}
								className="backdrop-blur-xl border-gray-200  bg-white border-2 rounded-md fixed w-screen max-w-md top-20 p-6 focus:outline-none"
							>
								<Dialog.Title className="font-medium text-lg mb-6">
									Создание доски
								</Dialog.Title>
								<fieldset className="flex gap-5 items-center mb-4">
									<label
										className="font-nurmal text-base text-purple text-right w-24"
										htmlFor="title"
									>
										Название
									</label>
									<input
										className="w-full flex-1 inline-flex items-center justify-center rounded-md px-3 text-base text-purple shadow-lg h-9 focus:shadow-p duration-300 transition-all"
										id="title"
										value={title}
										onChange={(e) => setTitle(e.target.value)}
										type="text"
										placeholder="Введите название доски"
									/>
								</fieldset>
								<fieldset className="flex gap-5 items-center mb-4">
									<label
										className="font-nurmal text-base text-purple text-right w-24"
										htmlFor="goal"
									>
										Цель
									</label>
									<input
										className="w-full flex-1 inline-flex items-center justify-center rounded-md px-3 text-base text-purple shadow-lg h-9 focus:shadow-p duration-300 transition-all"
										id="goal"
										value={goal}
										onChange={(e) => setGoal(e.target.value)}
										type="text"
										placeholder="Введите цель для   доски"
									/>
								</fieldset>
								<div
									style={{
										display: "flex",
										marginTop: 25,
										justifyContent: "flex-end",
									}}
								>
									<Dialog.Close asChild>
										<button
											disabled={!title.trim().length}
											onClick={onClickAdd}
											className="border-solid border-2 border-purple p-3 rounded-md bg-purple text-white hover:bg-transparent hover:text-purple duration-300 transition-all disabled:cursor-not-allowed disabled:bg-metal/30 disabled:border-metal/30 text-black background"
										>
											Создать
										</button>
									</Dialog.Close>
								</div>
								<Dialog.Close asChild>
									<button
										className=" rounded-full h-6 w-6 inline-flex items-center justify-center text-purple absolute top-3 right-3 border border-solid hover:bg-purple hover:text-white duration-300 transition-all"
										aria-label="Close"
										onClick={() => {
											setTitle("");
											setGoal("");
										}}
									>
										<Cross2Icon />
									</button>
								</Dialog.Close>
							</Dialog.Content>
						</motion.div>
					</AnimatePresence>
				</Dialog.Portal>
			</Dialog.Root>
		</>
	);
}

export default HButton;
