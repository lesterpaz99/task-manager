import React from 'react';
import ContentLoader from 'react-content-loader';

function TodoLoader() {
	return (
		<ContentLoader
			speed={2}
			width={'100%'}
			height={228}
			backgroundColor='#4760a9'
			foregroundColor='lightblue'
		>
			<rect x='0' y='0' rx='12' ry='12' width='100%' height='62' />
			<rect x='0' y='76' rx='12' ry='12' width='100%' height='62' />
			<rect x='0' y='152' rx='12' ry='12' width='100%' height='62' />
		</ContentLoader>
	);
}

export { TodoLoader };
