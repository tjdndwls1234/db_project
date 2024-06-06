import React from 'react'
import { Link } from 'react-router-dom';

const Employee = () => {
  return (
    <>
        <h3>직원 페이지입니다.</h3>
        <ul>
            
        <Link to="/productorder"><li><button>직원고용</button></li></Link>
        <Link to="/productpurchase"><li><button>직원정보변경</button></li></Link>
        <Link to="/productreturn"><li><button>직원해고</button></li></Link>

        </ul>
    </>
  )
}

export default Employee
