import React, { Component } from 'react'
import MapContainer from './MapContainer.js'
import Sidebar from './Sidebar'
import './App.css'

class App extends Component {

state = {
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My places</h1>
        </header>
				<div className="main-content">
					<Sidebar places={this.state.places}/>
					<div className="map-container">
						<MapContainer places={this.state.places}/>
					</div>
				</div>
      </div>
    );
  }
}

export default App
