import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../logo.svg';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="bbg-gray-800 fixed w-full z-20 top-0 left-0 border-b">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<a href="/" className="flex items-center">
					<img src={logo} className="w-8 h-8 text-white mr-2" alt="logo" />
					<h1 className="text-white font-bold text-xl">My App</h1>
				</a>
				<div className="flex md:order-2">
					<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
					<button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false" onClick={handleMenuClick}>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-6 h-6 text-white"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<line x1="3" y1="12" x2="21" y2="12" />
							<line x1="3" y1="6" x2="21" y2="6" />
							<line x1="3" y1="18" x2="21" y2="18" />
						</svg>
					</button>
				</div>
				<nav className={`${isMenuOpen ? '' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky`}>
					<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
						<li>
							<NavLink to="/" className={(isActive) => isActive ? 'block py-2 px-4 text-white font-bold no-underline' : 'block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4'} aria-current="page" exact>Home</NavLink>
						</li>
						<li>
							<NavLink to="/todo" className={(isActive) => isActive ? 'block py-2 px-4 text-white font-bold no-underline' : 'block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4'} >ToDo</NavLink>
						</li>
						<li>
							<NavLink to="/about" className={(isActive) => isActive ? 'block py-2 px-4 text-white font-bold no-underline' : 'block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4'} >About</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header >

	);
};

export default Header;
