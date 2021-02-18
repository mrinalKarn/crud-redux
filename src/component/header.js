import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-container">
            <Link to="/" className="link">Home</Link>
            <Link to="/user" className="link">User</Link>
            <Link to='/pagination' className="link"> Pagination</Link>
        </div>
    )
}

export default Header;