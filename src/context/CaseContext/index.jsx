import React, { createContext, useContext, useReducer } from 'react';
import { reducer } from './reducer';
import { initialState } from './reducer';

export const CaseContext = createContext();

export const useCaseContext = () => useContext(CaseContext);

export const CaseContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<CaseContext.Provider value={[state, dispatch]}>
			{children}
		</CaseContext.Provider>
	);
};
