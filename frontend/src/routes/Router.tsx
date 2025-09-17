import {Routes, Route} from "react-router-dom";
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import Profile from '../pages/profile/Profile';
import Cart from "../pages/cart/Cart";
import PrivateRoute from "./PrivateRoute";

export default function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

        <Route path='/profile' element={
          <PrivateRoute>
            <Profile/>
          </PrivateRoute>
          }/>

        <Route path='/cart' element={
          <PrivateRoute>
            <Cart/>
          </PrivateRoute>
        }/>
    </Routes>
  )
}
