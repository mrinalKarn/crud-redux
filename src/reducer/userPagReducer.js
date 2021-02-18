const UserReducerPagination = (state = [],action) => {
    switch(action.type){
       case 'ADD_USER':
           return state.concat([action.payload.data])
        default:
            return state;   
    }
}

export default UserReducerPagination;