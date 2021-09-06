import React from 'react'

const Card = ({roboid, robo_name, roboemail}) => {
	return(
		<>
			<div className='tc bg-light-green dib br4 pa3 ma2 grow bw2 shadow-5'>
				<img alt='robots' src={`https://robohash.org/${roboid}?=200x200`} />
				<div>
					<h1>{robo_name}</h1>
					<p>{roboemail}</p>
				</div>
			</div>
		</>
	)
};

export default Card