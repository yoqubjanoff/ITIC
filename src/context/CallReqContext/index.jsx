import React, { createContext, useContext, useReducer } from 'react';
import { reducer } from './reducer';
import { initialState } from './reducer';

export const CallRequest = createContext();

export const useCallReqContext = () => useContext(CallRequest);

export const CallRequestProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<CallRequest.Provider value={[state, dispatch]}>
			{children}
		</CallRequest.Provider>
	);
};
