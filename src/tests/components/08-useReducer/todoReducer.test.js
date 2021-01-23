import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";


describe('Pruebas en todoReducer', () => {
	test('debe de retornar el estado por defecto', () => {
		const state = todoReducer( demoTodos, {});

		expect( state ).toEqual( demoTodos );
	});

	test('debe de agregar un todo', () => {
		const newTodo = {
			id: 3,
			desc: 'Aprender Express',
			done: false,
		};
		const action = {
			type: 'add',
			payload: newTodo,
		};
		
		const state = todoReducer( demoTodos, action);

		expect( state.length ).toBe( 3 );
		expect( state ).toEqual( [ ...demoTodos, newTodo ] );
	});

	test('debe de eliminar un todo', () => {
		const id = 1;

		const action = {
			type: 'delete',
			payload: 1,
		};
		
		const state = todoReducer( demoTodos, action);

		expect( state.length ).toBe( 1 );
		expect( state ).toEqual( demoTodos.filter((todo) => todo.id !== id && todo) );
	});

	test('debe de cambiar el done', () => {
		const id = 1;

		const action = {
			type: 'toggle',
			payload: 1,
		};
		
		const state = todoReducer( demoTodos, action);

		expect( state.length ).toBe( 2 );
		expect( state ).toEqual( demoTodos.map((todo) => todo.id === id ? { ...todo, done: !todo.done } : todo ) );
	});
	
});