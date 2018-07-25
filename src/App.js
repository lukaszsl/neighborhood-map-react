import React, { Component } from 'react'
import MapContainer from './MapContainer.js'
import Sidebar from './Sidebar'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My places</h1>
        </header>
				<div className="main-content">
					<Sidebar />
					<div className="map-container">
						<MapContainer />
					</div>
				</div>
      </div>
    );
  }
}

export default App
