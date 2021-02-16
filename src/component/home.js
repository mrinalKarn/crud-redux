// Add home
import React from 'react';
import ReactDOM from 'react-dom';
//import { connect } from 'react-redux'; not working
import { useSelector } from 'react-redux';
import Post from './post';
import { Link } from "react-router-dom";
import './style.css';
var uniqid = require('uniqid');

const Home = (props) => {
  const data = useSelector(state => state.post);
  //console.log(data); //Error - still not updating data in home while data get updated in form and store
  
  var id = uniqid();

  return (
    <div className="container">
      <h1>Movie List</h1>
      <label>
        Add New Entry:
        <Link to={{pathname:'/form',query:{type: "ADD", id:id}}}>
        <button>Add</button>
        </Link>
      </label>
      {data.map(post => <Post key={post.id} post={post} />)}
    </div>
  )
}

// const mapStateToProps = (state) => { not working
//   return {
//     posts: state
//   };
// };

// export default connect(mapStateToProps,null)(Home); not working
export default Home;
