"use client"

import { AInputProps } from '@/app/utils/types/base-component/input_types'
import React, { useState } from 'react'
import AIconButton from '../buttons/icon_button'
import google_logo from "../../public/google_logo.png"

const ATextInput = ({
	inputType,
	inputStyle,
	backgroundStyle,
	placeholder,
	value,
	handleOnchange,
	handleBlur,
	trailingIcon,
	leadingIcon,
	leadingIconStyle,
	trailinggIconStyle,
	trailingIconClickHandler,
	leadingIconClickHandler
}: AInputProps) => {

	const [isFocused, setIsFocused] = useState(false);

	const handleFocusActive = () => {
		setIsFocused(true);
	}

	const handleBlurActive = () => {
		setIsFocused(false);
	}

	return (
		<div className={`w-[100%] h-[100%] flex justify-center items-center border-2 ${isFocused ? 'border-[#ef9e4e7b]' : 'border-[#b0b0b0a0]'} ps-2 bg-transparent ${backgroundStyle}`}>

			{
				leadingIcon && (
					<div className='w-[2.5rem] h-[2.5rem] flex justify-center items-center'>
						<AIconButton
							icon={leadingIcon}
							iconSize={24}
							iconStyle={leadingIconStyle}
							clickHandler={leadingIconClickHandler}
						/>
					</div>
				)
			}
			<input
				placeholder={placeholder}
				type={inputType}
				className={`h-[100%] flex-1 outline-none text-[15px] bg-transparent ${inputStyle}`}
				onFocus={handleFocusActive}
				onBlur={handleBlurActive}
			/>
			{
				trailingIcon && (
					<div className='w-[2.5rem] h-[2.5rem] flex justify-center items-center'>
						<AIconButton
							icon={trailingIcon}
							iconSize={24}
							clickHandler={trailingIconClickHandler}
							iconStyle={trailinggIconStyle}
						/>
					</div>
				)
			}
		</div>
	)
}

export default ATextInput
