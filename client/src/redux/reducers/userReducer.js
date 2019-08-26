const initialState = {
    firstName: '',
    lastName: '',
    address: '',
    zip: '',
    city: '',
    country: '',
    houseNum: '',
    email: '',
    loggedIn: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP':
            state = {
                ...state,
                firstName: action.data.firstName,
                lastName: action.data.lastName,
                address: action.data.address,
                zip: action.data.zip,
                city: action.data.city,
                country: action.data.country,
                houseNum: action.data.houseNum,
                email: action.data.email,
                loggedIn: true
            };
            break;
        case 'LOGIN':
            state = {
                ...state,
                ...action.data,
                loggedIn: true
            };
            break;
        case 'LOGOUT':
            state = {
                ...initialState,
            };
            break;
    }
    return state;
}