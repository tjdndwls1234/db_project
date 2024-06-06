import React from 'react'
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <>
        <h3>서비스 페이지입니다.</h3>
        <ul>

            <Link to="/serviceatm"><li><button>ATM</button></li></Link>
            <Link to="/servicecharge"><li><button>공공요금</button></li></Link>
            <Link to="/servicedelivery"><li><button>택배</button></li></Link>
            <Link to="/servicelottery"><li><button>복권</button></li></Link>


        </ul>
    </>
  )
}

export default Service
