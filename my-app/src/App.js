import Navbar from "./components/navbar"
import Header from "./components/Header"
import List from "./components/list"
import Footer from "./components/footer"

function App() {
	return (
		<div className='App'>
			{/* Navbar */}
			<Navbar />
			{/* Hero Section */}
			<section className='header_section'>
				<Header
					title='My React App'
					text='Learn more about react in our website react.com.'
				/>
			</section>
			{/* List */}
			<List />
			{/* Footer */}
			<Footer footerbgColor='#151f30' footerfgColor='white' />
		</div>
	)
}

export default App
