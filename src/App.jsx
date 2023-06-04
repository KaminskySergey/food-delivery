
import Layout from "./components/Layout/Layout"
import { Route, Routes } from "react-router-dom";

import Shop from "./pages/Shop/Shop";

import Shoping from "./pages/Shoping/Shoping";

// import { useEffect } from "react";

import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";


import RegisterForm from "./pages/RegisterForm/RegisterForm"
import LoginForm from "./pages/LoginForm/LoginForm";
// import { useDispatch, useSelector } from "react-redux";


// import { selectedToken } from "./redux/auth/selectors";
// import { refresh } from "./redux/auth/operations";
import History from "./pages/History/History";
import Home from "./pages/Home/Home";


const App = () => {
//   const dispatch = useDispatch()
  // const token = useSelector(selectedToken)
// console.log(token)
//   useEffect(() => {
//     if (token) {
//       dispatch(refresh());
//     }
//   }, [dispatch, token])
  return (
    <>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<RestrictedRoute component={Home} redirectTo="/shop"/>} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:shopId" element={<Shop />} />
            <Route path="/shoping" element={<Shoping />} />
            <Route path="/orders" element={<PrivateRoute component={History} redirectTo={'/shop'} />} />
            <Route path="/login" element={<RestrictedRoute component={LoginForm} redirectTo={'/shop'} />} />
            <Route path="/register" element={<RestrictedRoute component={RegisterForm} redirectTo={'/shop'} />} />
        </Route>
      </Routes>
    </>
  );
};



export default App
