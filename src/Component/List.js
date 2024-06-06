import React from 'react';
import { Link } from 'react-router-dom';

const List = () => {
	return (
		<>
			<h3>내역 페이지입니다.</h3>
			<ul>
				<Link to="/listpurchase"><li><button>구매내역</button></li></Link>
                <Link to="/listorder"><li><button>주문내역</button></li></Link>
                <Link to="/listreturn"><li><button>반품내역</button></li></Link>
                <Link to="/listdiscard"><li><button>폐기내역</button></li></Link>
                <Link to="/listincome"><li><button>수입내역</button></li></Link>
                <Link to="/listoutcome"><li><button>지출내역</button></li></Link>
                <Link to="/listmanage"><li><button>재고관리내역</button></li></Link>
                <Link to="/listmaintain"><li><button>유지비내역</button></li></Link>
                <Link to="/listproduct"><li><button>제품정보</button></li></Link>
                <Link to="/listcompany"><li><button>업체정보</button></li></Link>


			</ul>
		</>
	);
};

export default List;