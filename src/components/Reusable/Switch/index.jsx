import React, { useState, useEffect } from 'react';
import { Container } from './style';

const Switch = ({
	disabled,
	onClick,
	size,
	unCheckedChildren,
	checkedChildren,
	checked,
}) => {
	const [check, setCheck] = useState(checked || false);
	const [active, setActive] = useState(false);
	useEffect(() => setCheck(checked), [checked]);
	const onClick1 = () => {
		if (!disabled) {
			onClick && onClick(!check);
			setCheck(!check);
			setActive(true);
			setTimeout(() => {
				setActive(false);
			}, 500);
		}
	};
	return (
		<Container
			onClick={onClick1}
			checked={check}
			active={active}
			disabled={disabled}
			size={size}
		>
			{checkedChildren && (
				<Container.Checked checked={check}>{checkedChildren}</Container.Checked>
			)}

			{unCheckedChildren && (
				<Container.UnChecked checked={check}>
					{unCheckedChildren}
				</Container.UnChecked>
			)}
			<Container.Check checked={check} size={size} />
			<Container.Checkbox checked={check} />
		</Container>
	);
};

export default Switch;
