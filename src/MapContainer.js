import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import './App.css'

export class MapContainer extends Component {

	state = {
		showingInfoWindow: false,
		activeMarker: {},
		selectedPlace: {},
		places: this.props.places
	}

	onMarkerClick = (props, marker, e) =>
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		})

	onMapClicked = (props) => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			})
		}
	}

	render() {
		return (
				<Map
					google={this.props.google}
					zoom={14}
					style={{
						width: '100%',
						height: '100%'
					}}
					initialCenter={{
						lat: 64.144740,
						lng: -21.941762
					}}
					onClick={this.onMapClicked}
					>
						{this.state.places.map((place) => (
							<Marker
								key={place.name}
								title={place.title}
								name={place.name}
								position={place.position}
								address={place.address}
								onClick={this.onMarkerClick} />
						))}
						<InfoWindow
							marker={this.state.activeMarker}
							visible={this.state.showingInfoWindow}>
								<div className='info-window'>
									<h1>{this.state.selectedPlace.name}</h1>
									<p>{this.state.selectedPlace.address}</p>
								</div>
						</InfoWindow>
				</Map>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBBr0wyroa-2vbN5Xrm3wicZ0HO5aMIdfY'
})(MapContainer)
