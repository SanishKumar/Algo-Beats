import { AOrange, ATransparent } from '@/app/styles/colors'
import { AIconButtonProps, ATextButtonProps } from '@/app/utils/types/base-component/button_types'
import Image from 'next/image'
import React from 'react'


const AIconButton = ({
	text, clickHandler, buttonStyle, backgroundStyle, icon, iconStyle, textStyle, iconSize
}: AIconButtonProps) => {
	return (
		<div className={`w-[100%] h-[100%] ${backgroundStyle}`}>
			<button className={`w-[100%] h-[100%] bg-transparent text-Aorange p-2 rounded-sm font-medium flex justify-center items-center gap-2 ${buttonStyle}`} onClick={clickHandler}>
				<Image
					src={icon}
					alt='icon'
					width={iconSize ? iconSize : 20}
					height={iconSize ? iconSize : 20}
					className={`${iconStyle}`}
				/>
				<span className={`${textStyle}`}>{text}</span>
			</button>
		</div>
	)
}

export default AIconButton