const initialState = [{
	id: 1,
	todo: 'Comprar pan',
	done: false,
}];

// El reducer lleva siempre como parámetros el state (con valor por default) y una acción (es quién modificara el state, no puede ser asincrona, no puede dispara efectos secundarios, tiene que resolverse lo que sea que le pidas con su state y la acción y siempre debe retornar un nuevo estado).
const todoReducer = ( state = initialState, action ) => {

	// Se define la lógica según el tipo de acción (nunca usar un push)
	if ( action?.type === 'agregar' ) {
		return [ ...state, action.payload ];
	}


	// Siempre se tiene que regresar un state
	return state;
}

// Guardo el estado del todoreducer en una variable
let todos = todoReducer();

// defino una nueva constante con un nnuevo elemento que será agregado al reducer
const newTodo = {
	id: 2,
	todo: 'Comprar leche',
	done: false,
};

// Defino una constante con la acción a realizar, se registra tipo de acción y el payload (lo que se agrega, elimina, actualiza, etc)
const agregarTodoAction = {
	type: 'agregar',
	payload: newTodo, //payload es como un estándar
};

// Mando llamar de nuevo todoReducer, pasandole como parámetros el estado actual y la acción a realizar que cree definí antes
todos = todoReducer( todos, agregarTodoAction );



console.log(todos);