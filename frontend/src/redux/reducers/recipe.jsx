const initialState = {
    recipe: [
        {id: 1}
    ]
}

export default function recipeReducer(state = initialState, action) {
    switch (action.type) {

        case 'recipe/getRecipe': {
            return {
                ...state,
                recipe: [
                    ...state.recipe,
                    {
                        id: action.payload,
                    }
                ]
            }
        }

        default:

            return state
    }
}