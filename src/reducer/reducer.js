// Done with empty state and then with some default state value
// Successfully checked the action creator, action, dispatch, reducer and store

const initialState = [
    {
        id: 11,
        name: "OYO",
        genre: "Love story",
        year: "2016",
        description: "Nice movie",
        rating: "4.5"
    },
    {
        id: 12,
        name: "Paytm",
        genre: "Love story",
        year: "2016",
        description: "Nice movie",
        rating: "4.5"
    }
]

//   console.clear()
//   const {createStore, combineReducers} = Redux;

//   // Actions or the form
//   const addData = (obj) => {
//     return{
//       type: 'ADD_DATA',
//       payload : {
//         data : obj
//       }
//     };
//   };

//   const editData = (id,obj) => {
//     return{
//       type: 'EDIT_DATA',
//       payload : {
//         id : id,
//         data : obj
//       }
//     };
//   };

//   const deleteData = (id) => {
//     return{
//       type: 'DELETE_DATA',
//       payload : {
//         id : id
//       }
//     };
//   };

// Reducers
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            return state.concat([action.payload.data])
        case 'DELETE_DATA':
            return state.filter((post) => post.id !== action.payload.id)
        //update and edit data do later
        case 'EDIT_DATA':
            return state.filter((post) => post.id !== action.payload.id).concat([action.payload.data])
        default:
            return state;
    }
}

//   // Store
//   const store = createStore(postReducer);

//   // Dispatch
//   var object_2 = {
//     id : 2,
//     name : "the great gatsby",
//     genre : "Love story",
//     year : "2016",
//     description : "Nice movie",
//     rating : "4.5"
//   }

//   var object_1 = {
//     id : 1,
//     name : "the great gatsby",
//     genre : "Love story",
//     year : "2016",
//     description : "Nice movie",
//     rating : "4.5"
//   }

//   var obj_2_new = {
//     id : 2,
//     name : "chutiya gatsby",
//     genre : "Love story",
//     year : "2016",
//     description : "Nice movie",
//     rating : "4.5"
//   }

//   //Initial State
//   console.log(store.getState());

//   // Successfully added the data
//   store.dispatch(addData(object_2)); 
//   store.dispatch(addData(object_1))
//   console.log(store.getState()) 

//   //Successfully Deleted the data
//   store.dispatch(deleteData(1));
//   console.log(store.getState())

//   //Updating the data
//   store.dispatch(editData(2,obj_2_new));
//   console.log(store.getState())
export default reducer;