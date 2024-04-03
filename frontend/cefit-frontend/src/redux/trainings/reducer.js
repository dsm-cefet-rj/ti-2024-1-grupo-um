const initialState = []

const trainingReducer = (state = initialState, action) => {
    switch(action){
        case "trainings/add":
            return [...state, action.payload]
        default:
            return state;
    }
}

export default trainingReducer;