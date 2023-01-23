import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FADE_IN_ANIMATION_SETTINGS2 } from "@/lib/constants";

interface IEditable {
	text: string;
	onSave: (text: string) => void;
	defaultValue?: string;
}

const Editable: React.FC<IEditable> = ({ text, onSave, defaultValue }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [newText, setNewText] = useState(text);
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.keyCode === 13 && isEditing) {
				// save on enter
				onSave(newText);
				setIsEditing(false);
			} else if (event.keyCode === 27 && isEditing) {
				// cancel on esc
				setIsEditing(false);
			}
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isEditing, newText, onSave]);
	useEffect(() => {
		if (isEditing) {
			const input = document.querySelector("input") as HTMLInputElement;
			input.select();
		}
	}, [isEditing]);
	const handleSave = () => {		
		onSave(newText);
		setIsEditing(false);
	};

	const handleCancel = () => {
		setIsEditing(false);
	};
	return (
		<div className=" bg-transparent rounded p-2">
			{isEditing ? (
				<AnimatePresence>
					<motion.div {...FADE_IN_ANIMATION_SETTINGS2}>
						<input
							className="bg-transparent w-fit border rounded p-2 text-white text-md hover:bg-white/30 focus:bg-white/30"
							value={newText}
							onChange={(e) => setNewText(e.target.value)}
						/>
						<button
							className="ml-1 border-2 bg-green border-solid border-green text-white p-2 rounded mr-2 hover:bg-transparent transition-all duration-200"
							onClick={()=>handleSave()}
						>
							Save
						</button>
						<button
							className=" ml-1 border-2 bg-purple border-solid border-purple text-white p-2 rounded mr-2 hover:bg-transparent transition-all duration-200"
							onClick={handleCancel}
						>
							Cancel
						</button>
					</motion.div>
				</AnimatePresence>
			) : (
				<p
					className="cursor-pointer text-base text-white w-fit hover:bg-white/30 focus:bg-white/30 p-2 rounded"
					onClick={() => setIsEditing(true)}
				>
					{text || defaultValue || "Enter Text"}
				</p>
			)}
		</div>
	);
};

export default Editable;
