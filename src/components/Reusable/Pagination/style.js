import styled from 'styled-components';
import { ReactComponent as Left } from '../../../assets/icons/arrowLeft.svg';

export const Container = styled.div`
	// width:100%;
	height: 40px;
	display: flex;
	gap: 5px;
`;
Container.Flex = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`;

Container.Item = styled.div`
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: ${({ active }) =>
		active ? '1px solid #37a67e' : '1px solid #d9d9d9'};
	background-color: ${({ active }) => (active ? '#37A67E' : '#fff')};
	color: ${({ active }) => (active ? '#fff' : '#000')};
	& svg {
		path {
			fill: #d9d9d9;
		}
	}
	cursor: pointer;
	&:hover {
		border: ${({ active }) => !active && '1px solid #37a67e'};
		color: ${({ disabled, active }) => !disabled && !active && '#37a67e'};
		user-select: none;
		& svg {
			path {
				fill: ${({ disabled }) => !disabled && '#000'};
			}
		}
	}
	transition: all 0.1s;
	cursor: ${({ disabled }) => (!disabled ? 'pointer' : 'not-allowed')};
	border-radius: 50%;
`;

Container.Item1 = styled.div`
	width: 35px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: ${({ disabled }) => (!disabled ? 'pointer' : 'not-allowed')};
`;
export const Icon = styled.div``;

Icon.Right = styled(Left)`
	width: 25px;
	height: 25px;
`;

Icon.Left = styled(Left)`
	transform: rotate(180deg);
	width: 25px;
	height: 25px;
`;
Icon.Left2 = styled(Left)`
	transform: rotate(180deg);
	width: 25px;
	height: 25px;
	path {
		fill: #000;
	}
`;
Container.Icon = styled.div`
	width: 40px;
	height: 100%;
	border: ${({ icon }) => icon && '1px solid #d9d9d9'};
	/* border-radius: ${({ icon }) => icon && '0 6px 6px 0'}; */
	position: absolute;
	right: -1px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.1s;
`;

Container.Select = styled.div`
	width: 90px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border: 2px solid #d9d9d9;
	position: relative;
	user-select: none;
	:hover {
		border-color: #74ade1;
	}
`;

Container.OptionCon = styled.div`
	position: absolute;
	top: 40px;
	width: 90px;
	height: 120px;
	background-color: #fff;
	overflow-y: auto;
	display: ${({ open }) => (open ? 'flex' : 'none')};
	border: 1px solid #d9d9d9;
	flex-direction: column;
	user-select: none;
	transition: all 0.1s;
	:hover {
		border-color: #74ade1;
	}
	&::-webkit-scrollbar {
		background-color: #f5f5f5;
		display: none;
	}

	&::-webkit-scrollbar {
		width: 4px;
		display: none;
		background-color: #f5f5f5;
	}

	&::-webkit-scrollbar-thumb {
		display: none;
		background-color: #555;
	}
`;

Container.Option = styled.div`
	width: 90px;
	min-height: 35px;
	display: flex;
	align-items: center;
	justify-content: center;
	:hover {
		background: rgb(245, 245, 245);
	}
`;
