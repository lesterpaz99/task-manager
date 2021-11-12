import './_TodoList.scss';

function TodoList({
	error,
	loading,
	filteredTodos,
	onError,
	onLoading,
	onEmptyTodos,
	children,
}) {
	return (
		<section>
			<h3 className='list-title'>Today's Tasks</h3>
			{error && onError()}
			{loading && onLoading()}
			{!loading && !filteredTodos.length && onEmptyTodos()}
			<ul className='todolist'>{children}</ul>
		</section>
	);
}

export { TodoList };
