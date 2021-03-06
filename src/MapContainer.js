import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import './App.css'

export class MapContainer extends Component {

	state = {
		showingInfoWindow: false,
		activeMarker: {},
		selectedPlace: {},
		places: [
			{
				title: 'Harpa - A powerful concert hall and conference centre',
				name: 'Harpa',
				position: {lat: 64.150672, lng: -21.932942},
				address: 'Austurbakki 2, 101 Reykjavík'
			},
			{
				title: 'Hallgrímskirkja - The church is both a parish church and a national sanctuary in Iceland',
				name: 'Hallgrímskirkja',
				position: {lat: 64.142232, lng: -21.926547},
				address: 'Hallgrímstorg 101, 101 Reykjavík'
			},
			{
				title: 'Ráðhús - The city hall of Reykjavik',
				name: 'Ráðhús',
				position: {lat: 64.146630, lng: -21.942340},
				address: 'Tjarnargata 11, 101 Reykjavík'
			},
			{
				title: 'Þjóðminjasafnið - The National Museum of Iceland',
				name: 'Þjóðminjasafnið',
				position: {lat: 64.142194, lng: -21.948606},
				address: 'Suðurgata 41, 101 Reykjavík'
			},
			{
				title: 'Saga Museum - The History Museum with waxwork exhibits',
				name: 'Saga Museum',
				position: {lat: 64.153450, lng: -21.951524},
				address: 'Grandagarður 2, 101 Reykjavík'
			}
		]
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
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBBr0wyroa-2vbN5Xrm3wicZ0HO5aMIdfY'
})(MapContainer)
