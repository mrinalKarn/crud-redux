// Add home
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { createStore } from 'redux';
import reducer from './../reducer/reducer';

const store = createStore(reducer);

const Home = (props) => {
    var state = store.getState(); // Working
    return(
    <div>
      {state.map(post =><h1>{post.name}</h1>)}
    </div>
    ) 
}

export default Home;
