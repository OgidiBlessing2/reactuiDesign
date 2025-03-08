import PropTypes from "prop-types"

const Header = ({ title, text, height }) => {
	return (
		<header style={{ height: height }}>
			<h1 style={{ color: "white" }}>{title}</h1>
			<p style={{ color: "white" }}>{text}</p>
		</header>
	)
}

Header.defaultProps = {
	title: "Empty",
	text: "Empty",
	height: "",
}

export default Header
