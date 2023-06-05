
import Layout from "./components/Layout/Layout"
import { Route, Routes } from "react-router-dom";

import Shop from "./pages/Shop/Shop";

import Shoping from "./pages/Shoping/Shoping";

import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";


import RegisterForm from "./pages/RegisterForm/RegisterForm"
import LoginForm from "./pages/LoginForm/LoginForm";
import { useDispatch, useSelector } from "react-redux";

import { selectedIsRefreshUser, selectedToken } from "./redux/auth/selectors";
import { refresh } from "./redux/auth/operations";
import History from "./pages/History/History";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;

const App = () => {
  const dispatch = useDispatch()
  const token = useSelector(selectedToken)

  const isefresh = useSelector(selectedIsRefreshUser)
  useEffect(() => {
    if (token) {
      dispatch(refresh());
    }
  }, [dispatch, token])
  return (
    <>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<RestrictedRoute component={Home} redirectTo="/shop"/>} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:shopId" element={<Shop />} />
            <Route path="/shoping" element={<Shoping />} />
            <Route path="/history" element={<PrivateRoute component={History} redirectTo={'/shop'} />} />
            <Route path="/login" element={<RestrictedRoute component={LoginForm} redirectTo={'/shop'} />} />
            <Route path="/register" element={<RestrictedRoute component={RegisterForm} redirectTo={'/shop'} />} />
        </Route>
      </Routes>
      {isefresh && (
        <SpinnerContainer>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="64"
            visible={true}
          />
        </SpinnerContainer>
      )}
    </>
  );
};



export default App
