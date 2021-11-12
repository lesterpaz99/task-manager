import { useState } from 'react';

function useStorageListener() {
	const [storageChange, setStorageChange] = useState(false);

	window.addEventListener('storage', (event) => {
		if (event.key === 'TODOS_V1') {
			setStorageChange(true);
		}
	});
	return { show: storageChange, setStorageChange };
}

export { useStorageListener };
