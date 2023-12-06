import styled from 'styled-components';

const Container = styled.div`
	.Toastify__toast-container--bottom-right {
		right: -4em;
	}
	.Toastify__toast-theme--light {
		border-radius: 30px;
		padding: 0;
		height: 50px;
		width: 230px;
		display: flex;
		align-items: center;
		box-shadow: 9px 23px 42px 0px rgba(28, 41, 60, 0.1);
	}
	.Toastify__toast-body {
		margin: 0;
		align-items: start;
		display: flex;
		align-items: center;
		padding: 5px 15px;
		height: 50px;
		background: #fff;
	}
	.Toastify__toast-body > div:last-child {
		color: #121212;
		font-size: 20px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
	}
	.Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
		margin-top: 6px;
		width: 30px;
		height: 100%;
		display: flex;
		align-items: center;
	}
	.Toastify__close-button {
		min-height: 22px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.Toastify__close-button > svg {
		display: none;
	}
	.Toastify__progress-bar {
		color: inherit;
		background-color: inherit;
	}
	.notification {
		width: 395px;
		min-height: 38px;
		height: fit-content;
		border-radius: 2px;
	}
	.success {
		/* background: #f2fbf5; */
		/* border: 1px solid #00b533; */
	}
	.info {
		/* background: #f2fbff; */
		/* border: 1px solid #04a6fb; */
	}
	.warn {
		/* background: #fffcf2; */
		/* border: 1px solid #ffc000; */
	}
	.error {
		/* background: #fff2f2; */
		/* border: 1px solid #ff0000; */
	}
	.networkOn {
		width: 200px;
		min-height: 38px;
		height: fit-content;
		border-radius: 2px;
		background: #f2fbf5;
		border: 1px solid #00b533;
	}
	.networkOff {
		width: 200px;
		min-height: 38px;
		height: fit-content;
		border-radius: 2px;
		background: #fff2f2;
		border: 1px solid #ff0000;
	}
`;
/* 

*/
function returnType(statusCode) {
	if (statusCode >= 100 && statusCode < 200) {
		return 'info';
	} else if (statusCode >= 400 && statusCode < 600) {
		return 'warn';
	}
}
function getType(success) {
	if (!success) {
		return 'error';
	} else {
		return 'success';
	}
}

const Notification = styled.div`
	padding: 5px 10px;
`;

Notification.Title = styled.div`
	font-weight: 700px;
	color: #5c6470;
	text-align: left;
	display: flex;
	grid-gap: 15px;
	align-items: center;
`;
Notification.Content = styled.div`
	display: flex;
	grid-gap: 15px;
	align-items: center;
`;
Notification.Text = styled.div`
	font-weight: 400;
	font-size: 11px;
	color: #5c6470;
	text-align: justify;
`;

export { returnType, getType, Container, Notification };
