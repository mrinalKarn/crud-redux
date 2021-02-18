const intialState = [];

const UserReducer = (state = intialState,action) => {
    switch(action.type){
       case 'ADD_USER':
           return state.concat(action.payload.data)
        default:
            return state;   
    }
}

export default UserReducer;