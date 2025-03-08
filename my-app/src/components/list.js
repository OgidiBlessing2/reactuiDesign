import Header from "./Header"
import Button from "./button"

const List = () => {
	return (
		<section className='list'>
			<div className='why-list'>
				<Header title='Why React?' text='Reason to learn react.' />

				<div className='react-list'>
					<div>
						<h2>Reusable Components</h2>
						<p>
							loremAmet enim exercitation excepteur minim qui velit enim eu
							culpa aliquip qui. Nisi esse culpa aliqua tempor sunt magna ea
							sunt incididunt.loremAmet enim exercitation excepteur minim qui
							velit enim eu culpa aliquip qui. Nisi esse culpa aliqua tempor
							sunt magna ea sunt incididunt.
						</p>
						<Button text='Learn More' bgColor='black' fgColor='white' />
					</div>
					<div>
						<h2>Job Oppturnities</h2>
						<p>
							loremAmet enim exercitation excepteur minim qui velit enim eu
							culpa aliquip qui. Nisi esse culpa aliqua tempor sunt magna ea
							sunt incididunt.loremAmet enim exercitation excepteur minim qui
							velit enim eu culpa aliquip qui. Nisi esse culpa aliqua tempor
							sunt magna ea sunt incididunt.
						</p>
						<Button text='Learn More' bgColor='black' fgColor='white' />
					</div>
					<div>
						<h2>Popular in the Industry</h2>
						<p>
							loremAmet enim exercitation excepteur minim qui velit enim eu
							culpa aliquip qui. Nisi esse culpa aliqua tempor sunt magna ea
							sunt incididunt.loremAmet enim exercitation excepteur minim qui
							velit enim eu culpa aliquip qui. Nisi esse culpa aliqua tempor
							sunt magna ea sunt incididunt.
						</p>
						<Button text='Learn More' bgColor='black' fgColor='white' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default List
