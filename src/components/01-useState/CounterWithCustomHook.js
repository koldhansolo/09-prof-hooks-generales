import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {

	const { state, increment, reset, decrement } = useCounter( 100 );

	return (
		<>
			<h1>Counter with Hook: { state }</h1>
			<hr />

			<button onClick={ () => increment(10) } className="btn btn-primary">+1</button>
			<button onClick={ reset } className="btn btn-warning">Reset</button>
			<button onClick={ () => decrement(10) } className="btn btn-danger ml-2">+1</button>
		</>
	)
}
