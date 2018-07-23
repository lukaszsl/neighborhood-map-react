import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


const style = {
	width: '100%',
	height: '100%'
}


export class MapContainer extends Component {

	state = {
		places: [
			{
				title: 'Harpa - A powerful concert hall and conference centre',
				name: 'Harpa',
				position: {lat: 64.150672, lng: -21.932942}
			},
			{
				title: 'Hallgrímskirkja - The church is both a parish church and a national sanctuary in Iceland',
				name: 'Hallgrímskirkja',
				position: {lat: 64.142232, lng: -21.926547}
			},
			{
				title: 'Ráðhús - The city hall of Reykjavik',
				name: 'Ráðhús',
				position: {lat: 64.146630, lng: -21.942340}
			},
			{
				title: 'Þjóðminjasafnið - The National Museum of Iceland',
				name: 'Þjóðminjasafnið',
				position: {lat: 64.142194, lng: -21.948606}
			},
			{
				title: 'Saga Museum - The History Museum with waxwork exhibits',
				name: 'Saga Museum',
				position: {lat: 64.153450, lng: -21.951524}
			}
		]
	}

  render() {
    return (
      <Map
				google={this.props.google}
				zoom={14}
				style={style}
				initialCenter={{
					lat: 64.144740,
					lng: -21.941762
				}}
				>
					{this.state.places.map((place) => (
						<Marker
							key={place.name}
					    title={place.title}
					    name={place.name}
					    position={place.position} />
					))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBBr0wyroa-2vbN5Xrm3wicZ0HO5aMIdfY'
})(MapContainer)
