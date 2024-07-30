import { DropDownListProps } from '@/app/utils/types/components/navbar/navbar_types'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import "../../../styles/navbar/navbar.css" // Ensure correct path

const DropDownList = ({
	heading,
	listItems
}: DropDownListProps) => {
	return (
		<li className='dropdown'>
			<div className='flex gap-2 justify-center items-center'>
				<span>{heading}</span>
				<span><IoIosArrowDown /></span>
			</div>
			<ul>
				{
					listItems.map((item, index) => (
						<li key={index} className='px-2 hover:text-Ablue py-2 cursor-pointer'>
							<Link href={item.link}>{item.text}</Link>
						</li>
					))
				}
			</ul>
		</li>
	)
}

export default DropDownList
