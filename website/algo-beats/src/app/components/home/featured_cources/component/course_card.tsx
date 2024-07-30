"use client"

import Image from 'next/image'
import React from 'react'
import course_iamge from "../../../../../../public/images.jpeg"
import { FaBookOpen } from "react-icons/fa";
import { ImClock2 } from "react-icons/im";
import { IoIosStarHalf } from "react-icons/io";
import ATextButton from '@/app/base-components/buttons/text_button';
import { useRouter } from 'next/navigation';

const CourseCard = () => {

	const router = useRouter();

	return (
		<div className='w-[26rem] h-[35rem] bg-[#fff] flex flex-col gap-3 rounded-lg border-2 border-[#85858579]'>
			<div className='w-[100%] h-[55%] flex justify-center items-center relative '>
				<Image
					src={course_iamge}
					alt='course thumbnail'
					className='w-[95%] h-[95%] rounded-md'
				/>

				<div className='absolute w-[6rem] h-[2rem] rounded-xl bg-Aorange z-10 bottom-[5%] right-[5%] flex justify-center items-center font-bold text-white'>
					<span>₹ 200</span>
				</div>
			</div>
			<div className=' w-[90%] h-[10%] flex justify-between px-2 bg-[#c5c5c53f] rounded-2xl'>
				<div className='flex justify-center items-center gap-2'>
					<div className='w-[3rem] h-[3rem]'>
						<Image
							src={course_iamge}
							alt='course thumbnail'
							className='w-[95%] h-[95%] rounded-full'
						/>
					</div>
					<div className='flex flex-col'>
						<span className='font-semibold text-sm'>John Doe</span>
						<span className='font-medium text-[12px]'>Instructor</span>
					</div>
				</div>
				<div></div>
			</div>
			<div className=' w-[100%] h-[10%] font-bold text-lg ps-4 pe-8 text-[#474747]'>
				<span className='w-[90%]'>Complete Ethical Hacking Course with Practical CTF</span>
			</div>
			<div className=' w-[100%] h-[6%] flex justify-between items-center px-2 bg-[#c5c5c53f] rounded-2xl'>
				<div className='flex justify-center items-center gap-2'>
					<span><FaBookOpen /></span>
					<span className='text-sm font-semibold'>4 Lessons</span>
				</div>
				<div className='flex justify-center items-center gap-2'>
					<span><ImClock2 /></span>
					<span className='text-sm font-semibold'>2h:30m</span>
				</div>
			</div>
			<div className=' w-[100%] h-[10%] flex justify-between items-center px-2'>
				<div className='flex gap-2 justify-center items-center'>
					<span className='text-[#edce21]'><IoIosStarHalf /></span>
					<span className='text-sm font-bold'>4.1</span>
				</div>
				<div className=''>
					<ATextButton
						text='Enroll Now'
						buttonStyle='bg-Aorange text-white rounded-lg'
						clickHandler={() => router.push("/payment")}
					/>
				</div>
			</div>
		</div>
	)
}

export default CourseCard