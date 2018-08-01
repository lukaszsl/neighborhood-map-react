import React, { Component } from 'react'
import './App.css'

class Sidebar extends Component {

componentDidMount() {
	document.getElementById('location-list').addEventListener('click', function(event) {
		console.log(event)
	})
}

	render() {
		return (
			<div className='sidebar'>
				<input
					className='sidebar-input'
					role='search'
					type='text'
				/>
				<ul id='location-list' className='sidebar-locations-list'>
					{this.props.places.map((place) => {
						let listItem = <li key={place.name} className='sidebar-places' onClick={this.props.onListItemClick}>{place.name}</li>

						return listItem
					})}
				</ul>
			</div>
		)
	}
}

export default Sidebar
