import React from 'react'
import CourseContent from '../../component/course_content'
import VideoPlayer from '@/app/components/video/video_player'

const CourseVideo = () => {
	return (
		<div className='relative'>
			<div className='w-[100%] grid grid-cols-6 px-2 py-2 gap-4'>
				<div className='col-span-1 bg-Awhite'>
					<span className='font-bold text-lg'>Course Content</span>
					<div className='mt-4'>
						<CourseContent isActive={true} />
						<CourseContent isActive={false} />
						<CourseContent isActive={false} />
					</div>
				</div>
				<div className='col-span-5 flex-1'>
					<div className=' bg-Awhite  h-[97vh] rounded-sm'>
						<VideoPlayer />
					</div>
				</div>

			</div>
		</div>
	)
}

export default CourseVideo