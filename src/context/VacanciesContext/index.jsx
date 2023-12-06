import React, { createContext, useContext, useReducer } from 'react';
import { reducer } from './reducer';
import { initialState } from './reducer';

export const Vacancies = createContext();

export const useVacanciesContext = () => useContext(Vacancies);

export const VacanciesProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<Vacancies.Provider value={[state, dispatch]}>
			{children}
		</Vacancies.Provider>
	);
};
