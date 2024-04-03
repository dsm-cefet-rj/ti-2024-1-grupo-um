const initialState = [
    {
        name: "Exercício Exemplo",
        description: "Descrição do exercício exemplo."
    }
]

const trainingReducer = (state = initialState, action) => {
    switch(action){
        case "trainings/add":
            return [...state, action.payload]
        default:
            return state;
    }
}

export default trainingReducer;