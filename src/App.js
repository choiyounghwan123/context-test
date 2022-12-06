import "./App.css";
import GrandParent from "./components/GrandParent";
import SetName from "./components/SetName";
import { MyContextProvider } from "./context";

function App() {
  return (
    <MyContextProvider>
      <SetName></SetName>
      <GrandParent />
    </MyContextProvider>
  );
}

export default App;
