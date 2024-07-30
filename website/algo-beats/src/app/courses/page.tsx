import React from 'react'
import NavbarComponent from '../components/navbar/navbar_comp'
import ATextInput from '../base-components/input/text_input'
import { inputEnumTypes } from '../utils/types/base-component/input_types'
import search_icon from "../../../public/search.png"
import right_arrow from "../../../public/right-arrow.png"
import Filter from './component/filter'
import CoursesGrid from './component/courses_grid'

const Courses = () => {
	return (
		<div className='w-[100%]'>
			<NavbarComponent />

			<div className='w-[100%] h-[3.5rem] flex justify-center items-center mt-[3rem]'>
				<div className='w-[50%] h-[100%]'>
					<ATextInput
						inputType={inputEnumTypes.TEXT}
						leadingIcon={search_icon.src}
						backgroundStyle='rounded-full'
						placeholder='Search for courses...[Java, Python, Marketing, Freelancing etc.]'
						trailingIcon={right_arrow.src}
					/>
				</div>
			</div>

			<div className='w-[100%] grid grid-cols-5 mt-[2rem] gap-2 px-2'>

				<div className='col-span-1 bg-Awhite rounded-md'>
					<Filter />
				</div>
				<div className='col-span-4'>
					<CoursesGrid />
				</div>

			</div>
		</div>
	)
}

export default Courses