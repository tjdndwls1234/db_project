import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Header(props) {
    return (
        <>
            <Link to="/">
                <div className = "wrapper">
                    <h1>편의점 관리 서비스입니다.</h1>
                </div>
            </Link>
        </>
    );
}

export default Header;