export const initialState = {
	userData: {
		vacanciesTitle: '',
		positionLevel: '',
        location: '',
        typeEmployment:'',
        time: '',
		salary: '',
		addDate: '',
	},
	selected: {},
	vacanciesdata: [],
	search: [],
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'setVacancies':
			return { ...state, vacanciesdata: action.payload };
		case 'setSearch':
			return { ...state, search: action.payload };
		case 'setSelectedVacansi':
			return { ...state, selected: action.payload };
		default:
			return state;
	}
};
