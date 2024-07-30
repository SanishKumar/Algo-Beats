import React from 'react'
import Image from 'next/image'
import logo from "../../../../public/career_way_logo.png"
import ATextButton from '@/app/base-components/buttons/text_button'
import { kanit } from '@/app/styles/fonts/font'
import Link from 'next/link'
import { IoIosArrowDown } from "react-icons/io";
import DropDownList from './component/drop_down_list'

const NavbarComponent = () => {
	return (
		<nav className='w-[100%] h-[3rem] grid grid-cols-5'>
			<div className='w-[100%] h-[100%] col-span-1 flex justify-center items-center'>
				<Image
					src={logo}
					width={500}
					height={500}
					alt='career way logo'
					className='w-[60%] h-[3rem]' />
			</div>
			<div className='w-[100%] h-[100%] col-span-3  flex justify-center items-center'>
				<ul className='w-[100%] h-[100%] flex justify-evenly items-center font-semibold text-[#4d4d4d] text-lg'
					style={{ fontFamily: kanit.style.fontFamily }}>
					<li>Home</li>
					<li><Link href='#about'>About</Link></li>
					<DropDownList
						heading='Student'
						listItems={[
							{ text: 'Student Login', link: '/courses' },
							{ text: 'Student Register', link: '/instructor' },
							{ text: 'My Courses', link: '/contact' }
						]}
					/>
					<DropDownList
						heading='Instructor'
						listItems={[
							{ text: 'Instructor Login', link: '/courses' },
							{ text: 'Instructor Register', link: '/instructor' },
							{ text: 'Upload Courses', link: '/contact' }
						]}
					/>
					<li><Link href='/courses'>Courses</Link></li>
					<li><Link href="/support/contact">Contact</Link></li>
				</ul>
			</div>
			<div className='col-span-1 flex  w-[100%] h-[100%] justify-center items-center'>
				<div className='w-[98%] h-[85%] flex gap-2'>
					<ATextButton
						text='Login'
						buttonStyle='bg-[#e89b37] text-white rounded-xl'
					/>
					<ATextButton
						text='Register'
						buttonStyle='border-2 border-[#e89b37] rounded-xl'
					/>
				</div>
			</div>
		</nav>
	)
}

export default NavbarComponent