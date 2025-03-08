import PropTypes from "prop-types"

const Button = ({ text, bgColor, fgColor }) => {
	return (
		<div>
			<button
				style={{
					backgroundColor: { bgColor },
					color: { fgColor },
					margin: "auto",
				}}
				className='btn'
			>
				{text}
			</button>
		</div>
	)
}

Button.defaultProps = {
	text: "Learn More",
	bgColor: "black",
	fgColor: "white",
}

export default Button
