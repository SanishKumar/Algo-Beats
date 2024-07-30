import React from 'react'
import illustration_course from "../../../../../public/course_app.gif"
import Image from 'next/image'
import OfferCard from './components/offer_card';
import { FaBookReader } from 'react-icons/fa';

const AboutSection = () => {
	return (
		<div className='w-[100%] h-[30rem] grid grid-cols-3 '>
			<div className='col-span-1 h-[100%]'>
				<Image
					src={illustration_course}
					alt='Illustration'
					className='w-[100%] h-[100%]' />
			</div>
			<div className=' h-[100%] col-span-2 px-4 py-6 flex flex-col justify-center'>
				<h2 className='font-bold text-3xl text-[#464646]'>Who Are We?</h2>
				<p className='font-semibold text-[#797979] mt-1 w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sint! Excepturi saepe voluptatem nobis exercitationem minima suscipit at accusantium corporis?</p>
				<h2 className='font-bold text-3xl text-[#464646] mt-4'>What We Do?</h2>
				<p className='font-semibold text-[#797979] mt-1 w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sint! Excepturi saepe voluptatem nobis exercitationem minima suscipit at accusantium corporis?</p>


				<div className='flex flex-wrap w-[100%] justify-between mt-6'>

					<OfferCard
						heading='Structured Courses'
						subHeading='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, molestiae!'
						iconData={{ icon: FaBookReader, color: '#e89b37' }}
					/>
					<OfferCard
						heading='Structured Courses'
						subHeading='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, molestiae!'
						iconData={{ icon: FaBookReader, color: '#e89b37' }}
					/>
					<OfferCard
						heading='Structured Courses'
						subHeading='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, molestiae!'
						iconData={{ icon: FaBookReader, color: '#e89b37' }}
					/>

				</div>
			</div>
		</div>
	)
}

export default AboutSection