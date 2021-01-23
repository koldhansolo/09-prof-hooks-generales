import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

	// Defino el custom hook que me permitirá manejar los eventos value y onchange del formulario
	const [ { description }, handleInputChange, reset ] = useForm({
		description: '',
	});

	const handleSubmit = (e) => {
		// Evito que se haga el submit
		e.preventDefault();

		// Si el input description tiene una longitud menor a dos entonces no hace nada
		if ( description.trim().length < 2 ) {
			return;
		}

		// Defino una constante con la nueva tarea a agregar
		const newTodo = {
			id: new Date().getTime(),
			desc: description,
			done: false,
		};

		// Disparo el evento y le mando la acción a realizar
		handleAddTodo( newTodo );

		// Mando llamar el método reset, el cual e sun evento que viene en el hook useForm y que se encarga de regresar el useForm a su initialState, lo cual en pocas palabras resetea el formulario
		reset();
	}
	

	return (
		<>
			<h4>Agregar TODO</h4>
			<hr />

			<form onSubmit={ handleSubmit }>
				<input
					type="text"
					name="description"
					className="form-control"
					placeholder="Aprender..."
					autoComplete="off"
					onChange={ handleInputChange }
					value={ description }
				/>
				<button
					type="submit"
					className="btn btn-outline-primary mt-1 btn-block"
				>Agregar</button>
			</form>
		</>
	)
}
