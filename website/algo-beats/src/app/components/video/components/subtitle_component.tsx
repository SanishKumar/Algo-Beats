import React from 'react'

const SettingComponent = () => {
	return (
		<div className='w-[13rem] absolute bottom-[100%] right-[20%] translate-x-[50%] mb-3 bg-white rounded-md py-2'>
			<div className='flex justify-between px-2'>
				<span>Subtitle</span>
				<span>on/off</span>
			</div>
			<div className='flex justify-between px-2'>
				<span>AI-generated</span>
				<span>ai</span>
			</div>
			<div className='flex justify-between px-2'>
				<span>Quality</span>
				<span>ig</span>
			</div>
		</div>
	)
}

export default SettingComponent