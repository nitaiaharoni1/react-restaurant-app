const initialState = {
    firstName: 'aaa',
    lastName: 'bbb',
    address: '',
    city: '',
    country: '',
    houseNum: '',
    email: '',
    password: '',
    remember: false,
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
                loggedIn: true,
                remember: true
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