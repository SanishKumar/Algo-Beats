"use client"

import NavbarComponent from '@/app/components/navbar/navbar_comp'
import React, { useState } from 'react'
import Image from 'next/image'
import course_thumbnail from "../../../../public/images.jpeg"
import { FaBookOpen } from 'react-icons/fa'
import { ImClock2 } from 'react-icons/im'
import ATextButton from '@/app/base-components/buttons/text_button'
import { FaPlayCircle } from "react-icons/fa";
import "../../styles/course/course.css"
import CourseTab from '../component/course_tab'
import { useRouter } from 'next/navigation'

const tabsContent = [
	"Course Description",
	"Course Content",
	"About Instructor",
	"Course Reviews"
]


const CourseDetail = () => {

	const [activeTabIndex, setActiveTabIndex] = useState(0);
	const router = useRouter()

	const changeActiveTab = (index: number) => {
		setActiveTabIndex(index);
	}

	return (
		<div>
			<NavbarComponent />


			<div className='mt-[4rem] px-4 flex gap-[2rem]'>
				<div className='w-[30%] h-[40%] relative'>
					<Image
						src={course_thumbnail}
						alt='course thumbnail'
						className='w-[100%] h-[100%] rounded-xl'
					/>

					<div className='w-[6rem] h-[2rem] bg-[#e89b3792] absolute top-1 right-1 flex justify-center items-center font-bold text-lg text-white rounded-3xl'>
						₹ 200
					</div>
					<div className='w-[2rem] h-[2rem] text-[#e89b37bd] text-3xl absolute bottom-2 right-2'>
						<FaPlayCircle />
					</div>
				</div>

				<div className='w-[70%] flex flex-col justify-evenly'>
					<span className='font-bold text-2xl text-[#393939]'>Complete Ethical Hacking Course With CTF</span>

					<p className='font-medium text-sm mt-3 w-[95%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis iure, pariatur sunt, quae voluptas sapiente fugit provident nam veritatis velit quam optio, quia quaerat ut recusandae nesciunt? Veniam quod vel nostrum voluptatum soluta perferendis nemo culpa tenetur dolores corrupti eum asperiores earum eveniet non, quia voluptatibus dolore fugit quisquam sint, in aspernatur, provident consequuntur impedit quam! Consequuntur voluptatibus sapiente ex autem odit in eos commodi, earum maiores facere similique cum pariatur veritatis quam molestiae cumque nisi adipisci fuga.</p>

					<div className='flex justify-between px-6 mt-4 w-[95%]'>
						<div className='flex gap-4'>
							<div className='flex justify-center items-center gap-2'>
								<span><FaBookOpen /></span>
								<span className='text-sm font-semibold'>4 Lessons</span>
							</div>
							<div className='flex justify-center items-center gap-2'>
								<span><ImClock2 /></span>
								<span className='text-sm font-semibold'>2h:30m</span>
							</div>
						</div>

						<div>
							<ATextButton
								text='Start Course'
								buttonStyle='bg-Ablue text-white rounded-full px-4 py-2'
								clickHandler={() => router.push("/courses/video/complete-ethical-hacking?id=1&index=3&w=120s")}
							/>
						</div>
					</div>
				</div>
			</div>

			<br /><br />

			<div className='grid grid-cols-3 px-8 gap-6'>
				<div className='col-span-1 bg-Awhite flex flex-col gap-2'>
					{
						tabsContent.map((item, index) => <CourseTab isActive={activeTabIndex === index} text={item} clickHandler={() => changeActiveTab(index)} />)
					}
				</div>
				<div className='col-span-2'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit dignissimos tempore itaque hic ab tenetur molestiae earum voluptate. Dolor perspiciatis eaque error possimus tenetur quos velit, veniam cumque autem maxime illum dolorem. Facilis, unde officiis. Sequi asperiores maiores consequuntur quos quam deserunt accusantium quisquam autem, harum omnis velit ab dignissimos quasi facere itaque voluptate iste officia eius distinctio commodi. Consequuntur est nostrum quia ab quo magnam? Nemo aliquam accusantium repellendus laboriosam doloremque eius dicta earum optio, illo quas dolore hic, possimus id veniam labore officiis itaque voluptatibus. Similique porro impedit tempore assumenda, praesentium quia blanditiis, error, dolore aliquid consequuntur officia?

				</div>
			</div>
		</div>
	)
}

export default CourseDetail