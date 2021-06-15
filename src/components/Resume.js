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
		<body className="font-sans antialiased w-full">
			<div className="container mx-auto max-w-screen-xl">
				<main
					id="wrapper"
					className="flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl"
				>
					<div
						id="sidebar"
						className="w-full sm:max-w-sm p-8 bg-gradient-to-b from-indigo-300 via-green-300 to-white"
					>
						<div class="px-2 mb-12">
							<img
								src={profilePicture}
								alt="The Toney Family"
								class="rounded-md w-48 mx-auto mb-2"
							/>
							<h1 class="text-center text-3xl tracking-wide ">
								SCOTT TONEY
							</h1>
							<h2 className="text-center text-lg tracking-wide font-extralight ">
								Junior Fullstack Developer
							</h2>
						</div>

						<div class="font-light text-lg px-2 mb-12">
							<h2 class="text-xl font-semibold mb-4">.contact</h2>
							<div class="flex items-center my-3">
								<img
									src={mailIcon}
									class="inline w-6 mr-4"
									alt="Mail icon"
								/>
								<a href="mailto:">ascotttoney@gmail.com</a>
							</div>
							<div class="flex items-center my-3">
								<img
									src={phoneIcon}
									class="inline w-6 mr-4"
									alt="Phone icon"
								/>
								<a href="tel:">404.723.6952</a>
							</div>
							<div class="flex items-center my-3">
								<img
									src={houseIcon}
									class="inline w-6 pb-1 mr-4"
									alt="House icon"
								/>
								<div>
									<p>Atlanta, Georgia</p>
								</div>
							</div>
						</div>

						<div class="font-light text-lg px-2 mb-12">
							<h2 class="text-xl font-semibold mb-4">
								.personal
							</h2>
							<div class="flex items-center my-3">
								<img
									src={eggIcon}
									class="inline w-6 mr-4"
									alt="Egg Icon"
								/>
								<span>10.10.1984</span>
							</div>
							<div class="flex items-center my-3">
								<img
									src={twoPersonIcon}
									class="inline w-6 mr-4"
									alt="Two Persons Icon"
								/>
								<span>Married, three pets</span>
							</div>
						</div>

						<div class="font-light text-lg px-2 mb-12">
							<h2 class="text-xl font-semibold mb-4">
								.on the web
							</h2>
							<div class="flex items-center my-3">
								<img
									src={gitHubLogo}
									class="inline w-6 mr-4"
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
							<div class="flex items-center my-3">
								<img
									src={linkedInLogo}
									class="inline w-6 mr-4"
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
							<div class="flex items-center my-3">
								<img
									src={instagramLogo}
									class="inline w-6 mr-4"
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
							<div class="flex items-center my-3">
								<img
									src={globeIcon}
									class="inline w-6 mr-4"
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

						<div class="font-light text-lg px-2 mb-12">
							<h2 class="text-xl font-semibold mb-4">
								.skills and tools
							</h2>
							<ul class="list-none">
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

						<div class="font-light text-lg px-2 mb-12">
							<h2 class="text-xl font-semibold mb-4">
								.education
							</h2>
							<h3 class="font-semibold">
								Fullstack Web Development
							</h3>
							<p>Flatiron School, Atlanta 2019</p>
						</div>
					</div>

					<div class="content w-full p-12">
						<div id="profile" class="prose">
							<p>
								I'm a self-taught web developer focusing on the
								core web fundamentals - HTML, CSS and JS. I'm
								experienced in frontend frameworks like Vue and
								React and static site generators like Next.js
								and Eleventy. I write SCSS or use CSS frameworks
								like TailwindCSS, Bootstrap or Bulma to speed up
								styling of my projects.
							</p>
							<p>
								I am highly motivated in expanding my horizons
								day by day for better performance, testing and
								user experience.
							</p>
						</div>
						<hr class="mt-8 mb-12" />
						<div id="experience" class="prose">
							<h2 class="section-headline">Experience</h2>
							<div>
								<h3>Truist Bank (formerly SunTrust Bank)</h3>
								<section class="mb-6">
									<div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
										Aug '19 - present:
									</div>
									<div class="lg:inline-block lg:w-8/12 w-full">
										Junior Application Developer
									</div>
								</section>
								<section class="mb-6">
									<div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
										Task:
									</div>
									<div class="lg:inline-block lg:w-8/12 w-full">
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
						<hr class="mt-8 mb-12" />
						<div id="projects" class="prose">
							<h2 class="section-headline">Projects</h2>
							<div class="mb-16">
								<h3 id="chrisko-headline">Chrisko.io</h3>
								<section class="mb-6">
									<div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
										Personal blog:
									</div>
									<div class="lg:inline-block lg:w-8/12 w-full">
										My blog is the center of my online
										presence. Here, I share posts about what
										I've learnt, tutorials and my thoughts
										on web development in general.
									</div>
								</section>
								<section class="mb-6">
									<div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
										Deployed to:
									</div>
									<div class="lg:inline-block lg:w-8/12 w-full">
										<a
											href="https://chrisko.io"
											target="_blank"
											rel="noopener noreferrer"
										>
											chrisko.io
										</a>
									</div>
								</section>
								<section class="mb-6">
									<div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
										Code on:
									</div>
									<div class="lg:inline-block lg:w-8/12 w-full">
										<a
											href="https://github.com/christiankozalla/nextjs-blog"
											target="_blank"
											rel="noopener noreferrer"
										>
											GitHub/nextjs-blog
										</a>
									</div>
								</section>
								<section class="mb-6">
									<div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
										Features:
									</div>
									<div class="lg:inline-block lg:w-8/12 w-full">
										<ul>
											<li>Static generation</li>
											<li>
												Blog content written in Markdown
											</li>
											<li>
												Counter for pageviews and likes
											</li>
											<li>My latest tweets</li>
											<li>
												Featured images made with
												Inkscape
											</li>
											<li>SEO</li>
										</ul>
									</div>
								</section>

								<section class="mb-6">
									<div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
										Built with:
									</div>
									<div class="lg:inline-block lg:w-8/12 w-full">
										<span class="rounded-xl bg-gray-300 px-3">
											Next.js
										</span>
										<span class="rounded-xl bg-gray-300 px-3">
											CSS
										</span>
										<span class="rounded-xl bg-gray-300 px-3">
											styled-jsx
										</span>
										<span class="rounded-xl bg-gray-300 px-3">
											DynamoDB
										</span>
										<span class="rounded-xl bg-gray-300 px-3">
											Vercel
										</span>
									</div>
								</section>
							</div>
						</div>
						<hr class="mt-8 mb-12" />
						<div id="projects" class="prose">
							<h2 class="section-headline">Expand my skills</h2>
							<div class="mb-16">
								<h4 id="expand-knowledge-headline">
									I'd like to expand my skills and knowledge
									in several fields
								</h4>
								<ul>
									<li>TypeScript</li>
									<li>
										Testing, e.g. with Mocha, Chai, Jest
									</li>
									<li>
										Web Components, e.g. with StencilJS,
										LitElement
									</li>
									<li>
										Prototyping and Wireframing, e.g. with
										Figma, Adobe XD
									</li>
									<li>Scalable Vector Graphics</li>
									<li>Databases</li>
									<li>Mobile development</li>
									<li>
										Backend development, e.g. learn
										additional language like Go, Python,
										PHP, Ruby, Java, Rust
									</li>
								</ul>
							</div>
						</div>
					</div>
				</main>
			</div>
		</body>
	);
}
