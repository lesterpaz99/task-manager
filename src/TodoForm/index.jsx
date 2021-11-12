import './_TodoForm.scss';
import { useState, useEffect } from 'react';

function TodoForm({ setOpenModal, todos, saveTodos, totalTodos }) {
	const [inputValue, setInputValue] = useState('');
	const [newTodoState, setNewTodoState] = useState('');

	const onInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const onCancel = () => {
		setOpenModal((prevState) => !prevState);
	};

	const onSubmit = (event) => {
		event.preventDefault();

		if (inputValue.length < 3) {
			setNewTodoState('Please enter at least 3 characters to save...');
			return;
		}

		const found = todos.find((todo) => {
			const text = todo.description.toLowerCase();
			return text === inputValue.toLowerCase();
		});

		if (found) {
			setNewTodoState('Todo already exists');
			return;
		}

		const newTodo = {
			description: inputValue,
			completed: false,
		};

		if (!found || !totalTodos) {
			todos.push(newTodo);
			saveTodos([...todos]);
			setOpenModal((prevState) => !prevState);
		}
	};

	useEffect(() => {
		let subscription = setTimeout(() => {
			setNewTodoState('');
		}, 3000);

		// cleanup function
		return () => clearTimeout(subscription);
	}, [newTodoState]);

	return (
		<div className='modal-container'>
			<form className='form' action='#' onSubmit={onSubmit}>
				<label htmlFor='todoInput'></label>
				<span className='state-error'>{newTodoState}</span>
				<textarea
					name='todo'
					id='todoInput'
					cols='30'
					rows='6'
					placeholder='Add a new task'
					onChange={onInputChange}
				></textarea>
				<div className='button-container'>
					<button className='secondary-btn' type='button' onClick={onCancel}>
						Cancel
					</button>
					<button className='primary-btn' type='submit'>
						Save
					</button>
				</div>
			</form>
		</div>
	);
}

export { TodoForm };
