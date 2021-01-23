import React from 'react';
import PropTypes from 'prop-types';

export const ShowIncrement = React.memo(( { increment } ) => {

	console.log('me volvi a generar');

	return (
		<button
			className="bnt btn-primary"
			onClick={ () => {
				increment( 5000000000 );
			}}
		>
			Incrementar
		</button>
	)
})

ShowIncrement.propTypes = {
	increment: PropTypes.func.isRequired,
} 
