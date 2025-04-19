import { createContext } from "react";

const AppContext = createContext({
    products : [],
    setProducts : ()=>{},
    users : [],
    setUsers: ()=>{},
userData: {},
setUserData:()=>{},
setIsLogged: ()=>{},
isLogged : false,
productId : 0,
setProductID: ()=>{},
setStatusChange: ()=>{},
seteditproduct:()=>{},
editProduct : true
})

export default AppContext