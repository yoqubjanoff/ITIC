export const initialState = {
	userData: {
		userName: '',
		lastName: '',
        phoneNumber: '',
        emailAdress:'',
        comment: ''
	},
	selected: {},
	calldata: [],
	search: [],
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'setCallReq':
			return { ...state, calldata: action.payload };
		case 'setSearch':
			return { ...state, search: action.payload };
		case 'setSelectedCall':
			return { ...state, selected: action.payload };
		default:
			return state;
	}
};
