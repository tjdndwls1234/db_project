import React, { Component, PureComponent } from 'react';
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';
import Header from './Component/Header';
import Main from './Component/Main';
import NotFound from './Component/NotFound';

import Product from './Component/Product';
import ProductOrder from './Component/Product/ProductOrder';
import ProductPurchase from './Component/Product/ProductPurchase';
import ProductReturn from './Component/Product/ProductReturn';
import ProductRegist from './Component/Product/ProductRegist';
import ProductUpdate from './Component/Product/ProductUpdate';
import ProductDeregist from './Component/Product/ProductDeregist';
import ProductDiscard from './Component/Product/ProductDiscard';
import ProductManage from './Component/Product/ProductManage';
import ProductMove from './Component/Product/ProductMove';
import ProductReceive from './Component/Product/ProductReceive';

import List from './Component/List';
import ListCompany from './Component/List/ListCompany';
import ListDiscard from './Component/List/ListDiscard';
import ListIncome from './Component/List/ListIncome';
import ListMaintain from './Component/List/ListMaintain';
import ListManage from './Component/List/ListManage';
import ListOrder from './Component/List/ListOrder';
import ListOutcome from './Component/List/ListOutcome';
import ListProduct from './Component/List/ListProduct';
import ListPurchase from './Component/List/ListPurchase';
import ListReturn from './Component/List/ListReturn';

import Company from './Component/Company';
import CompanyDeregist from './Component/Company/CompanyDeregist';
import CompanyRegist from './Component/Company/CompanyRegist';
import CompanyUpdate from './Component/Company/CompanyUpdate';

import Membership from './Component/Membership';
import MembershipRegist from './Component/Membership/MembershipRegist';
import MembershipUpdate from './Component/Membership/MembershipUpdate';

import Pay from './Component/Pay';
import PayMaintain from './Component/Pay/PayMaintain';

import Employee from './Component/Employee';
import EmployeeFire from './Component/Employee/EmployeeFire';
import EmployeeHire from './Component/Employee/EmployeeHire';
import EmployeeUpdate from './Component/Employee/EmployeeUpdate';

import Service from './Component/Service';
import ServiceAtm from './Component/Service/ServiceAtm';
import ServiceCharge from './Component/Service/ServiceCharge';
import ServiceDelivery from './Component/Service/ServiceDelivery';
import ServiceLottery from './Component/Service/ServiceLottery';


const App = () => {
	return (
		<div className='App'>
            <BrowserRouter>
                <Header />
                <Routes>
                  <Route path="/" exact = {true} element={<Main />}></Route>
                  <Route path="/product" element={<Product />}></Route>
                  <Route path="/productorder" element={<ProductOrder />}></Route>
                  <Route path="/productpurchase" element={<ProductPurchase />}></Route>
                  <Route path="/productregist" element={<ProductRegist />}></Route>
                  <Route path="/productreturn" element={<ProductReturn />}></Route>
                  <Route path="/productupdate" element={<ProductUpdate />}></Route>
                  <Route path="/productderegist" element={<ProductDeregist />}></Route>
                  <Route path="/productdiscard" element={<ProductDiscard />}></Route>
                  <Route path="/productmanage" element={<ProductManage />}></Route>
                  <Route path="/productreceive" element={<ProductReceive />}></Route>
                  <Route path="/productmove" element={<ProductMove />}></Route>

                  <Route path="/list" element={<List />}></Route>
                  <Route path="/listcompany" element={<ListCompany />}></Route>
                  <Route path="/listdiscard" element={<ListDiscard />}></Route>
                  <Route path="/listincome" element={<ListIncome />}></Route>
                  <Route path="/listmaintain" element={<ListMaintain />}></Route>
                  <Route path="/listmanage" element={<ListManage />}></Route>
                  <Route path="/listorder" element={<ListOrder />}></Route>
                  <Route path="/listoutcome" element={<ListOutcome />}></Route>
                  <Route path="/listproduct" element={<ListProduct />}></Route>
                  <Route path="/listpurchase" element={<ListPurchase />}></Route>
                  <Route path="/listreturn" element={<ListReturn />}></Route>
              
                  <Route path="/company" element={<Company />}></Route>
                  <Route path="/companyderegist" element={<CompanyDeregist />}></Route>
                  <Route path="/companyregist" element={<CompanyRegist />}></Route>
                  <Route path="/companyupdate" element={<CompanyUpdate />}></Route>

                  <Route path="/employee" element ={<Employee />}></Route>
                  <Route path="/employeefire" element ={<EmployeeFire />}></Route>
                  <Route path="/employeehire" element ={<EmployeeHire />}></Route>
                  <Route path="/employeeupdate" element ={<EmployeeUpdate />}></Route>

                  <Route path="/membership" element ={<Membership />}></Route>
                  <Route path="/membershipregist" element ={<MembershipRegist />}></Route>
                  <Route path="/membershipupdate" element ={<MembershipUpdate />}></Route>

                  <Route path= "/pay" element ={<Pay />}></Route>
                  <Route path= "/paymaintain" element ={<PayMaintain />}></Route>

                  <Route path= "/service" element = {<Service />}></Route>
                  <Route path= "/servicecharge" element = {<ServiceCharge />}></Route>
                  <Route path= "/servicedelivery" element = {<ServiceDelivery />}></Route>
                  <Route path= "/serviceatm" element = {<ServiceAtm />}></Route>
                  <Route path= "/servicelottery" element = {<ServiceLottery />}></Route>



                  {/* 엘리먼트의 상단에 위치하는 라우트들의 규칙을 모두 확인하고, 일치하는 라우트가 없다면 이 라우트가 화면에 나타나게 됩니다. */}
                  <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
		</div>
	);
};

export default App;