import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
	return (
		<header className="bg-blue-100 border-b-2 border-gray-100 bg-opacity-80">
			<div className="container mx-auto flex justify-between">
				<nav className="flex">
					<NavLink
						to="/"
						exact
						className="inline-flex items-center py-6 px-3 mr-4 text-blue-400 hover:text-green-400 text-4xl font-bold cursive tracking-widest"
						activeClassName="text-white"
					>
						HOME
					</NavLink>
					<NavLink
						to="/about"
						className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-400 hover:text-green-400"
						activeClassName="text-red-100 bg-white"
					>
						ABOUT ME
					</NavLink>
					<NavLink
						to="/resume"
						className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-400 hover:text-green-400"
						activeClassName="text-red-100 bg-white"
					>
						RESUME
					</NavLink>
					<NavLink
						to="/project"
						className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-400 hover:text-green-400"
						activeClassName="text-red-100 bg-white"
					>
						PROJECTS
					</NavLink>
					<NavLink
						to="/post"
						className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-400 hover:text-green-400"
						activeClassName="text-red-100 bg-white"
					>
						BLOG
					</NavLink>
				</nav>
				<div className="inline-flex py-3 px-3 my-6">
					<SocialIcon
						url="https://www.linkedin.com/in/ascotttoney/"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 35, width: 35 }}
					/>
				</div>
			</div>
		</header>
	);
}
