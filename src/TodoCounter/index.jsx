import './_TodoCounter.scss';
import { IconContext } from 'react-icons';
import { FaHandSparkles } from 'react-icons/fa';

function TodoCounter({ totalTodos, completedTodos, loading }) {
	return (
		<div className='counter-container'>
			<IconContext.Provider value={{ className: 'sayhi-icon' }}>
				<h1 className='counter__title'>
					What's up! <FaHandSparkles />
				</h1>
			</IconContext.Provider>
			<h2 className={`todocounter ${loading && 'todocounter--loading'}`}>
				Completed: {completedTodos} / {totalTodos}
			</h2>
		</div>
	);
}

export { TodoCounter };
