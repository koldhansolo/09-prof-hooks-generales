import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Prueba en useForm', () => {
	const initialForm = {
		name: 'daniel',
		email: 'daniel@mail.com',
	};

	test('debe de regresar un formulario por defecto ', () => {
		const { result } = renderHook( () => useForm( initialForm ) );

		const [ values, handleInputChange, reset ] = result.current;

		// Probar los valores por defecto que retorna
		expect( values ).toEqual( initialForm );
		expect( typeof handleInputChange ).toBe( 'function' );
		expect( typeof reset ).toBe( 'function' );
	});

	test('debe de cambiar el valor del formulario (cambiar name)', () => {
		const { result } = renderHook( () => useForm( initialForm ) );
		const [ , handleInputChange, ] = result.current;

		act( () => {
			handleInputChange( { 
				target: {
					name: 'name',
					value: 'Auronplay',
				}
			});
		} );

		const [ values ] = result.current;
		expect( values ).toEqual( { 
			...initialForm,
			name: 'Auronplay',
		} );
	});

	test('debe de reestablecer el formulario con reset', () => {
		const { result } = renderHook( () => useForm( initialForm ) );
		const [ , handleInputChange, reset ] = result.current;

		act( () => {
			handleInputChange( { 
				target: {
					name: 'name',
					value: 'Auronplay',
				}
			 });

			 reset();
		} );

		const [ values ] = result.current;
		expect( values ).toEqual( initialForm );
	});
	


	
	
})
