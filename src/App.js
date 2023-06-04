
import Layout from "./components/Layout/Layout"
import { Route, Routes } from "react-router-dom";

import Shop from "./pages/Shop/Shop";

import Shoping from "./pages/Shoping/Shoping";

import { Suspense, useEffect } from "react";

import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";


import RegisterForm from "./pages/RegisterForm/RegisterForm"
import LoginForm from "./pages/LoginForm/LoginForm";
import { useDispatch, useSelector } from "react-redux";


import { selectedToken } from "./redux/auth/selectors";
import { refresh } from "./redux/auth/operations";
import Home from "./pages/Home/Home";
import History from "./pages/History/History";


const App = () => {
  const dispatch = useDispatch()
  const token = useSelector(selectedToken)
console.log(token)
  useEffect(() => {
    if (token) {
      dispatch(refresh());
    }
  }, [dispatch, token])
  return (
    <>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>

        <Routes>
        <Route path='/' element={<RestrictedRoute component={Home} redirectTo="/shop"/>} />
        <Route path="/shop/" element={<RestrictedRoute component={Shop} redirectTo="/shop"/>} />
        <Route path="/shop/:shopId" element={<RestrictedRoute component={Shop} redirectTo="/shop"/>} />
        <Route path="/shoping" element={<RestrictedRoute component={Shoping} redirectTo="/shoping"/>} />
        <Route path="/history" element={<PrivateRoute component={History} redirectTo="/history"/>} />
        <Route path="/register" element={<RestrictedRoute component={RegisterForm} redirectTo="/shop"/>} />
        <Route path="/login" element={<RestrictedRoute component={LoginForm} redirectTo="/shop"/>} />
      </Routes> 
      
        </Suspense>
      </Layout>
    </>
  );
};


      

export default App
