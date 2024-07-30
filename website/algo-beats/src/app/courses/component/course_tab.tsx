import React from 'react'

const CourseTab = ({ isActive, text, clickHandler }: { isActive: boolean, text: string, clickHandler: () => void }) => {
	return (
		<div className='flex items-center cursor-pointer' onClick={clickHandler}>
			<div
				className={`w-[100%] h-[3rem] flex justify-center items-center pl-4 pr-8 rounded font-bold ${isActive ? "text-[#ffffff]" : "text-[#3c8bf2]"}`}
				style={{ backgroundColor: isActive ? '#3c8bf2' : "#ffffff" }}>
				{text}
			</div>

			<div className="relative w-0 h-0">
				<div className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[20px] ${isActive ? "border-l-[#3c8bf2]" : "border-l-[#ffffff]"}`}></div>
			</div>
		</div>
	)
}

export default CourseTab
