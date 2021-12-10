import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

function useTodos() {
	const {
		item: todos,
		saveItem: saveTodos,
		loading,
		error,
		synchronize,
	} = useLocalStorage('TODOS_V1', []);

	const [searchTodo, setSearchTodo] = useState('');
	const [openModal, setOpenModal] = useState(false);

	const completedTodos = todos.filter((todo) => todo.completed).length;
	const totalTodos = todos.length;

	const filteredTodos = todos.filter((todo) => {
		const description = todo.description.toLowerCase();
		let searchValue = searchTodo.toLowerCase();
		return description.includes(searchValue);
	});

	return {
		loading,
		error,
		todos,
		searchTodo,
		setSearchTodo,
		totalTodos,
		completedTodos,
		filteredTodos,
		openModal,
		setOpenModal,
		synchronizeTodos: synchronize,
		saveTodos,
	};
}

export { useTodos };
