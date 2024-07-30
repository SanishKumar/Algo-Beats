import React from 'react'

const CourseContent = ({
	isActive
}: { isActive: boolean }) => {
	return (
		<div className='w-[100%] '>
			<ul className='w-[100%]'>
				<li className={`w-[100%] ${isActive ? "bg-Ablue" : "bg-white"} font-medium text-[15px] h-[2.4rem] flex justify-between px-4 items-center ${isActive ? "text-white" : "text-Ablack"}`}>
					<span>First chapter</span>
					<span className='font-semibold text-xs'>2:14</span>
				</li>
			</ul>
		</div>
	)
}

export default CourseContent