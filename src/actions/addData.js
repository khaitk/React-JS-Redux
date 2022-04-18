let number = 0;

export const ADD_DATA = (name, email, age) => {
    return {
        type : 'ADD_DATA',
        payload : {
            id : number++,
            email,
            name,
            age
        }
    }
}