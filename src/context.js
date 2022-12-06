import { createContext, useState } from "react";

const MyContext = createContext({
  state: {
    name: "",
    age: "",
  },
  actions: {
    setName: () => {},
    setAge: () => {},
  },
});

const MyContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();

  const value = {
    state: { name, age },
    actions: { setName, setAge },
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export { MyContextProvider };

export default MyContext;
