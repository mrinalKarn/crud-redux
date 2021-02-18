import React, { useState, useEffect } from 'react';
import { paginationUser } from './service';
import UserData from './userData';

const Pagination = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [count,pageCount] = useState([]);
    const [prev,disPrev] = useState(false);
    const [next,disNext] = useState(false);

    useEffect(()=>{
        let arr = [];
        for(let i=2;i<71;i++) arr.push(i);
        pageCount(arr);
    },[])

    useEffect(() => {
        paginationUser(page).then(val => setData(val.data));
  
        //Next, Prev logic
        if(page == 70) {disNext(true) ;disPrev(false)}
        else if(page == 1)  {disPrev(true);disNext(false);}
        else {disNext(false);disPrev(false);}
    }, [page])

    const incr = (e) => {
        e.preventDefault();
        setPage(page => {
            //console.log("old",page);
            let p = ++page;
            //console.log("cureent",p);
            return p;
        });
    }

    const decr = (e) => {
        e.preventDefault();
        setPage(page-1);
    }

    return (
        <div className="container">
            <select name="pageNo" id="pageNo" value={page} onChange={e => setPage(e.target.value)}>
                <option value="1" default key={1}>1</option>
                {count.map((val)=> <option value={val} key={val}>{val}</option>)}
            </select>
            <button disabled={prev} onClick={decr}>prev</button>
            <button disabled={next} onClick={incr}>next</button>
            {data.map((userData) => <UserData key={userData.id} data={userData} />)}
        </div>
    )
}

export default Pagination;