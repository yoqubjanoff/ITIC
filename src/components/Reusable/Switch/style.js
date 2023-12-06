import styled from 'styled-components';

export const Container = styled.div`
	width: ${({ size }) => (size === 'small' ? '32px' : '44px')};
	height: ${({ size }) => (size === 'small' ? '16px' : '22px')};
	position: relative;
	display: flex;
	align-items: center;
	background-color: ${({ checked }) => (checked ? '#37A67E' : '#bfbfbf')};
	border-radius: 20px;
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
	transition: all 0.3s;
	@keyframes pulse {
		0% {
			box-shadow: 0px 0px 0px 5px rgba(24, 147, 255, 0.1);
		}
		100% {
			box-shadow: 0px 0px 0px 2px rgba(24, 147, 255, 0.1);
		}
	}

	animation: ${({ active, disabled }) => !disabled && active && 'pulse 0.7s '};
	opacity: ${({ disabled }) => disabled && '0.5'};
	-webkit-user-select: none; /* Safari */
	-ms-user-select: none; /* IE 10 and IE 11 */
	user-select: none; /* Standard syntax */
`;

Container.Check = styled.div`
	position: absolute;
	left: ${({ checked, size }) =>
		checked && size ? '18px' : checked ? '24px' : '2px'};
	transition: all 0.3s;
	width: ${({ size }) => (size === 'small' ? '12px' : '18px')};
	height: ${({ size }) => (size === 'small' ? '12px' : '18px')};
	border-radius: 50%;
	background-color: #fff;
`;

Container.Checkbox = styled.input.attrs({ type: 'checkbox' })`
	display: none;
	position: absolute;
	top: 0;
	left: 0;
`;
Container.UnChecked = styled.div`
	position: absolute;
	left: ${({ checked }) => (checked ? '50px' : '25px')};
	transition: all 0.3s;
	font-size: 12px;
	top: 2px;
	color: #fff;
	z-index: ${({ checked }) => checked && '-990'};
`;
Container.Checked = styled.div`
	position: absolute;
	left: ${({ checked }) => (checked ? '4px' : '-25px')};
	transition: all 0.3s;
	top: 2px;
	font-size: 12px;
	color: #fff;
	z-index: ${({ checked }) => !checked && '-990'};
`;
