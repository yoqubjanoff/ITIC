export const initialState = {
	userData: {
		projectName: '',
		client: '',
		tags: [],
        link: '',
	},
	selected: {},
	casedata: [],
	searchData: [],
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'setCase':
			return { ...state, casedata: action.payload };
		case 'setSearch':
			return { ...state, searchData: action.payload };
		case 'setSelectedCase':
			return { ...state, selected: action.payload };
		default:
			return state;
	}
};
