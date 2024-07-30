"use client"

import { FilterTypeProps } from '@/app/utils/types/courses/filter_types';
import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'

const FilterItem = ({
	filterTitle,
	filterItems,
}: FilterTypeProps) => {

	const [filterCollapse, setFilterCollapse] = React.useState(false);

	return (
		<div className='flex flex-col gap-4 px-2 mt-8'>
			<div className='w-[100%] flex justify-between items-center border-b-2 border-[#aaaaaa3c] text-Ablue'>
				<span className='font-bold text-sm'>{filterTitle}:</span>
				<span onClick={() => setFilterCollapse(!filterCollapse)} className='cursor-pointer'><IoMdArrowDropdown /></span>
			</div>
			{
				!filterCollapse && (
					<ul>

						{
							filterItems.map((item, index) => (
								<li key={index} className='flex justify-between items-center'>
									<span className='text-sm font-semibold text-[#383838]'>{item}</span>
									<input type='checkbox' />
								</li>
							))
						}

					</ul>
				)
			}
		</div>
	)
}

export default FilterItem