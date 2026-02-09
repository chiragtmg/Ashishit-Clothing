import React from "react";
import { Link, useLocation } from "react-router-dom"; // Add useLocation
import { assets } from "../assets/assets";

const Navbar = () => {
	const location = useLocation(); // Get current path

	// Helper function to check if the link is active
	const isActive = (path) => location.pathname === path;

	return (
		<div className="flex items-center justify-between py-5 font-medium">
			{/* Logo */}
			<Link to="/">
				<img src={assets.logo} className="w-36" alt="Logo" />
			</Link>

			{/* Navigation Links */}
			<ul className="hidden sm:flex gap-8 text-sm text-gray-700">
				<li>
					<Link
						to="/"
						className="flex flex-col items-center gap-1 hover:text-black transition relative"
					>
						HOME
						<hr
							className={`w-2/4 border-none h-[1.5px] bg-gray-700 absolute bottom-[-6px] transition-opacity ${
								isActive("/") ? "opacity-100" : "opacity-0 hover:opacity-100"
							}`}
						/>
					</Link>
				</li>
				<li>
					<Link
						to="/collection"
						className="flex flex-col items-center gap-1 hover:text-black transition relative"
					>
						COLLECTION
						<hr
							className={`w-2/4 border-none h-[1.5px] bg-gray-700 absolute bottom-[-6px] transition-opacity ${
								isActive("/collection")
									? "opacity-100"
									: "opacity-0 hover:opacity-100"
							}`}
						/>
					</Link>
				</li>
				<li>
					<Link
						to="/about"
						className="flex flex-col items-center gap-1 hover:text-black transition relative"
					>
						ABOUT
						<hr
							className={`w-2/4 border-none h-[1.5px] bg-gray-700 absolute bottom-[-6px] transition-opacity ${
								isActive("/about")
									? "opacity-100"
									: "opacity-0 hover:opacity-100"
							}`}
						/>
					</Link>
				</li>
				<li>
					<Link
						to="/contact"
						className="flex flex-col items-center gap-1 hover:text-black transition relative"
					>
						CONTACT
						<hr
							className={`w-2/4 border-none h-[1.5px] bg-gray-700 absolute bottom-[-6px] transition-opacity ${
								isActive("/contact")
									? "opacity-100"
									: "opacity-0 hover:opacity-100"
							}`}
						/>
					</Link>
				</li>
			</ul>

			{/* Right side: Sign In & Sign Up buttons */}
			<div className="flex items-center gap-6">
				<Link
					to="/login"
					className="px-6 py-2 text-sm border border-gray-400 rounded-full hover:bg-black hover:text-white transition"
				>
					Log in
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
