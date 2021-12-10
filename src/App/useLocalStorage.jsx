import { useEffect, useReducer } from 'react';

function useLocalStorage(itemName, initialValue) {
	const [state, dispatch] = useReducer(reducer, initialState(initialValue));
	const { error, loading, item, synchronizedItem } = state;

	// ACTION CONTROLS
	const onError = (err) => dispatch({ type: actionTypes.ERROR, payload: err });

	const onSuccess = (parsedItem) =>
		dispatch({
			type: actionTypes.SUCCESS,
			payload: parsedItem,
		});

	const onSave = (newItem) =>
		dispatch({
			type: actionTypes.SAVE_ITEM,
			payload: newItem,
		});

	const onSynchronize = () => dispatch({ type: actionTypes.SYNCHRONIZE });

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

				onSuccess(parsedItem);
			} catch (err) {
				onError(err);
			}
		}, 2000);
	}, [synchronizedItem]);

	const synchronize = () => {
		onSynchronize();
	};

	const saveItem = (newItem) => {
		try {
			const stringifiedItem = JSON.stringify(newItem);
			localStorage.setItem(itemName, stringifiedItem);
			onSave(newItem);
		} catch (err) {
			onError(err);
		}
	};

	return { error, loading, item, saveItem, synchronize };
}

const initialState = (initialValue) => ({
	synchronizedItem: true,
	loading: true,
	error: false,
	item: initialValue,
});

const reducer = (state, { type, payload }) => {
	switch (type) {
		case 'ERROR':
			return {
				...state,
				error: true,
			};
		case 'SUCCESS':
			return {
				...state,
				error: false,
				synchronizedItem: true,
				loading: false,
				item: payload,
			};
		case 'SYNCHRONIZE':
			return {
				...state,
				synchronizedItem: false,
				loading: true,
			};
		case 'SAVE_ITEM':
			return {
				...state,
				item: payload,
			};
		default:
			return state;
	}
};

const actionTypes = {
	ERROR: 'ERROR',
	SUCCESS: 'SUCCESS',
	SYNCHRONIZE: 'SYNCHRONIZE',
	SAVE_ITEM: 'SAVE_ITEM',
};

export { useLocalStorage };
