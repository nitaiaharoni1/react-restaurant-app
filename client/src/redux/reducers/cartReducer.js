const initialState = {
    total: 0,
    totalPrice: 0,
    items: {
        'Fried Spring Rolls': {
            num: 0,
            img: 'https://rasamalaysia.com/wp-content/uploads/2015/03/fried_spring_rolls_thumb.jpg',
            title: 'Fried Spring Rolls',
            price: '2.95',
            description: 'chicken or vegetable',
            meal: 'appetizer'
        },
        'Gai Of Nuur Satay': {
            num: 0,
            img: 'https://www.kuechengoetter.de/uploads/media/960x960/07/47607-satay-spiesschen-mit-erdnusssauce-gai-satay-sai-salad-daeng-gwa.jpg?v=1-0',
            title: 'Gai Of Nuur Satay',
            price: '4.95',
            description: 'skewered chicken or beef with a peanut sauce',
            meal: 'appetizer'
        },
        'Tofu Tod': {
            num: 0,
            img: 'http://www.rachelcooksthai.com/wp-content/uploads/2016/01/fried-tofu-20.jpg',
            title: 'Tofu Tod',
            price: '4.75',
            description: 'fried tofu with a mild chili peanut sauce',
            meal: 'appetizer'
        },
        'Fresh Thai Summer Roll': {
            num: 0,

            img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/6/6/0/FN_Chicken-Summer-Rolls_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371597708666.jpeg',
            title: 'Fresh Thai Summer Roll',
            price: '3.95',
            description: 'with shrimp in a tamarind sauce',
            meal: 'appetizer'
        },
        'Fried Tiger Shrimp Rolls': {
            num: 0,
            img: 'https://media1.fdncms.com/riverfronttimes/imager/u/original/2633986/sushi_house_white_tiger.jpg',
            title: 'Fried Tiger Shrimp Rolls',
            price: '6.50',
            description: 'with a plum sauce',
            meal: 'appetizer'
        },
        'Thai Spare Ribs': {
            num: 0,
            img: 'https://static01.nyt.com/images/2017/08/16/dining/16kitchenrex/16Kitchen-recs-articleLarge.jpg',
            title: 'Thai Spare Ribs',
            price: '8.95',
            description: 'glazed and grilled pork ribs',
            meal: 'appetizer'
        },
        'Gai Pad Khing': {
            num: 0,
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Kai_phat_khing.jpg/250px-Kai_phat_khing.jpg',
            title: 'Gai Pad Khing',
            price: '7.95',
            description: 'sauteed sliced chicken with mushrooms, peppers, cabbage, carrots and onions in a fresh ginger sauce',
            meal: 'main'
        },
        'Nuur Kra Prow': {
            num: 0,
            img: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/EA260A79-7F93-4F6E-B587-A6C9AE1F4FDB/Derivates/8f2988c1-bc54-4806-b4a8-62d2dbfc8db8.jpg',
            title: 'Nuur Kra Prow',
            price: '8.50',
            description: 'sauteed sliced beef with peppers, cabbage, carrots and onions in a chili basil sauce',
            meal: 'main'
        },
        'Koong Pad Khing': {
            num: 0,

            img: 'https://highheelgourmet.files.wordpress.com/2014/01/stir-fried-shrimp-with-green-bean-and-chili-paste-pad-phrik-khing-goong-6.jpg',
            title: 'Koong Pad Khing',
            price: '8.95',
            description: 'sauteed shrimp with mushrooms, peppers, cabbage, carrots and onions in a fresh ginger sauce',
            meal: 'main'
        },
        'Gai Kratiam': {
            num: 0,
            img: 'https://www.truetasteofthai.com/wp-content/uploads/2017/02/13.Gai-Kratiem-1-1-0-945x486.jpg',
            title: 'Gai Kratiam',
            price: '7.95',
            description: 'sauteed sliced chicken with broccoli, cabbage and onions in a fresh garlic sauce',
            meal: 'main'
        },
        'Fried Banana': {
            num: 0,
            img: 'https://img.delicious.com.au/DCI69ugT/w1200/del/2016/04/banana-fritters-28785-1.jpg',
            title: 'Fried Banana',
            price: '7.50',
            description: 'deep-fried banana topped with coconut ice cream',
            meal: 'desert'
        },
        'Gelato': {
            num: 0,
            img: 'https://tarasmulticulturaltable.com/wp-content/uploads/2018/10/Tiramisu-Gelato-2-of-3-500x500.jpg',
            title: 'Gelato',
            price: '4.95',
            description: 'seasonal flavor made in-house',
            meal: 'desert'
        },
        'Khao Tom Mud': {
            num: 0,
            img: 'https://cdn1.foap.com/images/2dcafea3-60c0-4917-a694-91abfe0f5da9/w640.jpeg?1510622824',
            title: 'Khao Tom Mud',
            price: '8.50',
            description: 'steamed sticky rice in a banana leaf with baby banana',
            meal: 'desert'
        }
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
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
        case 'SET':
            state = {
                ...state,
                total: state.total + action.num,
                totalPrice: state.totalPrice + (state.items[action.title].price * action.num),
                items: {
                    ...state.items,
                    [action.title]: {
                        ...state.items[action.title],
                        num: action.num
                    }
                }
            };
            break;
        case 'SUB':
            state = {
                ...state,
                total: state.total - action.num,
                totalPrice: state.totalPrice - (state.items[action.title].price * action.num),
                items: {
                    ...state.items,
                    [action.title]: {
                        ...state.items[action.title],
                        num: state.items[action.title].num - action.num
                    }
                }
            };
            break;
        case 'ZERO':
            state = {
                ...state,
                total: state.total - state.items[action.title].num,
                totalPrice: state.totalPrice - (state.items[action.title].num * state.items[action.title].price),
                items: {
                    ...state.items,
                    [action.title]: {
                        ...state.items[action.title],
                        num: 0
                    }
                }
            };
            break;
        case 'RESET':
            state = initialState;
            break;
    }

    return state;
}

