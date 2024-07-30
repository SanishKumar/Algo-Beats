"use client"


import React, { useEffect, useState } from 'react';
import NavbarComponent from '../../navbar/navbar_comp';
import ATextInput from '@/app/base-components/input/text_input';
import { inputEnumTypes } from '@/app/utils/types/base-component/input_types';
import { titillium_web } from '@/app/styles/fonts/titillium_web';
import { kanit } from '@/app/styles/fonts/font';
import search_icon from "../../../../../public/search.png"
import right_arrow_icon from "../../../../../public/right-arrow.png"
import illustration_course from "../../../../../public/course_app.gif"
import illustration_goals from "../../../../../public/goal_progress.gif"
import illustration_analysis from "../../../../../public/user_analysis.gif"
import Image from 'next/image';

const illustrationArray = [
	{ src: illustration_course, alt: 'Illustration courses', text: "Learn With Structured Courses" },
	{ src: illustration_analysis, alt: 'Illustration analysis', text: "Get AI Analysis for Right Path" },
	{ src: illustration_goals, alt: 'Illustration goals set', text: "Set Goals for Intractive Achievements" }
];

const HeroSection = () => {

	const [illustrationIndex, setIllustrationIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIllustrationIndex((prev) => prev === 2 ? 0 : prev + 1);
		}, 5000);

		return () => clearInterval(interval);
	}, [])

	return (
		<div
			className="h-[100vh]"
		>
			<NavbarComponent />
			<section className='grid grid-cols-5 h-[90%] w-[100%]'>
				<div className='col-span-3  h-[100%] flex flex-col justify-evenly items-start px-4'>
					<div className='flex flex-col'>
						<span className='font-bold text-xl mb-4 text-Ablue'
							style={{ fontFamily: titillium_web.style.fontFamily }}>Your Only Career Companion</span>
						<span className='w-[70%] font-bold text-5xl text-Ablack'
							style={{ fontFamily: kanit.style.fontFamily }}
						>
							Find the best courses and instructors to guide you through your career.
						</span>

						<div className='flex gap-2 bold'>
							<span className=''></span>
							<span className='mt-6 font-bold text-xl text-[#e89b37]'>{
								illustrationArray[illustrationIndex].text
							}</span>

						</div>
					</div>


					<div className='w-[70%] h-[3.5rem]'>
						<ATextInput
							leadingIconStyle='w-[2.5rem] h-[1.5rem]'
							leadingIcon={search_icon.src}
							inputType={inputEnumTypes.TEXT}
							backgroundStyle='rounded-full font-semibold text-[#565656] tracking-wider'
							placeholder='Search for courses and instructors..'
							trailingIcon={right_arrow_icon.src}
							trailinggIconStyle='w-[2.5rem] h-[1.5rem]'
						/>
					</div>
				</div>
				<div className='col-span-2 h-[100%] flex justify-center items-center'>
					<Image
						src={illustrationArray[illustrationIndex].src}
						alt='Illustration'
						className='' />
				</div>
			</section>
		</div>
	);
};

export default HeroSection;
