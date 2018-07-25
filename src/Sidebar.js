import React, { Component } from 'react'
import './App.css'

class Sidebar extends Component {
	render() {
		return (
			<div className='sidebar'>
				<input
					className='sidebar-input'
					role='search'
					type='text'
				/>
				<div className='sidebar-locations-list'></div>
			</div>
		)
	}
}

export default Sidebar
