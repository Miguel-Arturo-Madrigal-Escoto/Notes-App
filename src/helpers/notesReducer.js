

export const notesReducer = ( state = [], action ) => {  
    console.log(state)
    switch (action.type) {
        case 'add': 
            return [ ...state, action.payload ];

        case 'erase':
            return state.filter(state => state.id !== action.payload);

        default:
            return state;
    }
}
