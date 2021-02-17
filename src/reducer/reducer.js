// Done with empty state and then with some default state value
// Successfully checked the action creator, action, dispatch, reducer and store
var uniqid = require('uniqid');

const initialState = [
    {
        id: uniqid(),
        name: "Attack On Titan",
        genre: "Action",
        year: "2017",
        description: "When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks. But the safety they have had for so long is threatened when a colossal Titan smashes through the barriers, causing a flood of the giants into what had been the humans' safe zone. During the carnage that follows, soldier Eren Jaeger sees one of the creatures devour his mother, which leads him to vow that he will kill every Titan. He enlists some friends who survived to help him, and that group is humanity's last hope for avoiding extinction at the hands of the monsters.",
        rating: "8"
    },
    {
        id: uniqid(),
        name: "My Hero Academia",
        genre: "Thriller",
        year: "2016",
        description: "All Might and Deku accept an invitation to visit I Island where they battle against a villain who takes the island hostage.",
        rating: "7"
    },
    {
        id: uniqid(),
        name: "DeathNote",
        genre: "Kids",
        year: "2018",
        description: "Death Note (stylized as DEATH NOTE) is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata. The story follows Light Yagami, a teen genius who stumbles across a mysterious otherworldly notebook: the Death Note, which belonged to the Shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in its pages.",
        rating: "9"
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