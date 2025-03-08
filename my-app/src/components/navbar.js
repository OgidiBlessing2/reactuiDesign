import { useState } from "react"

const Navbar = () => {
	// State to watch my navigation e.g toggle
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen) // Toggle state
	}

	return (
		<nav className='navbar'>
			<a href='#' className='logo'>
				My Logo
			</a>
			<button
				className='menu-btn'
				onClick={toggleMenu}
				style={{ color: isOpen ? "red" : "white" }}
			>
				{!isOpen ? "☰" : "×"}
			</button>
			<ul className={`underlist ${isOpen ? "show" : ""}`}>
				<li>
					<a href='#home'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#tryReact'>Try React</a>
				</li>
				<li>
					<a href='#learn'>Learn More</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
