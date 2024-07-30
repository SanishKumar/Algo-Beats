import React from 'react'
import { MdVideoLibrary } from "react-icons/md";

const ToolsWrapper = () => {
	return (
		<div className='w-[10rem] h-[10rem] bg-[#e89b376a] flex flex-col justify-center items-center gap-4 rounded-3xl cursor-pointer'>
			<span className='text-[4rem] text-[#ffffff]'><MdVideoLibrary /></span>
			<span className='font-bold text-Ablack'>Resume Builder</span>
		</div>
	)
}

export default ToolsWrapper