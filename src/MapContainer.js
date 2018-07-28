import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import './App.css'

export class MapContainer extends Component {
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
					onClick={this.props.onMapClicked}
					>
						{this.props.places.map((place) => (
							<Marker
								key={place.name}
								title={place.title}
								name={place.name}
								position={place.position}
								address={place.address}
								onClick={this.props.onMarkerClick} />
						))}
						<InfoWindow
							marker={this.props.activeMarker}
							visible={this.props.showingInfoWindow}>
								<div className='info-window'>
									<h1>{this.props.selectedPlace.name}</h1>
									<p>{this.props.selectedPlace.address}</p>
								</div>
						</InfoWindow>
				</Map>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBBr0wyroa-2vbN5Xrm3wicZ0HO5aMIdfY'
})(MapContainer)
