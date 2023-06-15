import { createContext, useState } from "react";

export const UserContext = createContext()

const UserContextProvider = props => {
  const [isLogin, setIsLogin] = useState(false)

  const toggleUser = () => {
    // setIsLogin(!isLogin)
    setIsLogin((current) => !current)
  }
  
  return (
    <UserContext.Provider value={{ toggleUser, isLogin }}>
    {props.children}
  </UserContext.Provider>
  )
}

export default UserContextProvider