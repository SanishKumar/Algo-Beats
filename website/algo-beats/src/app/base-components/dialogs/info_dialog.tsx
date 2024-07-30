import { AInfoDialogTypes } from '@/app/utils/types/base-component/dialog_types';
import React from 'react'

const AInfoDialog = ({
	children,
	onDismiss
}: AInfoDialogTypes) => {

	const handleDismiss = () => {
		if (onDismiss) {
			onDismiss();
		}
	}

	const handleStopPropogation = (e: React.MouseEvent) => {
		e.stopPropagation();
	}

	return (
		<div className='fixed w-[100vw] h-[100vh] bg-[#16161644] top-0 left-0 flex justify-center items-center' onClick={handleDismiss}>
			<div className='bg-white w-[40%] h-[50%] rounded-md p-2' onClick={handleStopPropogation}>
				{
					children
				}
			</div>
		</div>
	)
}

export default AInfoDialog