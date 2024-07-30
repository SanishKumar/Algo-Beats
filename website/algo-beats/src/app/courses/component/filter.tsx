import React from 'react'
import FilterItem from './filter_item';
import ATextButton from '@/app/base-components/buttons/text_button';
import { PiBroomBold } from "react-icons/pi";

const Filter = () => {
	return (
		<div className='flex flex-col px-1 py-2'>
			<div className='flex justify-between px-2 items-center'>
				<span className='font-semibold text-[17px] text-[#656565]'>Filters</span>
				<div className='w-[6rem] flex gap-1 justify-center items-center'>
					<ATextButton
						text='Apply'
						buttonStyle='text-sm rounded-xl font-bold'
					/>
					<span className='text-Aorange'><PiBroomBold /></span>
				</div>
			</div>

			<FilterItem
				filterTitle='Order By'
				filterItems={['Popularity', 'Price', 'Date', 'Recommended', 'Rating']}
			/>
			<FilterItem
				filterTitle='Category'
				filterItems={['Development', 'Business', 'Finance', 'Marketing', 'Design']}
			/>
			<FilterItem
				filterTitle='Level'
				filterItems={['Beginner', 'Intermediate', 'Advanced']}
			/>
			<FilterItem
				filterTitle='Price'
				filterItems={['Free', 'Paid']}
			/>

		</div>
	)
}

export default Filter