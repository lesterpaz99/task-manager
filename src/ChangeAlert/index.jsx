import { useStorageListener } from './useStorageListener';

function ChangeAlert({ synchronize }) {
	const { show, setStorageChange } = useStorageListener();

	const toggleShow = () => {
		setStorageChange(false);
		synchronize();
	};

	if (show) {
		return (
			<>
				<p>There has been changes</p>
				<button onClick={() => toggleShow()}>Refresh data</button>
			</>
		);
	}
	return null;
}

export { ChangeAlert };
