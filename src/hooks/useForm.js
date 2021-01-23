/*
Este hook sirve para manejar los eventos de un formulario con inputs de texto, recordar que para todo formulario es necesario manejar el value y el evento onchange para guardarlo en un estado por medio de useState

Ejemplo de uso:

import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

	const [formValues, handleInputChange] = useForm({
		name: '',
		email: '',
		password: '',
	});

	const { name, email, password } = formValues;

	useEffect(() => {
		console.log('email cambió')
	}, [email]);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log( formValues );
	} 

	return (
		<form onSubmit={handleSubmit}>
			<h1>FormWithCustomHook</h1>
			<hr />

			<div className="form-group">
				<input 
					type="text"
					name="name"
					className="form-control"
					placeholder="Tu nombre"
					autoComplete="off"
					value={ name }
					onChange={ handleInputChange }
				/>
			</div>

			<div className="form-group">
				<input 
					type="text"
					name="email"
					className="form-control"
					placeholder="email@gmail.com"
					autoComplete="off"
					value={ email }
					onChange={ handleInputChange }
				/>
			</div>

			<div className="form-group">
				<input 
					type="password"
					name="password"
					className="form-control"
					placeholder="***"
					autoComplete="off"
					value={ password }
					onChange={ handleInputChange }
				/>
			</div>

			<button type="submit" className="btn btn-primary">Guardar</button>

		</form>
	)
}


*/

import { useState } from "react";

// El custom hook recibe un objeto con las propiedades que serán los campos de texto del form
export const useForm = ( initialState = {} ) => {
	const [values, setValues] = useState( initialState );

	const reset = () => {
		setValues( initialState );
	}

	const handleInputChange = ({ target }) => {
		setValues({
			...values,
			[ target.name ]: target.value,
		})
	}

	// Retorna el valor del input y el evento para cambiar el valor del input
	return [ values, handleInputChange, reset ];
}
