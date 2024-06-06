import React from 'react';
import { Link } from 'react-router-dom';

const Main = (props) => {
	return (
		<>
			<h3>안녕하세요. 메인페이지 입니다.</h3>
			<ul>
				<Link to= "/product"><li>제품</li></Link>
				<Link to= "/employee"><li>직원</li></Link>
				<Link to= "/service"><li>서비스</li></Link>
				<Link to= "/list"><li>내역</li></Link>
				<Link to= "/company"><li>업체</li></Link>
				<Link to= "/membership"><li>회원</li></Link>
				<Link to= "/pay"><li>유지비지출</li></Link>



			</ul>
		</>
	);
};

export default Main;