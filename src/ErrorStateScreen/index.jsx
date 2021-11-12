import errorState from '../assets/error_state_page.svg';

function ErrorStateScreen() {
	return (
		<section className='screen-container'>
			<div className='state-img-container'>
				<img src={errorState} alt='error state' />
			</div>
			<div className='description-state-container'>
				<h2>We're sorry...</h2>
				<p>An error occurred while loading your TODOs.</p>
			</div>
		</section>
	);
}

export { ErrorStateScreen };
