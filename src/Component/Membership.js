import React from 'react'
import { Link } from 'react-router-dom';

const Membership = () => {
  return (
    <>
        <h3>회원 페이지입니다.</h3>
        <ul>

            <Link to="/membershipregist"><li><button>회원등록</button></li></Link>
            <Link to="/membershipupdate"><li><button>회원정보변경</button></li></Link>

        </ul>
    </>
  )
}

export default Membership
