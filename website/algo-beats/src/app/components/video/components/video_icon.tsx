import React from 'react'
import Image from 'next/image'

const VideoIcon = ({
	iconData,
	clickHandler
}: { iconData: string, clickHandler: () => void }) => {
	return (
		<div className='w-[1.4rem] h-[1.4rem] cursor-pointer' onClick={clickHandler}>
			<Image
				src={iconData}
				alt='play icon'
				className='w-[100%] h-[100%]'
			/>
		</div>
	)
}

export default VideoIcon