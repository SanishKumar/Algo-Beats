import Image from 'next/image'
import React from 'react'
import instructor_gif from "../../../../../public/instructor.gif"
import ATextButton from '@/app/base-components/buttons/text_button'

const InstructorSection = () => {
	return (
		<div className='w-[100%] h-[100%] grid grid-cols-4 px-4 gap-[2rem]'>
			<div className='w-[90%] h-[100%] col-span-2 flex justify-center flex-col gap-5'>
				<h2 className='text-Ablue font-bold text-3xl'>For Instructors / Mentors</h2>
				<span className='text-Aorange font-semibold text-xl w-[70%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, aut.</span>
				<span className='text-[#353535] font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sed, deleniti quo odit distinctio beatae eius sequi modi necessitatibus ducimus, ipsum numquam enim, quia esse soluta dolorem debitis porro similique.</span>

				<div className='w-[80%] h-[3rem] flex gap-4'>
					<ATextButton
						text='Join As a Mentor'
						buttonStyle='bg-Aorange text-Awhite font-semibold w-[100%] h-[100%] rounded-full'
					/>
					<ATextButton
						text='Explore Our Mentors'
						buttonStyle='bg-Ablue text-Awhite font-semibold w-[100%] h-[100%] rounded-full'
					/>
				</div>
			</div>
			<div className='h-[30rem] w-[80%] col-span-2 flex justify-center items-center'>
				<Image
					src={instructor_gif}
					alt='instructor section image'
					className='w-[100%] h-[100%]'
				/>
			</div>
		</div>
	)
}

export default InstructorSection