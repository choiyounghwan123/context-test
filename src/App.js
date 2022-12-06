import "./App.css";
import GrandParent from "./components/GrandParent";
import MyContext, { MyContextProvider } from "./context";

function App() {
  return (
    <MyContextProvider>
      <GrandParent />
    </MyContextProvider>
  );
}

export default App;
