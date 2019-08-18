const initialState = {
    items: {}
}

export default (state = initialState, action) => {
    let itemsUpdate = {...state.items}

    switch (action.type) {
        case 'ADD':
            if (itemsUpdate[action.title]) {
                itemsUpdate[action.title] = itemsUpdate[action.title] + action.num;
            } else {
                itemsUpdate[action.title] = action.num;
            }
            state = {
                items: itemsUpdate
            };
            break;

        case 'SUB':
            if (itemsUpdate[action.title]) {
                itemsUpdate[action.title] = itemsUpdate[action.title] - action.num;
            } else {
                itemsUpdate[action.title] = action.num;
            }
            state = {
                items: itemsUpdate
            };
            break;
    }
    return state;
}