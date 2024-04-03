const initialState = [
    {
        name: "Exercício Exemplo",
        description: "Descrição do exercício exemplo."
    }
]

const exercisesReducer = (state = initialState, action) => {
    switch(action){
        case "exercises/add":
            return [...state, action.payload]
        default:
            return state;
    }
}

export default exercisesReducer;