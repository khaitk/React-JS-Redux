export const deleteData = (id) => {
    return {
        type: 'DELETE_DATA',
        payload : {
            id
        }
    }
}
