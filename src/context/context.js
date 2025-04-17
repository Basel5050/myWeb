import { createContext } from "react";

const AppContext = createContext({
    products : [],
    users : [],
userData: {},
setUserData:()=>{},
setIsLogged: ()=>{},
isLogged : false,
productId : 0,
setProductID: ()=>{}

})

export default AppContext