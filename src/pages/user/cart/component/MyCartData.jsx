import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AppContext from "../../../../context/context";
const MyCartData = () => {
    const {isLogged, userData,products,setUserData}= useContext(AppContext)
    const navigate = useNavigate()
    
   
      const total = userData.cart?.reduce((acc, item) => acc + parseInt(item.price), 0);
      const removeProduct= (e)=>{
        const upadetCart = userData.cart.filter(product => product.id !== e)
        setUserData({...userData, cart:upadetCart})
        console.log(upadetCart);
        
        axios({
          method: "PATCH",
          url:`http://localhost:3000/users/${localStorage.id}  `,
          data:{
            cart: upadetCart
          }
        })

      }
     
// const myCartProduct = products.filter(item => userData.cart.includes(item.id) )
// console.log(myCartProduct);

      
  return (
isLogged?(<div className="min-h-screen bg-[#f9f4f0] pt-24 px-4 md:px-16 text-[#3e2f2f]">
        <h2 className="text-3xl font-semibold mb-6 border-b border-[#bca18d] pb-2">Your Cart</h2>
  
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-6">
            {userData.cart?.map((item,i) => (
              <div key={i} className="flex items-center bg-white shadow rounded-xl p-4">
                <img src={item.image} alt={item.name} className="w-24 h-24 rounded-lg object-cover" />
                <div className="ml-4 flex-1">
                  <h3 className="text-xl font-medium">{item.name}</h3>
                  <p className="text-sm text-[#8c6e5a]">Quantity: {item.price}</p>
                  <p className="text-lg font-bold mt-1">${parseInt(item.price) * 1}</p>
                </div>
                <button onClick={()=>removeProduct(item.id)} className="text-red-500 hover:text-red-700 font-bold">Remove</button>
              </div>
            ))}
          </div>
  
          {/* Summary */}
          <div className="bg-[#fff6ee] rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 border-b border-[#d2bba3] pb-2">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${total}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax</span>
              <span>%10</span>
            </div>
            <div className="flex justify-between text-lg font-bold border-t border-[#d2bba3] pt-2 mt-2">
              <span>Total</span>
              <span>${total+ total * .1}</span>
            </div>
            <button className="mt-4 w-full bg-[#8b5e3c] hover:bg-[#744a2e] text-white font-semibold py-2 rounded-xl transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>):useEffect(()=>{
        navigate("/login")
      },[])  )
}

export default MyCartData