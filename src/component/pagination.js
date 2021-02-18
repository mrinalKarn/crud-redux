import React, { useState, useEffect } from 'react';
import { paginationUser } from './service';
import UserData from './userData';

const Pagination = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        paginationUser(page).then(val => setData(val.data))
    }, [page])

    return (
        <div className="container">
            <select name="pageNo" id="pageNo" value={page} onChange={e => setPage(e.target.value)}>
                <option value="1" default>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            {data.map((userData) => <UserData key={userData.id} data={userData} />)}
        </div>
    )
}

export default Pagination;