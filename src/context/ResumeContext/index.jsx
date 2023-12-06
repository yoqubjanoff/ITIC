import React, { createContext, useContext, useReducer } from 'react';
import { reducer } from './reducer';
import { initialState } from './reducer';

export const Resume = createContext();

export const useResumeContext = () => useContext(Resume);

export const ResumeProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<Resume.Provider value={[state, dispatch]}>
			{children}
		</Resume.Provider>
	);
};
