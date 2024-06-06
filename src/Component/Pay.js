import React from 'react'
import { Link } from 'react-router-dom';

const Pay = () => {
  return (
    <>
        <h3>유지비 페이지입니다.</h3>
        <ul>
            
            <Link to="/paymaintain"><li><button>유지비지출</button></li></Link>

        </ul>
    </>
  )
}

export default Pay
