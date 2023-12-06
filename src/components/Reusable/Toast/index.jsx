import { toast } from 'react-toastify';
import {ErrorsIcon, SuccessIcon, WarnIcon } from '../GenericIcons/genericIcons';
export default function Toast({ type, message, duration }) {
	toast['info'](message, {
		position: 'bottom-right',
		autoClose: duration || 2000,
		className: `${type}`,
		icon:
			type === 'success' ? (
				<SuccessIcon />
			) : type === 'warn' ? (
				<WarnIcon/>
			) : (
				<ErrorsIcon/>
			),
	});
}
