import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actions";

const initialState= {
    myfavorites: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state, 
                myFavorites: [...state.myfavorites, action.payload]};
                
        case REMOVE_FAVORITE:
            return{
                ...state,
                myFavorites: state.myFavorites.filter(
                    (char) => char.id !== action.payload
                ),
            };    
        default:
            return {...state};
    }
}

export default rootReducer;