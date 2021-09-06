import React, {Component} from 'react'
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'
import { robots } from '../robots.js'
import './App.css';


class App extends Component {
	constructor() {
		super()
		this.state = {
			robotsssss: robots,
			searchfield: ''
		}
	}



	lookingForSearchToChange = (eventtt) => {
						// this.state.searchfield = ... -> DONT DO THAT
		this.setState({ searchfield: eventtt.target.value })
	}					// console.log(eventtt.target.value) -> DONT DO THAT
	

	render() {
		const filteredRobotsFromSearch = this.state.robotsssss.filter(robot1t1t => {
			return robot1t1t.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
			})
		return(			
			<div className='tc'>
				<h2 className='f1'>RoboFriends</h2>
				<SearchBox i={this.lookingForSearchToChange}/>
				<Scroll>
					<CardList robots={filteredRobotsFromSearch}/>
				</Scroll>
			</div>
		);
	}
}

export default App




