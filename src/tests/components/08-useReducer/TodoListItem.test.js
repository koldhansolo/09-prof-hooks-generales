import { shallow } from "enzyme";
import React from 'react';
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en <TodoListItem />', () => {
	const handleToggle = jest.fn();
	const handleDelete = jest.fn();

	const wrapper = shallow(
		<TodoListItem 
			todo={ demoTodos[0] }
			i={ 0 }
			handleToggle={ handleToggle }
			handleDelete={ handleDelete }
		/>
	);
	test('debe de mostrarse correctamente', () => {
		expect( wrapper ).toMatchSnapshot();
	});

	test('debe de llamar la función handleDelete', () => {
		// jest.fn()
		// toHaveBeenCalled
		// toHaveBeenCalledWith
		wrapper.find( 'button' ).simulate('click');
		expect( handleDelete ).toHaveBeenCalledWith( 1 );
	});

	test('debe de llamar la función handleToggle', () => {
		// jest.fn()
		// toHaveBeenCalledWith
		wrapper.find( 'p' ).simulate('click');
		expect( handleToggle ).toHaveBeenCalledWith( 1 );
	});

	test('debe de mostrar el texto correctamente', () => {
		// contenido del párrafo
		const p = wrapper.find('p');
		expect( p.text().trim() ).toBe( `1. ${ demoTodos[0].desc }` );
	});

	test('debe de tener la clase complete si el todo.done = true', () => {
		const todo = demoTodos[0];
		todo.done = true;
		const wrapper = shallow(
			<TodoListItem 
				todo={ demoTodos[0] }
			/>
		);

		expect( wrapper.find( 'p' ).hasClass( 'complete' ) ).toBe( true );
	});
	
	
	
	
	
})
