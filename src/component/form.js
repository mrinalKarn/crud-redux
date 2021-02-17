// Add form
import React, { useEffect, useState } from "react";
import { addData, editData } from './../action/action';
// import { connect } from 'react-redux'; not working
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
// Show value and add submit logic --done
const Form = (props) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state);

    const [name, addName] = useState('');
    const [year, addYear] = useState()
    const [genre, addGenre] = useState('');
    const [rating, addRating] = useState();
    const [description, addDescription] = useState('');

    let history = useHistory(); //history

    var uniqid = require('uniqid'); //unique id

    var param = props.location.query;// parameter

    // Type and id logic
    let type, id;
    if (param) {
        type = param.type;
        id = param.id;
    }
    else {
        type = "ADD";
        id = uniqid();
    }

    var handleSubmit = (e) => {
        e.preventDefault();

        var object_1 = {
            id: id,
            name: name,
            genre: genre,
            year: year,
            description: description,
            rating: rating
        }

        //console.log(object_1);
        // Submit Logic -----------------------
        if(param && param.type=="EDIT"){
            dispatch(editData(param.id, object_1));
        }
        else dispatch(addData(object_1));
        alert('Successfully data submitted');
        history.push('/');
    }

    useEffect(()=>{
        if (param && param.type == "EDIT") {
            data.post.map(post => {
                if (post.id == param.id) {
                    // Set Value
                    addName(post.name);
                    addYear(post.year);
                    addGenre(post.genre);
                    addRating(post.rating);
                    addDescription(post.description);
                }
            })
        }
    },[]) //[] means this will not run, by changing state of any component
    // useEffect(()=>{}) means run with any change in state
    // useEffect(()=>{},[abc]) means run with any change in abc componenent
    // Really useEffect is Amazing, it has very powerfull
    // It will completly replace all state life cycle method like componentDidMount,DidUpdate
    // And also perform Async, operation, reallly amazing :) :)

    return (
        <div className="container">
            <h2>{type} Form</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    Name:
                <input type="text" name="name" placeholder="name" value={name} onChange={(e) => addName(e.target.value)} />
                </p>
                <p>
                    Year:
                <input type="number" name="year" placeholder="year" value={year} onChange={(e) => addYear(e.target.value)} />
                </p>
                <p>
                    Genre:
                    <select name="genre" id="genre" value={genre} onChange={(e) => addGenre(e.target.value)}>
                        <option value="None" default>None</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Action">Action</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Kids">Kids</option>
                    </select>
                </p>
                <p>
                    Rating:
                <input type="number" name="rating" placeholder="rating" value={rating} onChange={(e) => addRating(e.target.value)} />
                </p>
                <p>
                    Description:
                <textarea type="text" name="description" placeholder="description" value={description} onChange={(e) => addDescription(e.target.value)} />
                </p>
                <input type="submit" value="Submit" />
            </form>
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