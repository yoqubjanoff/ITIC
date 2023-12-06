import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './ToastStyle';
import { ToastContainer } from 'react-toastify';

export default function ToastProvider({ children }) {
	return (
		<Container>
			{children}
			<ToastContainer style={{ minWidth: '350px', maxWidth: '450px' }} />
		</Container>
	);
}
