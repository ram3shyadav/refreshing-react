import React, { useState } from 'react';
import logo from './../../logo.svg';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="bg-gray-800 py-4">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
				<div className="flex items-center">
					<img src={logo} className="w-8 h-8 text-white mr-2" alt="logo" />
					<h1 className="text-white font-bold text-xl">My App</h1>
				</div>
				<button
					type="button"
					className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
					aria-label="Toggle menu"
					onClick={handleMenuClick}
				>
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
				<nav
					className={`${isMenuOpen ? '' : 'hidden'
						} lg:flex lg:items-center lg:w-auto`}
				>
					<ul className="list-reset lg:flex justify-end flex-1 items-center">
						<li className="mr-3">
							<a
								className="inline-block py-2 px-4 text-white font-bold no-underline"
								href="#"
							>
								Home
							</a>
						</li>
						<li className="mr-3">
							<a
								className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
								href="#"
							>
								About
							</a>
						</li>
						<li className="mr-3">
							<a
								className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
								href="#"
							>
								Services
							</a>
						</li>
						<li className="mr-3">
							<a
								className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
								href="#"
							>
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
