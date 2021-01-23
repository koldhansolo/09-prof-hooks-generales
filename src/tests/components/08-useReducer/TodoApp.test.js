import { act } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en <TodoApp />', () => {

	const wrapper = shallow( <TodoApp />);

	Storage.prototype.setItem = jest.fn(() => {});


	test('debe de mostrarse correctamente', () => {
		expect( wrapper ).toMatchSnapshot();
	});
	
	test('debe de agregar un todo', () => {
		// El shallow es más general, el mount es mas especifico en caso de que se quiera más información de sus hijos y del contexto en el cual está corriendo
		const wrapper = mount( <TodoApp /> );

		act( () => {
			wrapper.find('TodoAdd').prop( 'handleAddTodo' )( demoTodos[0] );
			wrapper.find('TodoAdd').prop( 'handleAddTodo' )( demoTodos[1] );
		});

		expect( wrapper.find('h1').text().trim() ).toBe( 'TodoApp (2)');

		expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
		
	});

	test('debe de eliminar un todo', () => {
		wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
		wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id );

		expect( wrapper.find('h1').text().trim() ).toBe( 'TodoApp (0)');
	});
	
	
});
