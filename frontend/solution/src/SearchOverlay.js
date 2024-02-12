import React from 'react';
import './App.css';

const SearchOverlay = ({ toggle }) => {
	return (
		<div style={{
			position: 'fixed',
			zIndex: '3',
			backgroundColor: 'white',
			border: '5px solid black',
			width: '50vw',
			height: '50vh',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			display: 'flex',
			flexDirection: 'column',
			fontSize: '2em',
		}}>
			<div style={{ border: '2px solid red', width: '5%', display: 'flex', justifyContent: 'center' }} 
				onClick={toggle} className="close-btn"
			>
				✖
			</div>
			<p style={{ alignSelf: 'center', marginTop: '15%' }}>hello world</p>
		</div>
	);
}

export default SearchOverlay;