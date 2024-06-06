import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
	return (
		<>
			<h3>제품 페이지입니다.</h3>
			<ul>
				<Link to="/productorder"><li><button>제품주문</button></li></Link>
                <Link to="/productpurchase"><li><button>제품구매</button></li></Link>
                <Link to="/productreturn"><li><button>제품반품</button></li></Link>
                <Link to="/productregist"><li><button>제품등록</button></li></Link>
                <Link to="/productupdate"><li><button>제품변경</button></li></Link>
			</ul>
		</>
	);
};

export default Product;