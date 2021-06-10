import React from 'react'
import image from '../el-cap.jpeg'

export default function Home() {
	return (
		<main>
			<img
				src={image}
				alt="El Capitan in Yosemite National Park"
				className="absolute object-cover w-full h-full"
			/>
			<section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
				<h1 className="text-6xl text-green-100 font-bold cursive leading-non lg:leading-snug home-name">
					Hey, I'm Scott!
				</h1>
			</section>
		</main>
	)
}
