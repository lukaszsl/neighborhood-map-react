import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


const style = {
	width: '100%',
	height: '100%'
}


export class MapContainer extends Component {
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
					<Marker
				    title={'The marker`s title will appear as a tooltip.'}
				    name={'Harpa'}
				    position={{lat: 64.150672, lng: -21.932942}} />
				  <Marker
				    name={'Hallgrímskirkja'}
				    position={{lat: 64.142232, lng: -21.926547}} />
				  <Marker
				    name={'Ráðhús'}
				    position={{lat: 64.146630, lng: -21.942340}} />
				  <Marker
				    name={'Þjóðminjasafnið'}
				    position={{lat: 64.142194, lng: -21.948606}} />
				  <Marker
				    name={'Saga Museum'}
				    position={{lat: 64.153450, lng: -21.951524}} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBBr0wyroa-2vbN5Xrm3wicZ0HO5aMIdfY'
})(MapContainer)
