// Add form
import React from 'react';
import ReactDOM from 'react-dom';
import { addData } from './../action/action';
// import { connect } from 'react-redux'; not working
import { useDispatch } from "react-redux";
import {useSelector} from 'react-redux';


const Form = (props) => {
    const dispatch = useDispatch();
    const data = useSelector(state=>state);

    var handleSubmit = (e) => {
       
        e.preventDefault();

        var object_1 = {
            id: 1,
            name: "Amazon",
            genre: "Love story",
            year: "2016",
            description: "Nice movie",
            rating: "4.5"
        }

        dispatch(addData(object_1));
        console.log(data);
    }

    return (
        <div>
            <h1>Form Componenet</h1>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

// const mapStateToProps = (state) => { not working
//     return {
//       posts: state
//     };
//   };

//   const mapDispatchToProps = dispatch => { not working
//     return {
//       addItem: (obj) => {
//         dispatch(addData(obj))
//       }
//     };
//   };
  
//   export default connect(mapStateToProps,mapDispatchToProps)(Form); not working
export default Form;