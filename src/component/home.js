// Add home
import React from 'react';
import ReactDOM from 'react-dom';
//import { connect } from 'react-redux'; not working
import {useSelector} from 'react-redux';

const Home = (props) => {
  const data = useSelector(state=>state.post);
  console.log(data); //Error - still not updating data in home while data get updated in form and store
    return(
    <div>
      {data.map(post =><h1>{post.name}</h1>)} 
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
