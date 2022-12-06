import { createContext, useState } from "react";

const Color = createContext({
  state: { color: "", subColor: "" },
  actions: { setColor: () => {}, setSubColor: () => {} },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subColor, setSubColor] = useState("red");
  const value = {
    state: { color, subColor },
    actions: { setColor, setSubColor },
  };

  return <Color.Provider value={value}>{children}</Color.Provider>;
};

const { Consumer: ColorConsumer } = Color;

export { ColorProvider, ColorConsumer };

export default Color;
