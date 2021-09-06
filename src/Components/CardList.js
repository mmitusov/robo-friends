import React from 'react'
import Card from './Card.js'

const CardList = ({robots}) => {
	return (
		<div>
	    	{
		      	robots.map((user, i) => {
					return (
						<Card 
						roboid={robots[i].id} 
						robo_name={robots[i].name} 
						roboemail={robots[i].email}
						/>
					)
				})
			}

	    </div>

	);
}

export default CardList;