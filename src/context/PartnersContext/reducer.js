export const initialState = {
	userData: {
		photo: '',  
        date:'',
	},
	selected: {},
	search:[],
	partnersdata: [],
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'setPartner':
			return { ...state, partnersdata: action.payload };
		case 'setSearch':
			return { ...state, search: action.payload };
		case 'setSelectedPartners':
			return { ...state, selected: action.payload };
		default:
			return state;
	}
};
