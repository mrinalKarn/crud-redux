// Add home
// Search

// Correct your search logic

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
//import { connect } from 'react-redux'; not working
import { useSelector } from 'react-redux';
import Post from './post';
import { Link } from "react-router-dom";
import './style.css';
var uniqid = require('uniqid');

//Sorting done, searching logic not woking ,but it's hook and rendering working properly

const Home = (props) => {
  const dataStore = useSelector(state => state.post);
  const [sort, methodSort] = useState('');
  const [input,setInput] = useState('');
  const [data,setData] = useState(dataStore);
  
  //console.log(dataStore); //Error - still not updating data in home while data get updated in form and store

  // Working Sort logic
  // And integrating with hooks

  const sortLogic = () => {

    switch (sort) {
      case "name":
        setData([...data].sort((a, b) => ('' + a.name.toLocaleLowerCase()).localeCompare(b.name.toLocaleLowerCase())));
        break;
      case "year":
        setData([...data].sort((a, b) => a.year - b.year));
        break;
      case "rating":
        setData([...data].sort((a, b) => a.rating - b.rating));
        break;
      default:
        break;
    }

  }

  function isContains(word,key){
  
    if(key.length>word.length)return false;
    for(let i=0;i<word.length;i++){
      let mismatch=false;
      for(let j=0;j<key.length && !mismatch;j++){
        if(word.charAt(i+j)!==key.charAt(j))
            mismatch=true; 
      }
      if(!mismatch)return true;
    }
    return false;
  }

  // working Search logic
  // Not good working logic, just fine, giving anonymus data many time - see later
  // Integrating with logic ,but core logic not working

  //Add a custom search logic
  const searchLogic = () => {
    setData([...dataStore].filter((item)=>{
      return isContains(item.name.toLowerCase(),input.toLowerCase());
    }));    
  }

  // Integrate sort ,search hook with useEffect and add onChange property in both
  useEffect(()=>{
    setData(dataStore) //Changing data on changing on datastore, missed this point so delete not working previously
    searchLogic();
    //console.log(input);
    sortLogic();   // Sort logic
  },[input,sort,dataStore])

  return (
    <div className="container">
      <h1>Anime List</h1>
      <label>
        Add New Entry:
        <Link to={{ pathname: '/form', query: { type: "ADD", id: uniqid() } }}>
          <button>Add</button>
        </Link>
      </label>
      <div>
        <label>Search:</label>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
      </div>
      <div>
        <label> Sort :</label>
        <select name="sort" id="sort" value={sort} onChange={(e) => methodSort(e.target.value)}>
          <option value="none" default>None</option>
          <option value="name">Name</option>
          <option value="year">Year</option>
          <option value="rating">Rating</option>
        </select>
      </div>
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
