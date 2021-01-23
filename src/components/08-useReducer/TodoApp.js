import React, { useEffect, useReducer } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

// En el useReducer podemos mandarle una funcion init la cual le va ayudar a react a computar todo el estado inicial para que funcione más rápido el componente y no se este ejecutando y ejecutando cada que haya cambios, es una función común y corriente. Al inicio, la función init se llama y retorna, haciendo lo que hacia el initialState. En este caso retorna lo que haya en el localstorage y si hay un null entonces retorna un arreglo vacío
const init = () => {

	return JSON.parse( localStorage.getItem( 'todos' ) ) || [];
};


export const TodoApp = () => {

	// Defino el useReducer que recibirá el estado en una variable llamda todos, y también recibirá un evento llamado dispatch el cual servirá para disparar acciones, para ello le asocio una funcion reducer llamada todoReducer la cual se encuentra en otro archivo y también asocio un estado inicial llamado initialState que es un arreglo vacío porque init se encarga de retornarlo
	const [ todos, dispatch ] = useReducer( todoReducer, [], init );

	// El useEffect se encarga de volver a guardar en el localStorage cada vez que todos cambia
	useEffect(() => {
		localStorage.setItem( 'todos', JSON.stringify( todos ) );
	}, [todos]);
	
	const handleDelete = ( todoId ) => {

		const action = {
			type: 'delete',
			payload: todoId,
		}
		
		dispatch( action );
	}

	const handleToggle = ( todoId ) => {
		dispatch( {
			type: 'toggle',
			payload: todoId,
		} );
	}

	const handleAddTodo = ( newTodo ) => {
		dispatch({
			type: 'add',
			payload: newTodo,
		})
	}


	return (
		<div>
			<h1>TodoApp ({ todos.length })</h1>
			<hr />
			<div className="row">
				<div className="col-7">
					<TodoList 
						todos={ todos }
						handleDelete={ handleDelete }
						handleToggle={ handleToggle }
					/>
				</div>

				<div className="col-5">
					<TodoAdd 
						handleAddTodo={ handleAddTodo }
					/>
				</div>
			</div>
		</div>
	)
}
