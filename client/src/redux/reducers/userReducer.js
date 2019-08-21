const initialState = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    houseNum: '',
    email: '',
    password: '',
    rememberMe: false,
    loggedIn: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP':
            state = {
                ...state,
                total: state.total + action.num,
                totalPrice: state.totalPrice + (state.items[action.title].price * action.num),
                items: {
                    ...state.items,
                    [action.title]: {
                        ...state.items[action.title],
                        num: state.items[action.title].num + action.num
                    }
                }
            };
            break;
        case 'LOGIN':
            state = {
                ...state,
            };
            break;
        case 'LOGOUT':
            state = {
                ...state,
            };
            break;
    }
    return state;
}