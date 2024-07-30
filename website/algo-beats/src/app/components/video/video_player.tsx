"use client"

import React, { useRef, useState, useEffect } from 'react'
import "../../styles/video/video_player.css"
import paused_icon from "../../../../public/pause.svg"
import heart_empty from "../../../../public/empty_heart.svg"
import heart_filled from "../../../../public/heart_filled.svg"
import chatbot from "../../../../public/chatbot.svg"
import comment from "../../../../public/comment.svg"
import play_icon from "../../../../public/play.svg"
import next_icon from "../../../../public/next_btn.svg"
import mic_icon from "../../../../public/mic.svg"
import subtitle_icon from "../../../../public/subtitle.svg"
import gesture_icon from "../../../../public/gesture.svg"
import gesture_active_icon from "../../../../public/gesture_active.svg"
import setting_icon from "../../../../public/setting.svg"
import full_screen_icon from "../../../../public/full-screen.svg"
import VideoIcon from './components/video_icon'
import SettingComponent from './components/setting_component'

const handleTimer = (seconds: number): string => {
	const mins = Math.floor(seconds / 60);
	const secs = Math.floor(seconds % 60);
	const minsPadded = mins.toString().padStart(2, '0');
	const secsPadded = secs.toString().padStart(2, '0');
	return `${minsPadded}:${secsPadded}`;
}

const VideoPlayer = () => {
	const [play, setPlay] = useState(false);
	const [setting, setSetting] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [subtitle, setSubtitle] = useState(false);
	const [gesture, setGesture] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const videoRef = useRef<HTMLVideoElement>(null);

	const handlePlay = () => {
		if (videoRef.current) {
			if (play) {
				videoRef.current.pause();
			} else {
				videoRef.current.play();
			}
			setPlay(!play);
		}
	}

	useEffect(() => {
		const updateTimer = () => {
			if (videoRef.current) {
				setCurrentTime(videoRef.current.currentTime);
			}
		};

		// Update the current time every 100ms
		const interval = setInterval(updateTimer, 100);

		// Clear the interval when the component unmounts
		return () => clearInterval(interval);
	}, [play]); // Dependency on play state to start/stop interval

	const handleFullScreen = () => {
		if (videoRef.current) {
			if (document.fullscreenElement) {
				document.exitFullscreen();
			} else {
				videoRef.current.requestFullscreen();
			}
		}
	}

	const handleNext = () => {
		// Implement the logic to handle the next video
	}

	const handleSettingToggle = () => {
		// Implement the logic to toggle the setting component
		setSetting(!setting);
	}

	const handleSubtitleToggle = () => {
		// Implement the logic to toggle the setting component
		setSubtitle(!subtitle);
	}

	const handleDisplayModal = () => {
		setShowModal(!showModal);
	}


	const handleStopPropagation = (e: React.MouseEvent) => {
		e.stopPropagation();
	}



	return (
		<>
			<div className={`w-[100%] h-[100%] relative video-container ${play ? "" : "paused"}`}>
				<video className='w-[100%] h-[100%]' ref={videoRef} onClick={handlePlay}>
					<source src='https://www.w3schools.com/html/mov_bbb.mp4' type='video/mp4' />
					Your browser does not support the video tag.
				</video>

				<div className={`w-[100%] h-[15%] absolute bottom-0 left-0 right-0 z-10 video-wrapper`}>
					<div className='video-timeline'>
						{/* Add timeline controls here if needed */}
					</div>
					<div className='video-control-wrapper'>
						<div className='flex justify-center items-center gap-8'>
							<VideoIcon
								iconData={play ? paused_icon : play_icon}
								clickHandler={handlePlay}
							/>
							<VideoIcon
								iconData={next_icon}
								clickHandler={handleNext}
							/>
							<VideoIcon
								iconData={mic_icon}
								clickHandler={handleNext}
							/>

							<div className='flex gap-1 font-semibold text-sm text-white'>
								<span>{handleTimer(currentTime)}</span>
								<span>/</span>
								<span>{videoRef.current ? handleTimer(videoRef.current.duration) : '00:00'}</span>
							</div>
						</div>
						<div className='flex justify-center items-center gap-4'>
							<VideoIcon
								iconData={heart_empty}
								clickHandler={handlePlay}
							/>
							<VideoIcon
								iconData={comment}
								clickHandler={handleDisplayModal}
							/>
							<VideoIcon
								iconData={chatbot}
								clickHandler={handleDisplayModal}
							/>

						</div>
						<div className='flex justify-center items-center gap-8'>

							<div className='relative'>
								<VideoIcon
									iconData={subtitle_icon}
									clickHandler={handleSubtitleToggle}
								/>

								{
									subtitle && <SettingComponent />
								}
							</div>
							<div className='relative'>
								<VideoIcon
									iconData={setting_icon}
									clickHandler={handleSettingToggle}
								/>

								{
									setting && <SettingComponent />
								}
							</div>
							<VideoIcon
								iconData={gesture ? gesture_active_icon : gesture_icon}
								clickHandler={() => setGesture(!gesture)}
							/>
							<VideoIcon
								iconData={full_screen_icon}
								clickHandler={handleFullScreen}
							/>
						</div>
					</div>
				</div>
			</div>
			{
				showModal && (

					<div className='absolute w-[80%] h-[100%] top-0 right-0 z-10 flex justify-end items-center'
						style={{
							background: 'linear-gradient(to left, rgba(43, 43, 43, 0.8), rgba(43, 43, 43, 0))'
						}} onClick={handleDisplayModal}>
						<div className='w-[70%] h-[97%] rounded-md bg-white' onClick={handleStopPropagation}>

						</div>
					</div>
				)
			}
		</>
	)
}

export default VideoPlayer
