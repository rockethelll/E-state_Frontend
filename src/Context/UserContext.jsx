import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [userID, setUserID] = useState(-1);
  console.log(userID, "context");

  return (
    <UserContext.Provider value={{ setUserID, userID }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
