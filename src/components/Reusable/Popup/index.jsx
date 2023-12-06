import './style.css';
import Question from '../../../assets/images/popup_question.png';
import Error from '../../../assets/images/popup_error.png';
import Info from '../../../assets/images/popup_info.png';
import Swal from 'sweetalert2';
const Popup = ({
	title,
	imageUrl,
	allowOutsideClick,
	confirmButtonText,
	isConfirmedFunction,
	type,
	showCancelButton,
	input,
	placeholder,
	preConfirm,
}) => {
	Swal.fire({
		imageUrl: imageUrl
			? imageUrl
			: type === 'warning'
			? Error
			: type === 'question'
			? Question
			: type === 'info'
			? Info
			: undefined,
		imageWidth: 125,
		imageHeight: 110,
		title: title || 'Internet not working',
		allowOutsideClick: !allowOutsideClick,
		confirmButtonTextColor: '#0D3B3F',
		confirmButtonText: confirmButtonText || 'Ok',
		showCancelButton: showCancelButton || false,
		input: input,
		inputAttributes: {
			rows: 3,
			placeholder: placeholder,
		},
		preConfirm: preConfirm,
	}).then((result) => {
		if (result.isConfirmed) {
			isConfirmedFunction && isConfirmedFunction();
		}
	});
};

export default Popup;
