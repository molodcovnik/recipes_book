const initialState = {
    category: [
        {name: 'Meat'}
    ]
}

export default function categoryReducer(state = initialState, action) {
    switch (action.type) {

        case 'category/getCategory': {
            return {
                ...state,
                category: [
                    ...state.category,
                    {
                        name: action.payload,
                    }
                ]
            }
        }

        default:

            return state
    }
}