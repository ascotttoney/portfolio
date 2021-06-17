import React from 'react';
import profilePicture from '../assets/toney-family.jpeg';
import mailIcon from '../assets/mail-outline.svg';
import phoneIcon from '../assets/call-outline.svg';
import houseIcon from '../assets/home-outline.svg';
import eggIcon from '../assets/egg-outline.svg';
import twoPersonIcon from '../assets/people-outline.svg';
import gitHubLogo from '../assets/logo-github.svg';
import linkedInLogo from '../assets/logo-linkedin.svg';
import instagramLogo from '../assets/logo-instagram.svg';
import globeIcon from '../assets/globe-outline.svg';

export default function Resume() {
	return (
		<main>
			<div className="p-6 container mx-auto relative">
				<main
					id="wrapper"
					className="flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl"
				>
					<div
						id="sidebar"
						className="w-full sm:max-w-sm p-8 bg-gradient-to-b from-indigo-300 via-green-300 to-white"
					>
						<div className="px-2 mb-12">
							<img
								src={profilePicture}
								alt="The Toney Family"
								className="rounded-md w-48 mx-auto mb-2"
							/>
							<h1 className="text-center text-3xl tracking-wide ">
								SCOTT TONEY
							</h1>
							<h2 className="text-center text-lg tracking-wide font-extralight ">
								Junior Fullstack Developer
							</h2>
						</div>

						<div className="font-light text-lg px-2 mb-12">
							<h2 className="text-xl font-semibold mb-4">
								.contact
							</h2>
							<div className="flex items-center my-3">
								<img
									src={mailIcon}
									className="inline w-6 mr-4"
									alt="Mail icon"
								/>
								<a href="mailto:">ascotttoney@gmail.com</a>
							</div>
							<div className="flex items-center my-3">
								<img
									src={phoneIcon}
									className="inline w-6 mr-4"
									alt="Phone icon"
								/>
								<a href="tel:">404.723.6952</a>
							</div>
							<div className="flex items-center my-3">
								<img
									src={houseIcon}
									className="inline w-6 pb-1 mr-4"
									alt="House icon"
								/>
								<div>
									<p>Atlanta, Georgia</p>
								</div>
							</div>
						</div>

						<div className="font-light text-lg px-2 mb-12">
							<h2 className="text-xl font-semibold mb-4">
								.personal
							</h2>
							<div className="flex items-center my-3">
								<img
									src={eggIcon}
									className="inline w-6 mr-4"
									alt="Egg Icon"
								/>
								<span>10.10.1984</span>
							</div>
							<div className="flex items-center my-3">
								<img
									src={twoPersonIcon}
									className="inline w-6 mr-4"
									alt="Two Persons Icon"
								/>
								<span>Married, three pets</span>
							</div>
						</div>

						<div className="font-light text-lg px-2 mb-12">
							<h2 className="text-xl font-semibold mb-4">
								.on the web
							</h2>
							<div className="flex items-center my-3">
								<img
									src={gitHubLogo}
									className="inline w-6 mr-4"
									alt="GitHub Logo"
								/>
								<a
									href="http://github.com/ascotttoney"
									target="_blank"
									rel="noopener noreferrer"
								>
									GitHub
								</a>
							</div>
							<div className="flex items-center my-3">
								<img
									src={linkedInLogo}
									className="inline w-6 mr-4"
									alt="LinkedIn Logo"
								/>
								<a
									href="http://www.linkedin.com/ascotttoney"
									target="_blank"
									rel="noopener noreferrer"
								>
									LinkedIn
								</a>
							</div>
							<div className="flex items-center my-3">
								<img
									src={instagramLogo}
									className="inline w-6 mr-4"
									alt="Instagram Logo"
								/>
								<a
									href="http://www.instagram.com/batcat84"
									target="_blank"
									rel="noopener noreferrer"
								>
									@batcat84
								</a>
							</div>
							<div className="flex items-center my-3">
								<img
									src={globeIcon}
									className="inline w-6 mr-4"
									alt="Globe icon"
								/>
								<a
									href="https://scotttoney.netlify.app"
									target="_blank"
									rel="noopener noreferrer"
								>
									Portfolio
								</a>
							</div>
						</div>

						<div className="font-light text-lg px-2 mb-12">
							<h2 className="text-xl font-semibold mb-4">
								.skills and tools
							</h2>
							<ul className="list-none">
								<li>
									<label for="js-skill">JavaScript</label>
									<progress
										id="js-skill"
										max="100"
										value="70"
									></progress>
								</li>
								<li>
									<label for="vue-skill">Node.js</label>
									<progress
										id="vue-skill"
										max="100"
										value="60"
									></progress>
								</li>
								<li>
									<label for="react-skill">React</label>
									<progress
										id="react-skill"
										max="100"
										value="70"
									></progress>
								</li>
								<li>
									<label for="css-skill">CSS</label>
									<progress
										id="css-skill"
										max="100"
										value="60"
									></progress>
								</li>
								<li>
									<label for="css-skill">Ruby on Rails</label>
									<progress
										id="css-skill"
										max="100"
										value="50"
									></progress>
								</li>
								<li>
									<label for="css-skill">CI/CD</label>
									<progress
										id="css-skill"
										max="100"
										value="50"
									></progress>
								</li>
								<li>
									<label for="css-skill">SQL</label>
									<progress
										id="css-skill"
										max="100"
										value="40"
									></progress>
								</li>
							</ul>
						</div>
					</div>

					<div className="content w-full p-8">
						<div id="profile" className="prose">
							<p>
								I'm a bootcamp graduate focusing on the core web
								fundamentals - HTML, CSS and JS. I'm experienced
								in frontend frameworks like Vue and React and
								static site generators like Next.js and
								Eleventy. I write SCSS or use CSS frameworks
								like TailwindCSS, Bootstrap or Bulma to speed up
								styling of my projects.
							</p>
							<p>
								I am motivated to expand my horizons, day by
								day, project by project, for better performance,
								testing and user experience.
							</p>
						</div>
						<hr className="mt-8 mb-12" />
						<div id="experience" className="prose">
							<h2 className="font-bold text-2xl text-green-400 pb-4">
								.experience
							</h2>
							<div>
								<h3>Truist Bank (formerly SunTrust Bank)</h3>
								<section className="mb-6">
									<div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
										Aug '19 - present:
									</div>
									<div className="lg:inline-block lg:w-8/12 w-full">
										Junior Application Developer
									</div>
								</section>
								<section className="mb-6">
									<div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
										Task:
									</div>
									<div className="lg:inline-block lg:w-8/12 w-full">
										Assisted with testing and integration
										during BBT/SunTrust merger. Built simple
										Azure CI/CD pipelines and releases.
										Designed UI for an internal mobile
										application used by wealth advisors.
										Unit tested Node and React-Native
										applications. Dabbled in Java, Docker,
										.NET, and Splunk.
									</div>
								</section>
							</div>
						</div>
						<hr className="mt-8 mb-12" />
						<div id="experience" className="prose">
							<h2 className="font-bold text-2xl text-green-400 pb-4">
								.education
							</h2>
							<div>
								<h3>Flatiron School</h3>
								<section className="mb-6">
									<div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
										Apr '19 - Aug '19:
									</div>
									<div className="lg:inline-block lg:w-8/12 w-full">
										Fullstack Web Development
									</div>
								</section>
								<section className="mb-6">
									<div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
										Task:
									</div>
									<div className="lg:inline-block lg:w-8/12 w-full">
										Rigorous 15-week immersive course that
										focused on learning and creating
										full-stack apps with key languages
										incorporating algorithms, data
										structures, design patterns, and APIs.
										Averaged 60 hours on campus per week
										plus homework.
										<br />
										<br />
										During my time at Flatiron School, I
										learned computer science concepts and
										coded daily throughout a fifteen-week
										intensive bootcamp. I worked on four
										team applications and completed a final
										project independently. I grew
										significantly between each team project
										and utilized different programming
										languages and skills to complete each
										one. I also used GitHub during these
										projects and grew in my understanding of
										how to resolve merge conflicts.
										<br />
										<br />
										On my final project, I worked
										independently to build out a web
										application with a Ruby on Rails backend
										and React-Redux frontend. I utilized an
										external API from Spotify to pull in
										artist, album, and song data that
										allowed users to catalog and listen to
										their music collection. I set up a
										PostgreSQL database to persist data.
									</div>
								</section>
							</div>
						</div>
					</div>
				</main>
			</div>
		</main>
	);
}
