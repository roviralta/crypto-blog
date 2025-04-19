import React from 'react'
import SearchForm from '../components/SearchForm'

const Home = () => {
	return (
		<>
			<section className='heading'>
				<h1>Pitch yout thoughts about Crypto!</h1>
				<p className='font-light pt-10 text-base sm:text-lg md:text-xl lg:text-2xl'>
					Submit ideas, vote on blogs and get noticed in crypto market
				</p>
				<SearchForm />
			</section>
		</>
	)
}

export default Home
