import { shallow } from 'enzyme';
import React from 'react';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('pruebas en <RealExampleRef />', () => {
	test('Debe mostrarse correctamente', () => {
		const wrapper = shallow( <RealExampleRef /> );

		expect( wrapper ).toMatchSnapshot();
		expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(false);
	});

	test('debe de mostrar el componente <MultipleCustomHooks />', () => {
		const wrapper = shallow( <RealExampleRef /> );

		wrapper.find('button').simulate('click');
		
		expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(true);
	});
	
	
});
