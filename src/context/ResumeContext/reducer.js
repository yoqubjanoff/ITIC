export const initialState = {
	userData: {
		userName: '',
		lastName: '',
        phoneNumber: '',
        position:'',
        resume: '',
        linkedinLink:'',
        date: '',
        emailAdress:'',
        comment:''
	},
	selected: {},
	resumedata: [],
	searchData: [],
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'setResume':
			return { ...state, resumedata: action.payload };
		case 'setSearch':
			return { ...state, searchData: action.payload };
		case 'setSelectedResume':
			return { ...state, selected: action.payload };
		default:
			return state;
	}
};
