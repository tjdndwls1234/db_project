import React from 'react'
import { Link } from 'react-router-dom';

const Company = () => {
    return (
        <>
            <h3>업체페이지입니다.</h3>
            <ul>

                <Link to="/companyregist"><li><button>업체등록</button></li></Link>
                <Link to="/companyupdate"><li><button>업체정보변경</button></li></Link>
                <Link to="/companyderegist"><li><button>업체해지</button></li></Link>

            </ul>
        </>
    )
}

export default Company
