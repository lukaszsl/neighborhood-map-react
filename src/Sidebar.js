import React, { Component } from 'react'
import './App.css'

class Sidebar extends Component {

componentDidMount() {
	let places = this.props.places
	document.getElementById('location-list').addEventListener('click', function(event) {
		console.log(event)
			// places.map(place => {
			// 	if (place.name.toLowerCase() === event.target.innerText.toLowerCase()) {
			// 		this.setState({showingInfoWindow: true})
			// 	}
			// })


	})
}

// onClickListItem (props, marker) {
// 	this.setState({
// 		activeMarker: marker,
// 		selectedPlace: props
// 	})
// }

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
						let listItem = <li key={place.name} className='sidebar-places' onClick={this.props.onMarkerClick}>{place.name}</li>

						return listItem
					})}
				</ul>
			</div>
		)
	}
}

export default Sidebar
