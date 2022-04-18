const arrData = [
    {
        id : 1,
        name : 'Khải TK',
        email: 'khaitkdev@gmail.com',
        age : 23
    }
]

const addDataReducer = (state = arrData, action) => {
    switch(action.type){
        case "ADD_DATA" :
            return [...state, action.payload]
        default :
            return state
    }
}

export default addDataReducer