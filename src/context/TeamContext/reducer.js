export const initialState = {
	userData: {
		userName: '',
		lastName: '',
        photo: '',
        position: '',
        date:'',
	},
	selected: {},
	teamdata: [],
	searchData: [],
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'setTeam':
			return { ...state, teamdata: action.payload };
		case 'setSearch':
			return { ...state, searchData: action.payload };
		case 'setSelectedTeam':
			return { ...state, selected: action.payload };
		default:
			return state;
	}
};
