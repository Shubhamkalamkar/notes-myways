const initialState = [];

const reducers = (state = initialState, action) =>{
    switch(action.type){
        case "ADD_NOTE":
            const id = btoa(Math.random()*200+Math.random()*200);

        return [
            ...state,
            {
                id,
                ...action.note
            }
        ];

        default:
            return state;
    }
};

export default reducers;