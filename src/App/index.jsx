import './_App.scss';
import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoLoader } from '../TodoLoader';
import { ErrorStateScreen } from '../ErrorStateScreen';
import { EmptyStateScreen } from '../EmptyStateScreen';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { ChangeAlert } from '../ChangeAlert';

function App() {
	const {
		error,
		loading,
		filteredTodos,
		todos,
		saveTodos,
		openModal,
		setOpenModal,
		totalTodos,
		completedTodos,
		searchTodo,
		setSearchTodo,
		synchronizeTodos,
	} = useTodos();

	return (
		<>
			<TodoHeader loading={loading}>
				<TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
				<TodoSearch searchTodo={searchTodo} setSearchTodo={setSearchTodo} />
			</TodoHeader>

			<TodoList
				error={error}
				loading={loading}
				filteredTodos={filteredTodos}
				onError={() => <ErrorStateScreen />}
				onLoading={() => <TodoLoader />}
				onEmptyTodos={() => <EmptyStateScreen searchedValue={searchTodo} />}
			>
				{!loading &&
					filteredTodos.map((todo) => (
						<TodoItem
							key={todo.description}
							description={todo.description}
							completed={todo.completed}
							todos={todos}
							saveTodos={saveTodos}
						/>
					))}
			</TodoList>
			{openModal && (
				<Modal>
					<TodoForm
						setOpenModal={setOpenModal}
						todos={todos}
						saveTodos={saveTodos}
						totalTodos={totalTodos}
					/>
				</Modal>
			)}
			<CreateTodoButton setOpenModal={setOpenModal} />
			<ChangeAlert synchronize={synchronizeTodos} />
		</>
	);
}

export default App;
