import { createContext } from "react";

const AppContext = createContext({
    products : [],
    users : [],
userData: {},
setUserData:()=>{},
setIsLogged: ()=>{},
isLogged : false

})

export default AppContext