import React from 'react'
import Editable from './ui/Editable';
interface ICreateColumn {
	createColumnF: ()=>void
}

function CreateColumn({ createColumnF }:ICreateColumn) {
	
	return (
		<div className=" cursor-pointer min-w-80">
			<Editable
				classes="bg-white/20 whitespace-nowrap min-w-80 "
				defaultValue="Добавить колонку"
				text=""
				onSave={createColumnF}
			/>
		</div>
	);
}

export default CreateColumn