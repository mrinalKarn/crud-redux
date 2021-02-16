// Add form
import React from 'react';
import ReactDOM from 'react-dom';
import { addData } from './../action/action';
import { connect } from 'react-redux';

import { createStore } from 'redux';
import reducer from './../reducer/reducer';

const store = createStore(reducer);

const Form = (props) => {
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

        store.dispatch(addData(object_1));
        console.log(store.getState());
    }

    return (
        <div>
            <h1>Form Componenet</h1>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default (Form);