import ATextButton from '@/app/base-components/buttons/text_button'
import { kanit } from '@/app/styles/fonts/font'
import React from 'react'
import ToolsWrapper from './components/tools_wrapper'

const ToolsSection = () => {
	return (
		<div className='w-[100%] h-fit pt-[4rem] px-4'>
			<div className='w-[100%] flex justify-between'>
				<span className='text-3xl font-bold text-Ablue'>For Job Ready Tools</span>
				<div>
					<ATextButton
						text='View All Tools'
						buttonStyle='border-2 border-Aorange rounded-xl'
					/>
				</div>
			</div>
			<div className='w-[60%]' style={{ fontFamily: kanit.style.fontFamily }}>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nesciunt laboriosam harum velit ea nihil necessitatibus incidunt praesentium quis aspernatur?</p>
			</div>


			<div className='flex flex-wrap w-[100%] gap-4 justify-evenly mt-8 items-center'>
				<ToolsWrapper />
				<ToolsWrapper />
				<ToolsWrapper />
				<ToolsWrapper />
				<ToolsWrapper />
			</div>
		</div>
	)
}

export default ToolsSection