'use client'

import React, { useState, useRef } from 'react'

const SearchForm = () => {
	const [query, setQuery] = useState('')
	const formRef = useRef<HTMLFormElement>(null)

	const handleReset = () => {
		setQuery('')
		// Optionally reset the form fields if needed
		formRef.current?.reset()
	}

	return (
		<form
			action='/'
			className='search-form'
			ref={formRef}
			autoComplete='off'
			onSubmit={(e) => {
				// Optionally handle submit logic here
				e.preventDefault()
			}}
		>
			<input
				name='query'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className='searchInput'
				placeholder='Search a theme'
				autoComplete='off'
			/>
			<div className='flex gap-2'>
				{query && (
					<>
						<button
							type='reset'
							onClick={handleReset}
							aria-label='Clear search'
						>
							&#10005;
						</button>
						<button type='submit' className='search-btn'>
							<span>Search</span>
						</button>
					</>
				)}
			</div>
		</form>
	)
}

export default SearchForm
