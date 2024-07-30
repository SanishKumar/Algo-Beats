import { OfferCardProps } from '@/app/utils/types/components/home/about_types'
import React from 'react'
import { FaBookReader } from 'react-icons/fa'

const OfferCard = ({
	heading,
	subHeading,
	iconData
}: OfferCardProps) => {
	const IconComponent = iconData.icon; // Get the icon component

	return (
		<div className='flex w-[17rem] max-h-[12rem] justify-center items-center gap-2 px-4'>
			<span className='text-[3rem]' style={{ color: iconData.color }}>
				<IconComponent />
			</span>
			<div>
				<h3 className='font-bold text-[15px] text-Ablue'>{heading}</h3>
				<p className='text-[13px] text-[#686868]'>{subHeading}</p>
			</div>
		</div>
	)
}

export default OfferCard
