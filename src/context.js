import { createContext } from "react";

const MyContext = createContext({
  name: "",
});

const MyContextProvider = ({ children }) => {
  return (
    <MyContext.Provider value={{ name: "younghwan" }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContextProvider };

export default MyContext;
