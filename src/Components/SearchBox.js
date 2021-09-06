import React from 'react'

const SearchBox = ({ i }) => {
	return(
		<div className='pa2'>
			<input
				className='pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='Search for a new friend'
				onChange={i}
			/>
		</div>
	);
}

export default SearchBox