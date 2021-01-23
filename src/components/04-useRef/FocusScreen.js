import React, { useRef } from 'react';
import './style.css';

export const FocusScreen = () => {
	const inputRef = useRef();
	
	const handleClick = () => {
		// document.querySelector('input').select();
		inputRef.current.select();
	}
	return (
		<div>
			<h1>Focus screen</h1>
			<hr />

			<input
				ref={ inputRef }
				className="form-control"
				placeholder="Su nombre"
			></input>

			<button 
				className="bnt btn-outline-primary mt-5"
				onClick={ handleClick }
			>
				Focus
			</button>
		</div>
	)
}
