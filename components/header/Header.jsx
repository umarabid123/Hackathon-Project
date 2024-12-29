"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleSignOut = () => {
		localStorage.removeItem("token");
		window.location.href = "/signin";
	};
	return (
		<header className="bg-white shadow-lg sticky top-0 z-50">
			<nav className="container mx-auto px-6 py-4">
				<div className="flex justify-between items-center">
					<Link href="/" className="text-3xl font-bold text-blue-600 tracking-wide hover:text-blue-800 transition duration-300">
						Event Management
					</Link>
					<div className="hidden md:flex items-center space-x-6">
						<Link href="/" className="text-lg text-gray-600 hover:text-blue-600 transition duration-300">
							All Events
						</Link>
						{/* <div className="relative group">
							<button className="text-lg text-gray-600 hover:text-blue-600 transition duration-300">
								Categories
							</button>
							<div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
								<div
									className="py-1 flex flex-col"
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="options-menu"
								>
									<Link
										href="/category/music"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-200"
									>
										Music
									</Link>
									<Link
										href="/category/tech"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-200"
									>
										Technology
									</Link>
									<Link
										href="/category/food"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-200"
									>
										Food & Drink
									</Link>
								</div>
							</div>
						</div> */}
						<Link
							href="/create-event"
							className="text-lg text-gray-600 hover:text-blue-600 transition duration-300"
						>
							Create Event
						</Link>
						<button onClick={handleSignOut} className="block bg-blue-600 p-2 rounded-lg text-white hover:bg-blue-700 transition duration-300">
                            Sign Out
                        </button>
					</div>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 transition duration-300"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
				{isOpen && (
					<div className="md:hidden mt-4 space-y-4">
						<Link
							href="/"
							className="block py-2 text-lg text-gray-600 hover:text-blue-600 transition duration-300"
						>
							All Events
						</Link>
						<Link
							href="/category/music"
							className="block py-2 text-lg text-gray-600 hover:text-blue-600 transition duration-300"
						>
							Music Events
						</Link>
						<Link
							href="/category/tech"
							className="block py-2 text-lg text-gray-600 hover:text-blue-600 transition duration-300"
						>
							Tech Events
						</Link>
						<Link
							href="/category/food"
							className="block py-2 text-lg text-gray-600 hover:text-blue-600 transition duration-300"
						>
							Food & Drink Events
						</Link>
						<Link
							href="/create-event"
							className="block py-2 text-lg text-gray-600 hover:text-blue-600 transition duration-300"
						>
							Create Event
						</Link>
						
						<button onClick={handleSignOut} className="block py-2 text-lg text-gray-600 hover:text-blue-600 transition duration-300">
                            Sign Out
                        </button>
						
					</div>
				)}
				
			</nav>
		</header>
	);
};

export default Header;
