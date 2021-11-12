import './_CreateTodoButton.scss';

function CreateTodoButton({ setOpenModal }) {
	const openModal = () => {
		setOpenModal((prevState) => !prevState);
	};

	return (
		<button className='create-todo' onClick={openModal}>
			+
		</button>
	);
}

export { CreateTodoButton };
