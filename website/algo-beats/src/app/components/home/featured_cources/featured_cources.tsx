import ATextButton from '@/app/base-components/buttons/text_button'
import React from 'react'
import CourseCard from './component/course_card'
import { kanit } from '@/app/styles/fonts/font'

const FeaturedCourses = () => {
	return (
		<div className='flex flex-col px-3'>
			<div className='flex justify-between'>
				<span className='text-3xl font-bold text-Ablue'>Our Featured Courses</span>
				<div>
					<ATextButton
						text='View All Courses'
						buttonStyle='border-2 border-Aorange rounded-xl'
					/>
				</div>
			</div>
			<span className='w-[60%]' style={{ fontFamily: kanit.style.fontFamily }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam blanditiis numquam quisquam laboriosam aliquam nisi beatae adipisci dolore atque minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
			<div className='flex flex-wrap justify-evenly gap-y-4 mt-[4rem]'>
				<CourseCard />
				<CourseCard />
				<CourseCard />
				<CourseCard />
				<CourseCard />
				<CourseCard />
			</div>
		</div>
	)
}

export default FeaturedCourses