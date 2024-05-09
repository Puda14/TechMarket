import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../page/customer/Home.jsx";
import Login from "../page/Login.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import CategoryItem from "../page/customer/CategoryItem.jsx";
import DetailProduct from "../page/customer/DetailProduct.jsx";
import CreateAccount from "../page/CreateAccount.jsx";
import ShoppingCart from "../page/customer/ShoppingCart.jsx";
import Chatboard from "../page/customer/Chatboard/Chatboard.jsx";
import { productApi } from "../../api/productApi.js";
import { fetchData } from "../store/actions/productsAction.js";
import { useDispatch, useSelector } from "react-redux";
import eventEmitter from "../utils/eventEmitter.js";
import DetailUserInfor from '../page/customer/DetailUserInfor.jsx';

import { Dashboard } from "@mui/icons-material";

import HomeManage from "../page/manage/HomeManage.jsx";
import Users from "../page/manage/Users.jsx";
import Products from "../page/manage/Products.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppRouters(props) {
  const dispatch = useDispatch();
  const fetchDataAsync = async () => {
    try {
      const res = await productApi.getProduct();
      dispatch(fetchData(res.data.data));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchDataAsync();
  }, []);;
  const products = useSelector((state) => state.products.data);
  console.log(">>>>", products);
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path={"/createAccount"} element={<CreateAccount />} />
        <Route path={"/cart"} element={<ShoppingCart />} />
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route
          path={"/category/:categoryID"}
          element={
            <PrivateRoute>
              <CategoryItem />
            </PrivateRoute>
          }
        />
        <Route path={"/infor"} element={<DetailUserInfor />} />
        <Route
          path={"/products/:productID"}
          element={
            <PrivateRoute>
              <DetailProduct />
            </PrivateRoute>
          }
        />
        <Route
          path={"/chat"}
          element={
            <PrivateRoute>
              <Chatboard />
            </PrivateRoute>
          }
        />
        <Route path="/managehome" element={<HomeManage />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </div>
  );
}

export default AppRouters;
