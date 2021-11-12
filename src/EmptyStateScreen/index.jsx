import './_EmptyState.scss';
import emptyStateImgUrl from '../assets/empty_state_screen.svg';
import { IoAddCircleSharp } from 'react-icons/io5';
import { IconContext } from 'react-icons';

function EmptyStateScreen({ searchedValue }) {
	return (
		<section className='screen-container'>
			<div className='state-img-container'>
				<img src={emptyStateImgUrl} alt='empty state' />
			</div>
			<div className='description-state-container'>
				<h2>Oh, you've got nothing</h2>
				{searchedValue && <p>No results for {searchedValue}</p>}
				<IconContext.Provider value={{ className: 'create-todo-icon' }}>
					<p>
						Use <IoAddCircleSharp /> button to add new tasks
					</p>
				</IconContext.Provider>
			</div>
		</section>
	);
}

export { EmptyStateScreen };
