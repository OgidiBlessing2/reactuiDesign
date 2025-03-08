const Footer = ({ footerbgColor, footerfgColor }) => {
	return (
		<footer
			style={{ backgroundColor: { footerbgColor }, color: footerfgColor }}
		>
			<div className='footer_container'>
				<p>All right reserved &copy; Made by roshe.</p>
			</div>
		</footer>
	)
}

export default Footer
