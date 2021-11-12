import './_TodoItem.scss';
import { GoCheck } from 'react-icons/go';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { IconContext } from 'react-icons';

function TodoItem({ todos, saveTodos, description, completed }) {
	const thisIndex = todos.findIndex((todo) => todo.description === description);

	const onComplete = () => {
		const newTodo = todos[thisIndex];
		newTodo.completed = !newTodo.completed;
		todos.splice(thisIndex, 1, newTodo);
		saveTodos([...todos]);
	};

	const onDelete = () => {
		todos.splice(thisIndex, 1);
		saveTodos([...todos]);
	};

	return (
		<li className='todo-item'>
			<div className='check-container'>
				<input className='check-input' type='checkbox' onClick={onComplete} />
				<label className={completed ? 'completed' : undefined}>
					{completed && <GoCheck color='#fff' />}
				</label>
			</div>
			<p className={completed ? 'task-done' : undefined}>{description}</p>
			<IconContext.Provider value={{ className: 'remove-icon' }}>
				<button className='delete-todo' title='delete' onClick={onDelete}>
					<RiDeleteBin5Fill />
				</button>
			</IconContext.Provider>
		</li>
	);
}

export { TodoItem };
