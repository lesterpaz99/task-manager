import { useState, useEffect } from 'react';

function useLocalStorage(itemName, initialValue) {
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	const [item, setItem] = useState(initialValue);
	const [synchronizedItem, setSynchronizedItem] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			try {
				const localStorageItem = localStorage.getItem(itemName);
				let parsedItem;

				if (!localStorageItem) {
					// localStorage only accepts strings
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					parsedItem = [];
				}

				if (localStorageItem) {
					parsedItem = JSON.parse(localStorageItem);
				}

				setItem(parsedItem);
				setLoading(false);
				setSynchronizedItem(true);
			} catch (err) {
				setError(err);
			}
		}, 2000);
	}, [synchronizedItem]);

	const synchronize = () => {
		setLoading(true);
		setSynchronizedItem(false);
	};

	const saveItem = (newItem) => {
		try {
			const stringifiedItem = JSON.stringify(newItem);
			localStorage.setItem(itemName, stringifiedItem);
			setItem(newItem);
		} catch (err) {
			setError(err);
		}
	};

	return { item, saveItem, loading, error, synchronize };
}

export { useLocalStorage };
