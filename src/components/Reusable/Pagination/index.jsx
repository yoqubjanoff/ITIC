import React, { useState } from 'react';
import { Container, Icon } from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import { Replace } from '../../../services/Replace';
import { ArrowLeftIcon } from '../GenericIcons/genericIcons';
const Pagination = ({ margin, current, SizeAll }) => {
	const [current2, setCurrent2] = useState(current || 0);

	const { pathname } = useLocation();
	const navigate = useNavigate();
	// const onClick2 = () => {
	//   onClick && onClick();
	// };

	const clikCounter = (e) => {
		if (e === 'left') {
			if (current2 > 0) {
				setCurrent2(current2 - 1);
				navigate(`${pathname}${Replace('page', current2 - 1)}`);
			}
		} else {
			if (current2 < SizeAll - 1) {
				setCurrent2(current2 + 1);
				navigate(`${pathname}${Replace('page', current2 + 1)}`);
			}
		}
	};

	const [hover, setHover] = useState(false);
	const [hover1, setHover1] = useState(false);

	const Last = (
		<Container.Flex>
			<Container.Item
				onMouseLeave={() => setHover(false)}
				onMouseOver={() => setHover(true)}
				onClick={() => {
					setCurrent2(current2 + 3);
					navigate(`${pathname}${Replace('page', current2 + 3)}`);
				}}
			>
				{hover ? <ArrowLeftIcon /> : <div>...</div>}
			</Container.Item>

			<Container.Item
				active={current2 === SizeAll - 1}
				onClick={() => {
					setCurrent2(SizeAll - 1);
					navigate(`${pathname}${Replace('page', SizeAll - 1)}`);
				}}
				title={SizeAll}
				key={SizeAll - 1}
			>
				{SizeAll}
			</Container.Item>
		</Container.Flex>
	);

	const First = (
		<Container.Flex>
			<Container.Item
				active={current2 === 0}
				onClick={() => {
					setCurrent2(0);
					navigate(`${pathname}${Replace('page', 0)}`);
				}}
				title={0}
				key={0}
			>
				{1}
			</Container.Item>

			<Container.Item
				onMouseLeave={() => setHover1(false)}
				onMouseOver={() => setHover1(true)}
				onClick={() => {
					setCurrent2(current2 - 3);
					navigate(`${pathname}${Replace('page', current2 - 3)}`);
				}}
			>
				{hover1 ? <Icon.Left2 /> : <div>...</div>}
			</Container.Item>
		</Container.Flex>
	);

	return (
		<Container margin={margin}>
			<Container.Item
				onClick={() => {
					clikCounter('left');
				}}
				disabled={current2 === 0}
				title={'Previous Page'}
			>
				<Icon.Left />
			</Container.Item>

			{
				//  1 - condition
				SizeAll < 12 ? (
					Array(SizeAll)
						.fill(0)
						.map((v, i) => {
							return (
								<div>
									<Container.Item
										active={current2 === i}
										onClick={() => {
											setCurrent2(i);
											navigate(`${pathname}${Replace('page', i)}`);
										}}
										title={i + 1}
										key={i}
									>
										{i + 1}
									</Container.Item>
								</div>
							);
						})
				) : //  2 - condition

				current2 < 6 ? (
					<Container.Flex>
						{Array(8)
							.fill(0)
							.map((v, i) => {
								return (
									<div>
										<Container.Item
											active={current2 === i}
											onClick={() => {
												setCurrent2(i);
												navigate(`${pathname}${Replace('page', i)}`);
											}}
											title={i + 1}
											key={i}
										>
											{i + 1}
										</Container.Item>
									</div>
								);
							})}
						{Last}
					</Container.Flex>
				) : //  3 - condition

				current2 > SizeAll - 6 ? (
					<Container.Flex>
						{First}

						{Array(SizeAll)
							.fill(0)
							.map((v, i) => {
								return (
									i > SizeAll - 8 && (
										<div>
											<Container.Item
												active={current2 === i}
												onClick={() => {
													setCurrent2(i);
													navigate(`${pathname}${Replace('page', i)}`);
												}}
												title={i + 1}
												key={i}
											>
												{i + 1}
											</Container.Item>
										</div>
									)
								);
							})}
					</Container.Flex>
				) : (
					<Container.Flex>
						{First}
						{Array(SizeAll)
							.fill(0)
							.map((v, i) => {
								return (
									i > current2 - 3 &&
									i < current2 + 3 && (
										<div>
											<Container.Item
												active={current2 === i}
												onClick={() => {
													setCurrent2(i);
													navigate(`${pathname}${Replace('page', i)}`);
												}}
												title={i + 1}
												key={i}
											>
												{i + 1}
											</Container.Item>
										</div>
									)
								);
							})}
						{Last}
					</Container.Flex>
				)
			}

			<Container.Item
				onClick={() => clikCounter('right')}
				disabled={current2 === SizeAll - 1}
				title={'Next Page'}
			>
				<Icon.Right />
			</Container.Item>
		</Container>
	);
};

export default Pagination;
