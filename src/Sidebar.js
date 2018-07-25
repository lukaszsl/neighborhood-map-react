import React, { Component } from 'react'
import './App.css'

class Sidebar extends Component {

state = {
	places: this.props.places
}

	render() {
		return (
			<div className='sidebar'>
				<input
					className='sidebar-input'
					role='search'
					type='text'
				/>
				<div className='sidebar-locations-list'>
					{this.state.places.map((place) => (
						<p className='sidebar-places'>{place.name}</p>
					))}
				</div>
			</div>
		)
	}
}

export default Sidebar
