import { AOrange, ATransparent } from '@/app/styles/colors'
import { ATextButtonProps } from '@/app/utils/types/base-component/button_types'
import React from 'react'

const ATextButton = ({
	text, clickHandler, buttonStyle, backgroundStyle
}: ATextButtonProps) => {
	return (
		<div className='w-[100%] h-[100%]'>
			<button className={`w-[100%] h-[100%] text-Aorange p-2 font-medium ${buttonStyle}`} onClick={clickHandler}>
				{text}
			</button>
		</div>
	)
}

export default ATextButton