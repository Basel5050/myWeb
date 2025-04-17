import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyCartData from "./component/MyCartData";
import AppContext from "../../../context/context";

const Cart = () => {
    const {isLogged, userData,products}= useContext(AppContext)
    const navigate = useNavigate()
    

  return (
     <div>
<MyCartData/>
     </div>
  );
};

export default Cart;