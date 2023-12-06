export const initialState = {
	userData: {
		firstName: '',
		lastType: '',
        companyName: '',
		comment:'',
        date: ''
	},
	selected: {},
	testomoniralsdata: [],
	search: [],
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'setTestomonirals':
			return { ...state, testomoniralsdata: action.payload };
		case 'setSearch':
			return { ...state, search: action.payload };
		case 'setSelectedTestomonirals':
			return { ...state, selected: action.payload };
		default:
			return state;
	}
};
