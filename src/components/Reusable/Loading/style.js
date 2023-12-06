import styled from 'styled-components';

export const Wrapper = styled.div`
	position: fixed;
	height: inherit;
	width: inherit;
	transition: background-color 300ms ease-in-out;
	z-index: 9;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
`;

Wrapper.Box = styled.div`
	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	width: 100px;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	animation: rotate 1s linear infinite;
`;
