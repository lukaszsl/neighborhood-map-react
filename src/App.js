import React, { Component } from 'react'
import MapContainer from './MapContainer.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My places</h1>
        </header>
				<MapContainer />
      </div>
    );
  }
}

export default App
