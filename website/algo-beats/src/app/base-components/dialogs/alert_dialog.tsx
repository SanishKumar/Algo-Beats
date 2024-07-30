"use client"

import React, { useState, useEffect } from 'react'
import AIconButton from '../buttons/icon_button'
import { AAlertDialogTypes, AAlertEnums } from '@/app/utils/types/base-component/dialog_types'
import google_log from "../../../../public/google_logo.png"

const AAlertDialog = ({
	alertIcon,
	alertMessage,
	alertType
}: AAlertDialogTypes) => {
	const [type, setType] = useState({
		alertColor: "",
		alertIcon: ""
	});

	useEffect(() => {
		switch (alertType) {
			case AAlertEnums.ERROR:
				setType({
					alertColor: "#fc8d8d",
					alertIcon: ""
				});
				break;
			case AAlertEnums.SUCCESS:
				setType({
					alertColor: "#4caf50",
					alertIcon: ""
				});
				break;
			case AAlertEnums.WARNING:
				setType({
					alertColor: "#f7c02a",
					alertIcon: ""
				});
				break;
			default:
				setType({
					alertColor: "#f44336",
					alertIcon: ""
				});
				break;
		}
	}, [alertType]);

	return (
		<div
			className='min-w-[20rem] max-w-[40rem] max-h-[100%] px-1 py-[3px] flex justify-start items-center rounded-md absolute top-1 right-1'
			style={{ backgroundColor: type.alertColor }}
		>
			<span className='flex items-center'>
				<AIconButton
					icon={google_log.src}
				/>
			</span>
			<span className='ml-2 text-white font-semibold'>
				{alertMessage}
			</span>
		</div>
	)
}

export default AAlertDialog
