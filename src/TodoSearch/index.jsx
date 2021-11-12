import './_TodoSearch.scss';

function TodoSearch({ searchTodo, setSearchTodo, loading }) {
	const onSearch = (e) => {
		setSearchTodo(e.target.value);
	};

	return (
		<form>
			<label htmlFor='task'></label>
			<input
				placeholder='Filter a task'
				value={searchTodo}
				id='task'
				onInput={onSearch}
				disabled={loading}
			/>
		</form>
	);
}

export { TodoSearch };
