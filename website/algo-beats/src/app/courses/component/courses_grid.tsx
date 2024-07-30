import CourseCard from '@/app/components/home/featured_cources/component/course_card'
import React from 'react'

const CoursesGrid = () => {
	return (
		<div className='grid grid-cols-2 gap-y-2 ps-[10%]'>
			<CourseCard />
			<CourseCard />
			<CourseCard />
		</div>
	)
}

export default CoursesGrid